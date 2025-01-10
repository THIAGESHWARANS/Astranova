import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import MoviequizImg from "../../assets/event-images/moviequiz.jpg";

const movieQuiz = {
  image: MoviequizImg,
  description:
    "Dive into the enchanting realm of South Indian cinema with the 'Kollywood Quiz'! From timeless classics to contemporary blockbusters, test your Tamil cinema expertise in a friendly and entertaining competition. We celebrate the magic of Kollywood together. Don't miss this chance to showcase your love for Tamil cinema!",
  type: "Non Technical Event",
  eventName: "Kollywood Quiz",
  dateTime: "Mar 09, 02:00PM - 03:00PM",
  venue: "IT-444",
  rules: [
    "Each team will consist of at most three members.",
    // "You will toss a coin to determine whether you will use connecting images or based on the clues.",
    "The team will have to find out the name of the movie based on the given clues.",
    "The winners will be determined by the team that correctly guesses the highest number of movies.",
  ],

  firstprize: 800,
  secondprize: 400,
  thirdprize: 0,
  contact: [
    {
      name: "Gobiharan J",
      phoneNo: "6382955274",
    },
    {
      name: "Suganth S",
      phoneNo: "6369633556",
    },
  ],
};

const MovieQuiz = () => {
  return <SingleEventPage eventDetails={movieQuiz} />;
};

export default MovieQuiz;
