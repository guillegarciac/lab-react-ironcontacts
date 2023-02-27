import './App.css';
import React, {useState} from 'react'
import contactsArray from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsArray.slice(0,5)) 
  //contacts as the status of the Array and contactsArray as initial value
  
  const handleRandomContact = () => {
    const randomContacts = [...contacts]
    randomContacts.push(contactsArray[Math.floor(Math.random() * (contactsArray.length -5))])
    setContacts(randomContacts)
  }

  const handleNameSort = () => {
    const sortByName = [...contacts].sort((a,b) => a.name.localeCompare(b.name));
    setContacts(sortByName)
    //localeCompare() compares two strings in the current locale and returns a value indicating whether the first string comes before, after, or is the same as the second string in sort order.
  }

  const handlePopularitySort = () => {
    const sortByPopularity = [...contacts].sort((a,b) => b.popularity - a.popularity);
    setContacts(sortByPopularity)
  }

  const handleContactRemove = (id) => {
    const deleteContact = [...contacts].filter(elem => elem.id !== id); 
    //filter() returs a new array with contacts except the one with the specified id
    //elem.id !== id checks if the id of the current contact in not equal to the contact we want to delete.
    //if true => the filter includes the contact in the new array
    //if false => the filter excludes it
    setContacts(deleteContact)
  }
  
  return (
    <div className="App">
      <button onClick={handleRandomContact}>Add Contact</button>
      <button onClick={handleNameSort}>Sort by Name</button>
      <button onClick={handlePopularitySort}>Sort by Popularity</button>
      <h1>IronContacts</h1>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Actions</th>
        </tr>
          {contacts.map((elem) => 
            <tr key={elem.id}>
              <td><img width='90px' src={elem.pictureUrl} alt="profileImage"/></td>
              <td>{elem.name}</td>
              <td>{elem.popularity}</td>
              <td>{elem.wonOscar && <span>🏆</span>}</td>
              <td>{elem.wonEmmy && <span>🏆</span>}</td>
              <td><button onClick={() => handleContactRemove(elem.id)}>Delete</button></td>
              {/* anonymous arrow function that calls the handleContactRemove() and passes the id of the contact as an argument. */} 
            </tr> 
          )}
      </table>
      
    </div>
  );
}

export default App;
