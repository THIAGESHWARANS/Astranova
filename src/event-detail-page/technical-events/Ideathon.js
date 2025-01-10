import React from "react";
import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import IdeathonImg from "../../assets/event-images/ideathon.jpg";

const ideathon = {
  image: IdeathonImg,
  description:
    "Get ready for a thrilling ride into the world of creativity and groundbreaking ideas! IDEATHON is not just an event; it's a spirited competition challenging innovation and creativity. Dynamic teams and individuals, present your most innovative ideas to our esteemed panel for a chance to shine! 🌟 Are you ready to revolutionize the world? Join IDEATHON now!",
  type: "Elite Event",
  eventName: "Ideathon",
  dateTime: "Mar 09, 10:00AM - 01:30PM",
  venue: "IT-206",
  rules: [
    "Each team is required to develop a concise and captivating presentation (in PPT format) to present their concept to a distinguished panel of evaluators and fellow participants. The presentation should be meticulously crafted, engaging, and effectively communicate the proposed solution.",
    "Participants must form teams, with a maximum of three members per team, or may opt to participate individually.",
    "The challenge at hand must be clearly defined, and teams will be entrusted with the task of devising groundbreaking solutions to address this challenge.",
    "The event will be time-constrained, with teams allotted a specific timeframe to deliver their pitches. The duration could vary between 10 to 20 minutes, depending on the complexity of the challenge.",
    "A panel of esteemed judges will evaluate each project based on criteria such as innovation, viability, societal impact, and potential for scalability.",
  ],
  firstprize: 1000,
  secondprize: 500,
  thirdprize: 0,
  contact: [
    {
      name: "Gayathri M",
      phoneNo: "6385658969",
    },
    {
      name: "Nithyasree P",
      phoneNo: "6382260515",
    },
  ],
};

const Ideathon = () => {
  return <SingleEventPage eventDetails={ideathon} thirdprize={false} />;
};

export default Ideathon;
