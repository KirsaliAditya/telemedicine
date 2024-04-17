import React, { useState } from 'react'
import { useContext } from 'react';
import prescriptionContext from '../Context/Prescription.js/PrescriptionContext';

function AddPrescription(props) {
    const context = useContext(prescriptionContext);
  const { addPrescription } = context;
  const [Prescription, setPrescription] = useState({diseaseName: "", prescription: "", medicine: "", dosage: ""})
    const handleClick = (e) => {
        e.preventDefault();
        addPrescription(Prescription.diseaseName, Prescription.prescription, Prescription.medicine, Prescription.dosage);
        setPrescription({diseaseName: "", prescription: "", medicine: "", dosage: ""})
        props.showAlert("Added Successfully","success")
    }
    
    const onChange = (e) => {
        setPrescription({...Prescription, [e.target.name]: e.target.value})
    }
  return (
    <div>
      <div className="container my-3">
        <h1>Add a Prescription</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="diseaseName" className="form-label">
              Disease Name
            </label>
            <input
              type="text"
              className="form-control"
              id="diseaseName"
              aria-describedby="emailHelp"
              onChange={onChange}
              name='diseaseName'
              minLength={5}
              required={true}
              value={Prescription.diseaseName}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="prescription" className="form-label">
                Prescription
            </label>
            <input
              type="text"
              className="form-control"
              id="prescription"
              name='prescription'
              onChange={onChange}
              minLength={5}
              required={true}
              value={Prescription.prescription}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="medicine" className="form-label">
                Medicine
            </label>
            <input
              type="text"
              className="form-control"
              id="medicine"
              name='medicine'
              onChange={onChange}
              value={Prescription.medicine}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dosage" className="form-label">
                Dosage
            </label>
            <input
              type="text"
              className="form-control"
              id="dosage"
              name='dosage'
              onChange={onChange}
              value={Prescription.dosage}
            />
          </div>
          <button disabled={Prescription.diseaseName.length<5||Prescription.prescription.length<5?true:false}type="submit" className="btn btn-primary" onClick={handleClick}>
            Add Prescription
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddPrescription
