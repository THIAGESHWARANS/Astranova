import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import TreasureHuntImg from "../../assets/event-images/treasure-hunt.jpg";

const treasureHunt = {
  image: TreasureHuntImg,
  description:
    "Embark on an exhilarating treasure hunt, solving cryptic clues and navigating through hidden challenges to unveil the ultimate prize in this thrilling and immersive adventure game. Uncover secrets, test your wits, and race against time to claim the coveted treasure!",
  type: "Non-Technical Event",
  eventName: "Treasure Hunt",
  dateTime: "Mar 08, 03:00PM - 04:30PM",
  venue: "IT-206",
  rules: [
    "Each team must consist of 2 or 3 members.",
    "Each team kicks off with a distinctive clue, but they're all headed to the same spot.",
    "The first two teams to crack the codes and reach the endpoint will claim victory and bragging rights",
    "Feel free to use your smartphones during the event.",
  ],

  firstprize: 2000,
  secondprize: 0,
  thirdprize: 0,
  contact: [
    {
      name: "Gobiharan J",
      phoneNo: "6382955274",
    },
    {
      name: "Meganthan R",
      phoneNo: "7810093573",
    },
  ],
};

const TreasureHunt = () => {
  return <SingleEventPage eventDetails={treasureHunt} />;
};

export default TreasureHunt;
