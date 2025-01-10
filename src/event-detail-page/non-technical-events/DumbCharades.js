import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import DumbCharadesImg from "../../assets/event-images/dumb-charades.jpg";

const dumbCharades = {
  image: DumbCharadesImg,
  description:
    "Dumb charades is a thrilling and hilarious twist on the classic charades game, where participants convey words or phrases without speaking, relying solely on gestures and expressions. It combines wit, creativity, and laughter, making it a perfect entertainment choice for a lively gathering.",
  type: "Non Technical Event",
  eventName: "Dumb Charades",
  dateTime: "Mar 09, 12:00PM - 01:00PM",
  venue: "IT-207",
  rules: [
    "Participants must act out words or phrases silently, without uttering any sounds.",
    "Each round has a specific time limit for guessing, adding an element of urgency and excitement.",
    "Strictly no verbal communication allowed.",
    "Participants can only use body language and facial expressions.",
    "Participants are encouraged to maintain a fun and respectful environment, ensuring everyone has a chance to enjoy the game.",
  ],

  firstprize: 500,
  secondprize: 200,
  thirdprize: 0,
  contact: [
    {
      name: "Suganth S",
      phoneNo: "6369633556",
    },
    {
      name: "Nithis Arun T",
      phoneNo: "8124199898",
    },
  ],
};

const DumbCharades = () => {
  return <SingleEventPage eventDetails={dumbCharades} />;
};

export default DumbCharades;
