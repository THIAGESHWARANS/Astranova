import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import ConnexionImg from "../../assets/event-images/connexion.jpg";

const connexion = {
  image: ConnexionImg,
  description:
    "Connexion is a picture-based guessing game where players decipher the correct answer by connecting images with the aid of provided clues.",
  type: "Non Technical Event",
  eventName: "Connexion",
  dateTime: "Mar 08, 02:00PM - 03:15PM",
  venue: "IT-207",
  rules: [
    "Individuals or team of 2.",
    // "Three rounds. Each participant have 5 questions in each round.",
    "If one doesn't answered then the question will be passed to another and to another based on sequence.",
    "Participant with higher points will move to next round.",
    "30 seconds to answer a question.",
  ],

  firstprize: 1000,
  secondprize: 500,
  thirdprize: 0,
  contact: [
    {
      name: "Prithiviraj S",
      phoneNo: "9042186011",
    },
    {
      name: "Prem Kumar D",
      phoneNo: "6383412638",
    },
  ],
};

const Connexion = () => {
  return <SingleEventPage eventDetails={connexion} />;
};

export default Connexion;
