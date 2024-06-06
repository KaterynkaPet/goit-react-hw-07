import { createSlice, nanoid } from "@reduxjs/toolkit";

const formatPhoneNumber = (value) => {
  const phoneNumber = value.replace(/[^\d]/g, '');
  const match = phoneNumber.match(/^(\d{0,3})(\d{0,2})(\d{0,2})$/);
  if (match) {
    return match.slice(1).filter(Boolean).join('-');
  }
  return '';
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(contact) {
        const formattedNumber = formatPhoneNumber(contact.number);
        return {
          payload: {
            ...contact,
            id: nanoid(),
            number: formattedNumber,
          },
        };
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },

    setLoading(state, action) {
      state.loading = action.payload;
    },

    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { addContact, deleteContact, setLoading, setError } = contactsSlice.actions;
export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export default contactsSlice.reducer;