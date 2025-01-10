import React from "react";
import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import WorkshopImg from "../../assets/event-images/workshop.jpg";

const workshop = {
  image: WorkshopImg,
  description:
    "Orange is an open-source data visualization, machine learning, and data mining toolkit. It offers a visual programming interface for data analysis, allowing users to interactively explore and analyze datasets without needing to write code. Orange provides ML functionalities such as data preprocessing, feature selection, classification, regression, clustering, association rule mining, and more.",
  type: "Technical Event",
  eventName: "Work Shop",
  dateTime: "Mar 9, 10AM-12:30PM, 2PM-4PM",
  venue: "IT-444",
  rules: [
    "Orange is an open-source data visualization, machine learning, and data mining toolkit developed at the University of Ljubljana, Slovenia. It offers a visual programming interface for data analysis, allowing users to interactively explore and analyze datasets without needing to write code.",
    "Orange provides a wide range of functionalities, including data preprocessing, feature selection, classification, regression, clustering, association rule mining, and more. Its visual programming interface allows users to create workflows by connecting predefined components called widgets, which represent different data analysis techniques and algorithms.",
  ],

  contact: [
    {
      name: "Suganth S",
      phoneNo: "6369633556",
    },
    {
      name: "Vigneshwari G",
      phoneNo: "9894457113",
    },
  ],
};

const Workshop = () => {
  return (
    <SingleEventPage eventDetails={workshop} noPrize={true} isDetails={true} />
  );
};

export default Workshop;
