import React from "react";
import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import RelayCodingImg from "../../assets/event-images/relay-coding.jpg";

const relayCoding = {
  image: RelayCodingImg,
  description:
    "Welcome to the ultimate coding showdown! Build your dream team of three to test your teamwork and programming skills! Be prepared for a test of the wits, nerves and trust.",
  type: "Technical Event",
  eventName: "Relay Coding",
  dateTime: "March 09, 12:00PM - 01:30PM",
  venue: "IT-443",
  rules: [
    "Each team should consist of three members.",
    "Ensure that each team member has a Hackerrank account ready for the contest. If any member doesn't have an account, kindly create one before the competition begins.",
    "You can use language of given choice.",
    "Bring your own laptop and mobile for internet connectivity if possible.",
    "Each team is given three problems to solve. Each team member may only solve one problem at a time. The next person may only begin to solve the next problem once the previous one is completed. The winning team is the one that completes all three problems first.",
  ],

  firstprize: 1500,
  secondprize: 1000,
  thirdprize: 0,
  contact: [
    {
      name: "Sudharsan S",
      phoneNo: "9363350970",
    },
    {
      name: "Nithyasree P",
      phoneNo: "6382260515",
    },
  ],
};

const RelayCoding = () => {
  return <SingleEventPage eventDetails={relayCoding} />;
};

export default RelayCoding;
