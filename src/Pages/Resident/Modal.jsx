import React from 'react';
import './resident.css';

const Modal = ({ residentInfo, handleInputChange, handleFormSubmit, handleModalClose }) => {

  
  return (
    <div className="modal">
      <button className="close" onClick={handleModalClose}>
          X
        </button>
      <div className="modal-content">
      

        <h2 className="title">Resident Form</h2>
        {/* <form onSubmit={handleFormSubmit}> */}
        <label htmlFor="firstname">First Name:</label>
        <input
          className="input-field"
          type="text"
          id="firstname"
          name="firstname"
          value={residentInfo.firstname}
          onChange={handleInputChange}
        />
        <br/>

        <label htmlFor="lastname">Last Name:</label>
        <input
          className="input-field"
          type="text"
          id="lastname"
          name="lastname"
          value={residentInfo.lastname}
          onChange={handleInputChange}
        />
        <br/>

        <label htmlFor="middlename">Middle Name:</label>
        <input
          className="input-field"
          type="text"
          id="middlename"
          name="middlename"
          value={residentInfo.middlename}
          onChange={handleInputChange}
        />
        <br/>

        <label htmlFor="age">Age:</label>
        <input
          className="input-field"
          type="number"
          id="age"
          name="age"
          value={residentInfo.age}
          onChange={handleInputChange}
        />
        <br/>

        <label htmlFor="gender">Gender:</label>
        <input
          className="input-field"
          type="text"
          id="gender"
          name="gender"
          value={residentInfo.gender}
          onChange={handleInputChange}
        />
        <br/>

        <label htmlFor="birthdate">Birthdate:</label>
        <input
          className="input-field"
          type="date"
          id="birthdate"
          name="birthdate"
          value={residentInfo.birthdate}
          onChange={handleInputChange}
        />
        <br/>

        <label htmlFor="birthplace">Birthplace:</label>
        <input
          className="input-field"
          type="text"
          id="birthplace"
          name="birthplace"
          value={residentInfo.birthplace}
          onChange={handleInputChange}
        />
        <br/>

        <label htmlFor="civilstatus">Civil Status:</label>
        <input
          className="input-field"
          type="text"
          id="civilstatus"
          name="civilstatus"
          value={residentInfo.civilstatus}
          onChange={handleInputChange}
        />
        <br/>

        <label htmlFor="bloodtype">Blood Type:</label>
        <input
          className="input-field"
          type="text"
          id="bloodtype"
          name="bloodtype"
          value={residentInfo.bloodtype}
          onChange={handleInputChange}
        />
        <br/>

        <label htmlFor="religion">Religion:</label>
        <input
          className="input-field"
          type="text"
          id="religion"
          name="religion"
          value={residentInfo.religion}
          onChange={handleInputChange}
        />
        <br/>

        <label htmlFor="totalhouseholdmember">Total Household Member:</label>
        <input
          className="input-field"
          type="number"
          id="totalhouseholdmember"
          name="totalhouseholdmember"
          value={residentInfo.totalhouseholdmember}
          onChange={handleInputChange}
        />
        <br/>

        <label htmlFor="occupation">Occupation:</label>
        <input
          className="input-field"
          type="text"
          id="occupation"
          name="occupation"
          value={residentInfo.occupation}
          onChange={handleInputChange}
        />
        <br/>

        <label htmlFor="nationality">Nationality:</label>
        <input
          className="input-field"
          type="text"
          id="nationality"
          name="nationality"
          value={residentInfo.nationality}
          onChange={handleInputChange}
        />
        <br/>

        <label htmlFor="educationalattainment">Educational Attainment:</label>
        <input
          className="input-field"
          type="text"
          id="educationalattainment"
          name="educationalattainment"
          value={residentInfo.educationalattainment}
          onChange={handleInputChange}
        />
        <br/>

        <label htmlFor="householdno">Household No:</label>
        <input
          className="input-field"
          type="text"
          id="householdno"
          name="householdno"
          value={residentInfo.householdno}
          onChange={handleInputChange}
        />
        

          

          <button className="add-button small" type="button" onClick={handleFormSubmit} >
            Add Resident
          </button>
        {/* </form> */}
      </div>
    </div>
  );
};

export default Modal;
