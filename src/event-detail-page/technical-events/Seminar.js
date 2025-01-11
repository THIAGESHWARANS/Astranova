import React from "react";
import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import SeminarImg from "../../assets/event-images/seminar.jpg";

const seminar = {
  image: SeminarImg,
  description:
    "With today's cars being more connected than ever, thanks to features like Wi-Fi, Bluetooth, and GPS, they're also more vulnerable to cyber attacks. But fear not! Cybersecurity in connected cars involves deploying cutting-edge defenses.",
  type: "Technical Event",
  eventName: "Seminar",
  dateTime: "Mar 08, 11:30AM - 1:30PM",
  venue: "IT-443",
  rules: [
    "With today's cars being more connected than ever, thanks to features like Wi-Fi, Bluetooth, and GPS, they're also more vulnerable to cyber attacks. Imagine someone remotely taking control of your car's brakes or steering—it's a scary thought!",
    "But fear not! Cybersecurity in connected cars involves deploying cutting-edge defenses, like digital locks and alarms, to keep hackers at bay. These include encrypting data sent between car parts, verifying the identities of devices trying to access your car, and constantly scanning for any suspicious activity.",
    "You will learn all this and more in our workshop on Cybersecurity in Connected Cars!",
  ],

  contact: [
    {
      name: "Meganthan R",
      phoneNo: "7810093573",
    },
    {
      name: "Haritha N R",
      phoneNo: "9597339458",
    },
  ],
};

const Seminar = () => {
  return (
    <SingleEventPage eventDetails={seminar} noPrize={true} isDetails={true} />
  );
};

export default Seminar;
