import ContactForm from './components/contact_form/ContactForm'
import SearchBox from './components/search_box/SearchBox'
import ContactList from './components/contact_list/ContactList'
import css from './App.module.css'


function App () {
 
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  )
}

export default App;
