import React, { useState } from 'react';
import './resident.css';
import Modal from './Modal';

const ResidentForm = () => {
  const [residents, setResidents] = useState([]);
  const [residentInfo, setResidentInfo] = useState({ id: '', name: '', age: '', Address: '' });
  const [show, setShow] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResidentInfo({ ...residentInfo, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setResidents([...residents, residentInfo]);
    setResidentInfo({ id: '', name: '', age: '', Address: '' });
  };

  const handleRemoveResident = (index) => {
    const updatedResidents = [...residents];
    updatedResidents.splice(index, 1);
    setResidents(updatedResidents);
  };

  const handleModalClose = () => {
    setShow(false);
  };

  return (
    <div className="containerzzs">
      <div>
        <h2 className="title">Resident Table</h2>
        <button className="btnz" type="button" onClick={() => setShow(true)}>
          Add Residentsssss
        </button>

        {show && (
          <Modal
            residentInfo={residentInfo}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
            handleModalClose={handleModalClose}
          />
        )}

        <table className="resident-table">
          <thead>
            <tr>
              <th className="hakdog">ID</th>
              <th className="hakdog">Name</th>
              <th className="hakdog">Age</th>
              <th className="hakdog">Address</th>
              <th className="hakdog">Action</th>
            </tr>
          </thead>
          <tbody>
            {residents.map((resident, index) => (
              <tr key={index}>
                <td className="hakdogs">{index + 1}</td>
                <td className="hakdogs">{resident.name}</td>
                <td className="hakdogs">{resident.age}</td>
                <td className="hakdogs">{resident.address}</td>
                <td className="hakdogs" onClick={handleRemoveResident}>
                  dulot
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResidentForm;
