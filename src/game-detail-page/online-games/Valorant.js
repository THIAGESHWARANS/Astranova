import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import ValorantImg from "../../assets/event-images/valorant2.jpg";

const valorant = {
  image: ValorantImg,
  description:
    "Prepare to immerse yourself in the heart-pounding action and strategic gameplay of Valorant, Riot Games' revolutionary tactical shooter. Set in a near-future Earth, Valorant combines precise gunplay, unique agent abilities, and strategic team dynamics to deliver an adrenaline-fueled gaming experience like no other.",
  type: "Elite Event",
  eventName: "Valorant",
  dateTime: "Mar 08 / 09, 6PM-9PM",
  venue: "Online",
  rules: [
    "Teams must consist of 5 players and 1 optional substitute.",
    "Substitutes can only be included at the start of a new match and the moderator must be informed.",
    "Players must be available in the lobby at least 15 minutes before the scheduled match time.",
    "All team members must have reliable communication, such as a Discord server.",
    "Failure of the entire team to show up on time will result in forfeiting the match.",
    "The team captain must add all members and the coordinator (details will be given) as friends with their RIOT IDs.",
    "Captains are responsible for adding their teammates to the game lobby well in advance of the match.",
    "Cheating, including exploiting bugs, will not be tolerated and will disqualify the entire team from the event.",
    "Team captains will be informed of any changes in match schedules.",
    "The organizer will communicate match fixtures, tournament schedules, and updates through the Discord group.",
    "If a team fails to show up, their opponents will receive a walkover.",
  ],
  firstprize: 2500,
  secondprize: 1500,
  thirdprize: 0,
  contact: [
    {
      name: "Irfaan Fareed A",
      phoneNo: "9786725825",
    },
    {
      name: "Ramanathan M",
      phoneNo: "9790514745",
    },
  ],
};

export const Valorant = (discordlink) => {
  return (
    <div>
      <SingleEventPage
        eventDetails={valorant}
        formsLink={"https://forms.gle/AzyXsfYZ5c4fELHn7"}
        noVenue={true}
        // discordlink={true}
      />
    </div>
  );
};

export default Valorant;
