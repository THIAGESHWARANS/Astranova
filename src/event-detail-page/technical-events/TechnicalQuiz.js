import React from "react";
import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import TechnicalQuizImg from "../../assets/event-images/technical-quiz.jpg";

const technicalQuiz = {
  image: TechnicalQuizImg,
  description:
    "Are you ready to put your IT knowledge to the test? Join us for an electrifying evening of brain-teasing questions and tech-savvy challenges  This event is designed to bring together tech enthusiasts, students, and professionals to showcase their expertise in the vast world of Information Technology.",
  type: "Technical Event",
  eventName: "Technical Quiz",
  dateTime: "March 08, 01:45PM - 03:00PM",
  venue: "IT-442",
  rules: [
    // "Conducted through kahoot (An online platform for quiz)",
    "Individual or team (Maximum 2 members)",
    "Use of Internet is prohibited.",
    "1 round will be held, [1st Round : 50 Questions, 90 minutes]",
  ],

  firstprize: 1200,
  secondprize: 800,
  thirdprize: 0,
  contact: [
    {
      name: "Harish R",
      phoneNo: "9345877121",
    },
    {
      name: "Karanya S",
      phoneNo: "9342300169",
    },
  ],
};

const TechnicalQuiz = () => {
  return <SingleEventPage eventDetails={technicalQuiz} />;
};

export default TechnicalQuiz;
