import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [peoples, setPeoples] = useState(data);

  const removeBirthday = (id) => {
    const newBirthdays = peoples.filter((person) => person.id !== id);

    setPeoples(newBirthdays)
  }

  return (
    <main>
      <div className='container'>
        <h2>{peoples.length} birthdays today</h2>
        {peoples.map((people) => {
          const {id, name, age, image} = people;
          return (
            <div>
              <List key={id} {...people}/>
              <button className='btn' onClick={() => removeBirthday(id)}>remove</button>
            </div>
          )
          
          
        })}
        <button onClick={() => setPeoples([])}>clear all</button>
        <button onClick={() => setPeoples(data)}>reset</button>
      </div>
    </main>
  );
}

export default App;
