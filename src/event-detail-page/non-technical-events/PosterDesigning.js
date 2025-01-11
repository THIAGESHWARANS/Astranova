import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import PosterDesigningImg from "../../assets/event-images/poster-designing.jpg";

const posterDesigning = {
  image: PosterDesigningImg,
  description:
    "Get ready to ignite your imagination and unleash your creativity in our poster designing competition! Show off your artistic flair and design the poster of tomorrow that will leave everyone in awe. Don't miss this chance to make your mark and shine bright!",
  type: "Non-Technical Event",
  eventName: "Poster Designing",
  dateTime: "Mar 08",
  venue: "Online",
  rules: [
    "Participants will be given a theme ahead of time.",
    "The poster must align with the theme.",
    "Submissions must be done by the deadline. Late submissions will not be accepted.",
    "The submissions must be done to the given link only.",
    "Posters must be submitted as a .pdf/.jpeg/.jpg/.png only",
    "Posters must not be from a previous event or competition",
    "Include your name and contact details within the image or in an additional page if possible for easier communication",
    "The best poster will be chosen based on creativity and alignment with the theme",
  ],
  firstprize: 500,
  secondprize: 300,
  thirdprize: 0,
  contact: [
    {
      name: "Saifulla R",
      phoneNo: "9566758911",
    },
    {
      name: "Devadharani",
      phoneNo: "9363087474",
    },
  ],
};

const PosterDesigning = () => {
  return <SingleEventPage eventDetails={posterDesigning} />;
};

export default PosterDesigning;
