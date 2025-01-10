import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import AnimeQuizImg from "../../assets/event-images/animequiz.jpg";

const animeQuiz = {
  image: AnimeQuizImg,
  description:
    "Welcome to the ultimate Anime Quiz Extravaganza, where your knowledge of anime will be put to the test! Get ready for an exhilarating journey through the world of anime as you compete in 3 rounds of intense quizzing on Kahoot. Whether you're a seasoned otaku or just starting your anime journey, this event promises fun, excitement, and the chance to win amazing prizes!",
  type: "Non Technical Event",
  eventName: "Anime Quiz",
  dateTime: "Mar 08, 10:30AM - 11:30AM",
  venue: "IT-444",
  rules: [
    "Teams can consist of either one or two members.",
    "Once the quiz has started, no additional team members will be allowed to join.",
    "The decision of the quiz master is final and cannot be challenged by any team.",
    "Participants are expected to maintain fair play and refrain from any form of cheating or misconduct.",
    "Any team found violating the rules may be disqualified from the quiz",
  ],

  firstprize: 800,
  secondprize: 400,
  thirdprize: 0,
  contact: [
    {
      name: "Harish R",
      phoneNo: "9345877121",
    },
    {
      name: "Darius Jonathan D",
      phoneNo: "6369272559",
    },
  ],
};

const AnimeQuiz = () => {
  return <SingleEventPage eventDetails={animeQuiz} />;
};

export default AnimeQuiz;
