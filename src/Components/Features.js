import React from "react";
import Item from "./Item";
import SecureVideoConsultationImage from "./SecureVideoConsultation.jpeg";
import ElectronicPrescriptionImage from "./ElectronicPrescription.jpeg";
import AppointmentReminderImage from "./AppointmentReminder.jpeg";
import MedicalRecordImage from "./MedicalRecord.jpeg";
import VirtualWaitingImage from "./VirtualWaiting.jpeg";
import MultiAccessibilityImage from "./MultiAccessibility.jpeg";

function Features() {
  let securityDescription = "Our telemedicine app is accessible on any device, allowing users to easily connect with healthcare professionals and manage their healthcare needs. This flexibility ensures convenience and accessibility for patients, promoting seamless healthcare delivery.";
  let electronicDescription="Our app streamlines medication management with electronic prescriptions, reducing errors and expediting fulfillment. Patients track prescriptions and receive refill reminders. Electronic prescriptions foster efficient collaboration among patients, providers, and pharmacies.";
  let AppointmentDescription="Our app sends personalized appointment reminders via SMS or email, enhancing patient engagement. Patients stay informed and manage their schedules efficiently. This proactive approach optimizes scheduling processes for improved efficiency.";
  let FullTimeDescription="Our app grants 24/7 access to medical records, empowering patients to review health information anywhere. With a few taps, users securely access lab results, medication history, and treatment plans. This feature promotes patient involvement and enhances communication with healthcare providers.";
   let VirtualDescription="Our platform introduces virtual waiting rooms for a seamless pre-appointment experience. Patients digitally check-in via the app, receiving real-time status updates and wait time estimates. This feature enhances convenience, reducing the need for physical waiting rooms and optimizing resources.";
   let MultiPlatformDescription="Our app ensures multi-platform accessibility for seamless healthcare access. Users connect with healthcare professionals and manage needs across devices. This flexibility ensures care on preferred devices, promoting convenience and accessibility.";
  return (
    <div className="container my-3">
      <h1
        className="text-center"
        style={{
          fontFamily: "TimesNewRoman",
          fontWeight: "bold",
          color: "Green",
          marginTop:"100px"
        }}
      >
        Our Features
      </h1>
      <div className="row my-3">
        <div className="col-md-4">
          <Item title="Secure Video Consultation" url={SecureVideoConsultationImage} description={securityDescription}/>
        </div>
        <div className="col-md-4">
          <Item title="Electronic Prescriptions" url={ElectronicPrescriptionImage}  description={electronicDescription}/>
        </div>
        <div className="col-md-4">
          <Item title="Appointment Reminders" url={AppointmentReminderImage} description={AppointmentDescription}/>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-md-4">
          <Item title="24/7 Medical Records Access" url={MedicalRecordImage} description={FullTimeDescription}/>
        </div>
        <div className="col-md-4">
          <Item title="Virtual Waiting Rooms" url={VirtualWaitingImage} description={VirtualDescription}/>
        </div>
        <div className="col-md-4">
          <Item title="Multi-platform Accessibility" url={MultiAccessibilityImage} description={MultiPlatformDescription}/>
        </div>
      </div>
    </div>
  );
}

export default Features;
