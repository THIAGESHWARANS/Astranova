import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import BGMIImg from "../../assets/event-images/bgmi.jpeg";

const freeFire = {
  image: BGMIImg,
  description:
    "Welcome to the thrilling near-future realm of BGMI, where every moment pulses with heart-pounding action and strategic intensity! In this adrenaline-fueled tactical shooter, you and your team will embark on a journey like no other, navigating through dynamic landscapes and engaging in high-stakes battles.",
  type: "Elite Event",
  eventName: "BGMI",
  dateTime: "Mar 08 / 09, 6PM-9PM",
  venue: "Online",
  rules: [
    "A team must contain minimum of 4 members",
    "Based on number of teams BR Ranked match will be conducted and The winner of those two ranked matches have to play 1 vs 1 clash squad. Winner and Runner will be decided by the clash squad match.",
    "Treat others how you wish to be treated, so be kind and courteous. Respect everyone regardless of gender, ethics and age.",
    "No inappropriate usernames/nicknames.",
    "No team up. Using emotes in final clash squad match is not fair.",
    "verbal abuse in all chat will not be tolerated, proofs for it might get you banned from this tournament.",
    "It is forbidden to cheat, modify the game files, exploit bugs, and/or use any third-party application which would give an unfair advantage against other users.",
    "Cheating, including exploiting bugs and using hacks, will not be tolerated and will disqualify the entire team from the event.",
    "Team captains will be informed of any changes in match schedules.",
    "If any 1 of the teammate does have any of the rule being voilated then the entire team will be banned.",
  ],

  firstprize: 2000,
  secondprize: 1000,
  thirdprize: 0,
  contact: [
    {
      name: "Mithunraj P",
      phoneNo: "9092437619",
    },
    {
      name: "Kathiravan M",
      phoneNo: "6379162966",
    },
    {
      name: "Meganthan R",
      phoneNo: "7810093573",
    },
  ],
};

const FreeFire = () => {
  return (
    <SingleEventPage
      eventDetails={freeFire}
      formsLink={"https://forms.gle/7Bs27nB44HhnbqYDA"}
      noVenue={true}
    />
  );
};

export default FreeFire;
