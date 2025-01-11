import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import PaperPresentationImg from "../../assets/event-images/paperpresentation.jpg";

const paperPresentation = {
  image: PaperPresentationImg,
  description:
    "Action is the foundational key to success--Pablo Picasso. Elevate your ideas and let you ideas fly high along with your presentation.",
  type: "Elite Event",
  eventName: "Paper presentation",
  dateTime: "Mar 08, 10:00AM",
  venue: "IT-206",
  rules: [
    "Participants can be an individual or as a team of maximum 4.",
    "Paper abstract should not exceed 250 words.",
    "Avoid using animations and videos in the ppt. Your paper should be original.",
    "You are free to choose your paper topic, but we recommend focusing on technical areas.",
    "Each team will have a 10-minute presentation slot, followed by a Q&A session.",
    "Teams can be composed of individuals from different institutions.",
    "Participants can participate in two different teams, but they must register separately.",
    "Participants may present multiple topics, but they must register each one separately.",
    "Submit the document as .ppt/.pptx",
  ],

  firstprize: 1500,
  secondprize: 1000,
  thirdprize: 0,
  contact: [
    {
      name: "Sudharsan S",
      phoneNo: "9363350970",
    },
    {
      name: "Rejith P",
      phoneNo: "8072525902",
    },
  ],
};

const PaperPresentation = () => {
  return (
    <SingleEventPage
      eventDetails={paperPresentation}
      formsLink={"https://forms.gle/P4ugfRfhwH7ai4W58"}
    />
  );
};

export default PaperPresentation;
