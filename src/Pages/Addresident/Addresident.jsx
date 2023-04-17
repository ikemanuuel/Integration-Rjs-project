import React, { useState, useEffect } from 'react';
import './addresident.css';

const AddResident = () => {
  const [residents, setResidents] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const storedResidents = JSON.parse(localStorage.getItem('residents'));
    if (storedResidents) {
      setResidents(storedResidents);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('residents', JSON.stringify(residents));
  }, [residents]);

  const handleAddResident = (e) => {
    e.preventDefault();
    const newResident = {
      id: Date.now(),
      firstName,
      lastName,
      age
    };
    setResidents([...residents, newResident]);
    setFirstName('');
    setLastName('');
    setAge('');
    setShowForm(false);
  };

  const handleDeleteResident = (id) => {
    const updatedResidents = residents.filter(resident => resident.id !== id);
    setResidents(updatedResidents);
  };

  return (
    <div className="resident">
      <h1>Residents</h1>
      {showForm ? (
        <form onSubmit={handleAddResident}>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} />
          <button type="submit">Add Resident</button>
          <button onClick={() => setShowForm(false)}>Cancel</button>
        </form>
      ) : (
        <button onClick={() => setShowForm(true)}>Add Resident</button>
      )}
      <ul className="resident-list">
        {residents.map(resident => (
          <li key={resident.id}>
            <div>
              <span>{resident.lastName}, {resident.firstName} ({resident.age})</span>
            </div>
            <div>
              <button onClick={() => handleDeleteResident(resident.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddResident;
