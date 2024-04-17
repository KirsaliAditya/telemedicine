import React from "react";
import prescriptionContext from "./PrescriptionContext";
import { useState } from "react";

const PrescriptionState = (props) => {
  const host="http://localhost:5000/";
  const prescriptionsInitial = []; 
  const [prescriptions, setPrescriptions] = useState(prescriptionsInitial);
//Get all Prescriptions
  const getPrescriptions = async () => {
    //API Call
    const response = await fetch(`${host}api/prescription/fetchallprescription`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authToken": localStorage.getItem('token')
      }
    });
    const json = await response.json();
    console.log(json);
    setPrescriptions(json);
  };
  //Add a Prescriptions
  const addPrescriptions= async (diseaseName,prescription,medicine,dosage) => {
    const response = await fetch(`${host}api/prescription/addprescription`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authToken": localStorage.getItem('token')
      },
      body: JSON.stringify({diseaseName,prescription,medicine,dosage})
    });
    const prescription = await response.json();
    setPrescriptions(prescriptions.concat(prescription));
  }

    //Delete a Prescription
    const deletePrescriptions = async (id) => {
      
      const response = await fetch(`${host}api/prescription/deleteprescription/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "authToken": localStorage.getItem('token')
        }
      });
      const json = await response.json();
      console.log(json);
      const newPrescriptions= prescriptions.filter((prescription) => {
        return prescription._id !== id;
      });
      setNotes(newPrescriptions);
    };
    //Edit a Note
    const editPrescriptions =async  (id, diseaseName,prescription,medicine,dosage) => {
      const response = await fetch(`${host}api/prescription/updateprescription/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "authToken": localStorage.getItem('token')
        },
        body: JSON.stringify({diseaseName,prescription,medicine,dosage})
      });
      const json = await response.json();
      console.log(json);
      let newPrescriptions = JSON.parse(JSON.stringify(prescriptions));
      for (let index = 0; index < newPrescriptions.length; index++) {
        const element = newPrescriptions[index];
        if (element._id === id) {
            newPrescriptions[index].diseaseName= diseaseName;
            newPrescriptions[index].prescription = prescription;
            newPrescriptions[index].medicine = medicine;
            newPrescriptions[index].dosage = dosage;
          break;
        }
      }
      setNotes(newPrescriptions);
    };



  return (
    <prescriptionContext.Provider value={{ notes, addPrescriptions,deletePrescriptions,editPrescriptions,getPrescriptions}}>
      {props.children}
    </prescriptionContext.Provider>
  );
};
export default PrescriptionState
