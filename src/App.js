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
  
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
          {contacts.map((elem, i) => 
            <tr key={elem.id}>
              <td><img width='90px' src={elem.pictureUrl} alt="profileImage"/></td>
              <td>{elem.name}</td>
              <td>{elem.popularity}</td>
              <td>{elem.wonOscar && <span>🏆</span>}</td>
              <td>{elem.wonEmmy && <span>🏆</span>}</td>
            </tr> 
          )}
      </table>
      <button onClick={handleRandomContact}>Add Contact</button>
    </div>
  );
}

export default App;
