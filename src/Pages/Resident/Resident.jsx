import React, { useState, useEffect } from 'react';
import './resident.css';
import Modal from './Modal';
import axios from 'axios';

const ResidentForm = () => {
  const [residents, setResidents] = useState([]);
  const [residentInfo, setResidentInfo] = useState({ 
    firstname: '',
    lastname: '',
    age: '',
    gender: '',
    birthdate:'',
    birthplace:'',
    civilstatus:'',
    bloodtype:'',
    religion:'',
    totalhouseholdmember:'',
    occupation:'',
    nationality:'',
    educationalattainment:'',
    householdno:'',

   });
  const [show, setShow] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResidentInfo({ ...residentInfo, [name]: value });
  };

  useEffect(() => {
    fetchResidents();
  }, []);
 

  const fetchResidents = () => {
    axios
      .get('http://darkrayleh.pythonanywhere.com/api/v1/residents/residents/list')
      .then((response) => {
        setResidents(response.data);
          
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleRemoveResident = async (resident) => {
    try {
      const response = await axios.delete(
        `http://darkrayleh.pythonanywhere.com/api/v1/residents/residents/delete/${resident.id}/`
        
      );
      setResidents((prevResidents) =>
        prevResidents.filter((resident) => resident.id !== resident.id)
      );
  
      window.location.reload();
      return response.data;
    } catch (error) {
      console.error("Error deleting resident:", error);
      throw error;
    }
  };
  const handleModalClose = ()=>{
    setShow(false)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (residentInfo.firstname === '' &&
        residentInfo.lastname === '' &&
        residentInfo.age === '' &&
        residentInfo.gender === '' &&
        residentInfo.birthdate === '' &&
        residentInfo.birthplace === '' &&
        residentInfo.civilstatus === '' &&
        residentInfo.bloodtype === '' &&
        residentInfo.religion === '' &&
        residentInfo.totalhouseholdmember === '' &&
        residentInfo.occupation === '' &&
        residentInfo.nationality === '' &&
        residentInfo.educationalattainment === '' &&
        residentInfo.householdno === '' 
        ){
          alert("Kulang Kulang haha ")
        }else{

          axios
      .post('http://darkrayleh.pythonanywhere.com/api/v1/residents/residents/', residentInfo)
      .then((response) => {
        window.location.reload();
        
      })
      .catch((error) => {
        console.error(error);
        
      });
      
          setShow(false);
        }
    
    
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
              <th className="hakdog">First Name</th>
              <th className="hakdog">Middle Name</th>
              <th className="hakdog">Last Name</th>
              <th className="hakdog">Birthdate</th>
              <th className="hakdog">Birthplace</th>
              <th className="hakdog">Age</th>
              <th className="hakdog">Gender</th>
              <th className="hakdog">CivilStatus</th>
              <th className="hakdog">Blood Type</th>
              <th className="hakdog">Religion</th>
              <th className="hakdog">Total Household Member</th>
              <th className="hakdog">Occupation</th>
              <th className="hakdog">Nationality</th>
              <th className="hakdog">Educational Attainment</th>
              <th className="hakdog">Household No</th>
        
            </tr>
          </thead>
          <tbody>
            {residents.map((resident, index) => (
              <>
              <tr key={index}>
                <td className="hakdogs">{index + 1}</td>
                <td className="hakdogs">{resident.firstname}</td>
                <td className="hakdogs">{resident.middlename}</td>
                <td className="hakdogs">{resident.lastname}</td>
                <td className="hakdogs">{resident.birthdate}</td>
                <td className="hakdogs">{resident.birthplace}</td>
                <td className="hakdogs">{resident.age}</td>
                <td className="hakdogs">{resident.gender}</td>
                <td className="hakdogs">{resident.civilstatus}</td>
                <td className="hakdogs">{resident.bloodtype}</td>
                <td className="hakdogs">{resident.religion}</td>
                <td className="hakdogs">{resident.totalhouseholdmember}</td>
                <td className="hakdogs">{resident.occupation}</td>
                <td className="hakdogs">{resident.nationality}</td>
                <td className="hakdogs">{resident.educationalattainment}</td>
                <td className="hakdogs">{resident.householdno}</td>
                <button className="hakdogs" onClick={() => handleRemoveResident(resident)}>
            Delete
          </button>
                
              </tr>
                </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResidentForm;
