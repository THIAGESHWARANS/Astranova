import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import MaathiYosiImg from "../../assets/event-images/maathi-yosi.jpg";

const maathiYosi = {
  image: MaathiYosiImg,
  description:
    "Try your best to not answer the question! Reply to as many questions as you can without giving a logical answer to any of them. If your answer is even slightly related to the question, you're out!",
  type: "Non Technical Event",
  eventName: "Maathi Yosi",
  dateTime: "Mar 09, 03:00PM - 04:00PM",
  venue: "IT-207",
  rules: [
    "Anyone can participate.",
    "Only individual participants are allowed.",
    "Reply to as many questions as possible.",
    "There is a time limit within which the question must be responded to. Otherwise, you're out.",
    "Your answer to the questions must be completely unrelated to the question. If it is relevant, you're out.",
  ],

  firstprize: 500,
  secondprize: 250,
  thirdprize: 0,
  contact: [
    {
      name: "Meganthan R",
      phoneNo: "7810093573",
    },
    {
      name: "Vishnu Prasanth B S",
      phoneNo: "9150953914",
    },
  ],
};

const MaathiYosi = () => {
  return <SingleEventPage eventDetails={maathiYosi} />;
};

export default MaathiYosi;
