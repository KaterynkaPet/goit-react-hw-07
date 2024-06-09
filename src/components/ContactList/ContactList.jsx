import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import { deleteContact } from '../../redux/contactsOps';
import Contact from '../../Contact/Contact';
import css from './ContactList.module.css'

const ContactList = () => {
    const dispatch = useDispatch();
    const selectedFilteredContacts = useSelector(selectFilteredContacts);
    const filter = useSelector(selectNameFilter);
    
    const filteredContactsByName = selectedFilteredContacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    
  
    return (
        <ul className={css.contactList}>
            {filteredContactsByName.map(contact => (
                <Contact key={contact.id} contact={contact} onDelete={() => handleDeleteContact(contact.id)}/>
            ))}
        </ul>
    );
};
export default ContactList;