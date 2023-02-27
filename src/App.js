import './App.css';
import React from 'react'
import contacts from "./contacts.json";

function App() {
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
          {contacts.map((elem, i) => 
            i < 5 ? 
            <tr key={i}>
              <td><img width='90px' src={elem.pictureUrl} alt="profileImage"/></td>
              <td>{elem.name}</td>
              <td>{elem.popularity}</td>
            </tr> 
            : null
          )}
      </table>
    </div>
  );
}

export default App;
