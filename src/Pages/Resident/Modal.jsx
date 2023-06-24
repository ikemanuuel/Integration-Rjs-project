import React from 'react';
import './resident.css';

const Modal = ({ residentInfo, handleInputChange, handleFormSubmit, handleModalClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close" onClick={handleModalClose}>
          X
        </button>
        <h2 className="title">Resident Form</h2>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            className="input-field"
            type="text"
            id="name"
            name="name"
            address="name"
            value={residentInfo.name}
            onChange={handleInputChange}
          />
          <br/>

          <label htmlFor="age">Age:</label>
          <input
            className="input-field"
            type="text"
            id="age"
            name="age"
            address="age"
            value={residentInfo.age}
            onChange={handleInputChange}
          />
           <br/>

          <label htmlFor="address">Address</label>
          <input
            className="input-field"
            type="text"
            id="address"
            name="address"
            address="address"
            value={residentInfo.address}
            onChange={handleInputChange}
          />
          

          <button className="add-button small" type="submit" >
            weeeeeeeeeeeeeeeeeeeeeewsss
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
