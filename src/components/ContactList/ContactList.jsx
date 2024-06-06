import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, deleteContact } from '../../redux/contactsSlice'
import { selectNameFilter } from '../../redux/filtersSlice';
import Contact from '../../contact/Contact';
import css from './ContactList.module.css'

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);
    
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    
   
    const handleDeleteContact = (id) => {
        dispatch(deleteContact(id));  
    };

    return (
        <ul className={css.contactList}>
            {filteredContacts.map(contact => (
                <Contact key={contact.id} contact={contact} onDelete={() => handleDeleteContact(contact.id)}/>
            ))}
        </ul>
    );
};
export default ContactList;