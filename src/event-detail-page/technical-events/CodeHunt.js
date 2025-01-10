import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import CodeHuntImg from "../../assets/event-images/code-hunt.png";

const codeHunt = {
  image: CodeHuntImg,
  description:
    "A fun game of technical treasure hunt where the players have to solve each level to reach the treasure. The game contains 3 major levels.",
  type: "Technical Event",
  eventName: "Code Hunt",
  dateTime: "Mar 08, 03:00PM - 4:30PM",
  venue: "IT-207",
  rules: [
    "Level 1 (Quiz): The players are required to solve the questions as fast as they can and move on to the next level.",
    "Level 2 (Guess the Output): The players are required to find the output of the given programs (these outputs are clues that can be used in the final level)",
    "Level 3 (Coding): The players are given a program and using the modules or result from the previous levels, they can finish the program.",
    "There's no time limit, whoever finishes first are the winner.",
  ],

  firstprize: 1000,
  secondprize: 500,
  thirdprize: 0,
  contact: [
    {
      name: "Janani K",
      phoneNo: "7845833436",
    },
    {
      name: "Sowmithra R",
      phoneNo: "7904918320",
    },
  ],
};

const CodeHunt = () => {
  return <SingleEventPage eventDetails={codeHunt} />;
};

export default CodeHunt;
