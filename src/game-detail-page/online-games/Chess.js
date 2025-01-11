import React from "react";
import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import ChessImg from "../../assets/games-images/offline/chess.jpg";

const chess = {
  image: ChessImg,
  description:
    "Calling all masterminds and strategic thinkers! It's time to showcase your skills and dominate the chessboard in our epic Chess tournament. With each move, you'll be testing your opponent's wit and cunning while challenging your own.",
  type: "Online Games",
  eventName: "Chess",
  dateTime: "Mar 08 / 09, 6PM-9PM",
  venue: "Online",
  rules: [
    "Mode : Online",
    "Platform : lichess.org",
    "Timing for each match : 10 minutes + 3 sec",
    "Players should have proper internet connection during the match",
    "Please join 15 minutes before the match starts (Late entries are not allowed)",
    "Panel members decision will be final in case of any disputes.",
    "Cheating leads to immediate disqualification",
  ],

  firstprize: 500,
  secondprize: 300,
  thirdprize: 0,
  contact: [
    {
      name: "Rejith P",
      phoneNo: "8072525902",
    },
    {
      name: "Akshai Rishi S",
      phoneNo: "6382735308",
    },
  ],
};

const Chess = () => {
  return (
    <SingleEventPage
      eventDetails={chess}
      formsLink={"https://forms.gle/dgAcutQaXi99o4MN9"}
    />
  );
};

export default Chess;
