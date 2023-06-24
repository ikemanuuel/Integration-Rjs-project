import React, { useState } from 'react';
import './resident.css';

const ResidentForm = () => {
  const [residents, setResidents] = useState([]);
  const [residentInfo, setResidentInfo] = useState({ id: '', name: '', age: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResidentInfo({ ...residentInfo, [name]: value });
  };

  const handleAddResident = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setResidents([...residents, residentInfo]);
    setResidentInfo({ id: '', name: '', age: '' });
    setIsModalOpen(false);
  };

  const handleRemoveResident = (index) => {
    const updatedResidents = [...residents];
    updatedResidents.splice(index, 1);
    setResidents(updatedResidents);
  };

  return (
    <div className="containerzzs">
      <div>
      <h2 className="title">Resident Table</h2>
      <button className="btnz" type="button" onClick={handleAddResident}>
        Add Residentsssss
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleModalClose}>
              &times;
            </span>
            <h2 className="title">Resident Form</h2>
            <form onSubmit={handleFormSubmit}>

              <label htmlFor="name">Name:</label>
              <input
                className="input-field"
                type="text"
                id="name"
                name="name"
                value={residentInfo.name}
                onChange={handleInputChange}
              />

              <label htmlFor="age">Age:</label>
              <input
                className="input-field"
                type="text"
                id="age"
                name="age"
                value={residentInfo.age}
                onChange={handleInputChange}
              />

              <button className="add-button small" type="submit">
                Add
              </button>
            </form>
          </div>
        </div>
      )}

      <table className="resident-table">
        <thead>
          <tr>
            <th className='hakdog'>ID</th>
            <th className='hakdog'>Name</th>
            <th className='hakdog'>Age</th>
            <th className='hakdog'>Action</th>
          </tr>
        </thead>
        <tbody>
          {residents.map((resident, index) => (
            <tr key={index} >
              <td className='hakdogs'>{index+1}</td>
              <td className='hakdogs'>{resident.name}</td>
              <td className='hakdogs' >{resident.age}</td>
              <td className='hakdogs' onClick={handleRemoveResident}>dulot</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default ResidentForm;
