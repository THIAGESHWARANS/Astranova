import React from "react";
import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import astranovaCodingImg from "../../assets/event-images/celestra-coding.jpg";

const astranovaCoding = {
  image: astranovaCodingImg,
  description:
    "Are you a passionate coder looking for an opportunity to showcase your skills? If yes, then join us for our upcoming Competitive Coding Challenge!",
  type: "Golden-Byte Event",
  eventName: "Astranova Coding",
  dateTime: "Mar 08, 11:00AM - 01:00PM",
  venue: "IT-442",
  rules: [
    "Solo Participation",
    "The participant should have a Hackerrank account.",
    "The logic can be implemented in any languages.",
    "Participants may bring their own laptops.",
    "Plagiarism leads to direct disqualification",
  ],
  firstprize: 1,
  secondprize: 2000,
  thirdprize: 0,
  contact: [
    {
      name: "Aruneshwar T K",
      phoneNo: "7200986816",
    },
    {
      name: "Irfaan Fareed A",
      phoneNo: "9786725825",
    },
    {
      name: "Sudharsan S",
      phoneNo: "9363350970",
    },
  ],
};

const CelestraCoding = () => {
  return <SingleEventPage eventDetails={astranovaCoding} isCoinPrize={true} />;
};

export default CelestraCoding;
