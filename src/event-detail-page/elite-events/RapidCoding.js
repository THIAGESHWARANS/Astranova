import React from "react";
import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import Reversecoding from "../../assets/event-images/reversecoding.jpg";

const rapidCoding = {
  image: Reversecoding,
  description:
    "Dive into the thrill of rapid coding at our symposium! Solve standard coding questions within tight timeframes, showcasing your coding prowess under pressure. Earn points for each problem cracked accurately, and compete against the clock to claim the top spot!",
  type: "Golden-Byte Event",
  eventName: "Rapid Coding",
  dateTime: "March 09, 10:00AM - 12:00PM",
  venue: "IT-443",
  rules: [
    "Solo Participation.",
    "Participants must adhere to the specified time limit for the coding challenge.",
    "Participants must refrain from using any external resources or assistance during the coding challenges.",
    "Plagiarism or sharing solutions during the event is strictly prohibited.",
    "Don't hesitate to seek guidance or resources from the organizers if needed.",
    "The logic can be implemented in any languages.",
    "Participants may bring their own laptops.",
    "Plagiarism leads to direct disqualification.",
  ],

  firstprize: 1,
  secondprize: 2000,
  thirdprize: 0,
  contact: [
    {
      name: "Pradeep C",
      phoneNo: "9344306600",
    },
    {
      name: "Harish R",
      phoneNo: "9345877121",
    },
  ],
};

const RapidCoding = () => {
  return <SingleEventPage eventDetails={rapidCoding} isCoinPrize={true} />;
};

export default RapidCoding;
