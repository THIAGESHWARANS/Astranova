import React from "react";
import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import BugBustersImg from "../../assets/event-images/bug-busters.jpg";

const bugBusters = {
  image: BugBustersImg,
  description:
    'Join us for the ultimate Bug Blast, where coding enthusiasts  unite to showcase their debugging powers! Dive into a thrilling competition, unraveling the trickiest bugs and racing against clock to emerge as the undisputed debugging champion. Get ready for an adrenal-packed event the best bug busters will triumph! "Code chaos conquered, bugs beware!"',
  type: "Technical Event",
  eventName: "Bug Busters",
  dateTime: "March 09, 09:00AM - 10:00AM",
  venue: "IT-442",
  rules: [
    "Programming languages given - Python, C, C++, Java",
    "Plagiarism leads to direct disqualification",
    "Use of automated debuggers and compilers will be prohibited",
    "Strictly no Internet",
  ],
  firstprize: 800,
  secondprize: 400,
  thirdprize: 0,
  contact: [
    {
      name: "Suganth S",
      phoneNo: "6369633556",
    },
    {
      name: "Nithish R G",
      phoneNo: "9442600890",
    },
  ],
};

const BugBusters = () => {
  return <SingleEventPage eventDetails={bugBusters} />;
};

export default BugBusters;
