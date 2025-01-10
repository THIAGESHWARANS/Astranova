// technical
import AstranovaCoding from "../assets/event-images/celestra-coding.jpg";
import BugBusters from "../assets/event-images/bug-busters.jpg";
// import WebMasters from "../assets/event-images/web-masters.jpg";
import Technicalquiz from "../assets/event-images/technical-quiz.jpg";
import Ideathon from "../assets/event-images/ideathon.jpg";
import Seminar from "../assets/event-images/seminar.jpg";
import Workshop from "../assets/event-images/workshop.jpg";
import Reversecoding from "../assets/event-images/reversecoding.jpg";
import RelayCoding from "../assets/event-images/relay-coding.jpg";
import CodeHunt from "../assets/event-images/code-hunt.png";
import PromptEngineering from "../assets/event-images/prompt-engineering.jpg";
import RapidCoding from "../assets/event-images/rapid-coding.jpg";

// non-technical
import TreasureHunt from "../assets/event-images/treasure-hunt.jpg";
import AnimeQuiz from "../assets/event-images/animequiz.jpg";
import Connexion from "../assets/event-images/connexion.jpg";
import KollywoodQuiz from "../assets/event-images/moviequiz.jpg";
import PosterDesiging from "../assets/event-images/poster-designing.jpg";
import DumbCharades from "../assets/event-images/dumb-charades.jpg";
import MaathiYosi from "../assets/event-images/maathi-yosi.jpg";

// Elite
import PaperPresentation from "../assets/event-images/paperpresentation.jpg";
// import Valorant from "../assets/event-images/valorant.jpg";
// import FreeFire from "../assets/event-images/freefire.jpg";

// technical
export const technicalEvents = [
  {
    id: 1,
    title: "Reverse Coding",
    href: "/events/reverse-coding",
    description:
      "Are you a passionate coder looking for an opportunity to showcase your skills? If yes, then join us for our upcoming Competitive Coding Challenge!",
    imageUrl: Reversecoding,
    date: 8,
  },
  {
    id: 2,
    title: "Technical Quiz",
    href: "/events/technical-quiz",
    description:
      "Get ready to test your knowledge and sharpen your skills in the ultimate battle of the brains! It's a high-octane, adrenaline-fueled showdown that will put your expertise to the test.",
    imageUrl: Technicalquiz,
    date: 8,
  },
  {
    id: 3,
    title: "Code Hunt",
    href: "/events/code-hunt",
    description:
      "A fun game of technical treasure hunt where the players have to solve each level to reach the treasure. The game contains 3 major levels.",
    imageUrl: CodeHunt,
    date: 8,
  },
  {
    id: 4,
    title: "Bug Busters",
    href: "/events/bug-busters",
    description:
      "Get ready for the ultimate Bug Bash! Form a team of three and put your collective debugging skills to the test in this exciting competition.Hunt down and fix the trickiest bugs to emerge as the top bug busters!",
    imageUrl: BugBusters,
    date: 9,
  },
  {
    id: 5,
    title: "Ideathon",
    href: "/events/ideathon",
    description:
      "IDEATHON is not just an event; it's a spirited competition challenging innovation and creativity. Dynamic teams and individuals, present your most innovative ideas to our esteemed panel for a chance to shine! 🌟 Are you ready to revolutionize the world? Join IDEATHON now!",
    imageUrl: Ideathon,
    date: 9,
  },
  {
    id: 6,
    title: "Relay Coding",
    href: "/events/relay-coding",
    description:
      "Welcome to the ultimate coding showdown! Build your dream team of three to test your teamwork and programming skills! Be prepared for a test of the wits, nerves and trust.",
    imageUrl: RelayCoding,
    date: 9,
  },
  {
    id: 7,
    title: "Prompt Engineering",
    href: "/events/prompt-engineering",
    description:
      "Can you replicate this image pixel-perfect? Test your precision and creativity in our prompt engineering challenge and showcase your AI prowess!",
    imageUrl: PromptEngineering,
    date: 9,
  },
  {
    id: 8,
    title: "Paper Presentation",
    href: "/events/paper-presentation",
    description:
      "Action is the foundational key to success--Pablo Picasso. Elevate your ideas and let you ideas fly high along with your presentation.",
    imageUrl: PaperPresentation,
    date: 8,
  },
  {
    id: 9,
    title: "Seminar",
    href: "/events/seminar",
    description:
      "With today's cars being more connected than ever, thanks to features like Wi-Fi, Bluetooth, and GPS, they're also more vulnerable to cyber attacks. But fear not! Cybersecurity in connected cars involves deploying cutting-edge defenses.",
    imageUrl: Seminar,
    date: 8,
    // comingSoon: true,
  },
  {
    id: 10,
    title: "Workshop",
    href: "/events/workshop",
    description:
      "Orange is an open-source data visualization, machine learning, and data mining toolkit. It offers a visual programming interface for data analysis, allowing users to interactively explore and analyze datasets without needing to write code.",
    imageUrl: Workshop,
    date: 9,
    // comingSoon: true,
  },
];

// non-technical
export const nonTechnicalEvents = [
  {
    id: 1,
    title: "Treasure Hunt",
    href: "/events/treasure-hunt",
    description:
      "Embark on an exhilarating treasure hunt, solving cryptic clues and navigating through hidden challenges to unveil the ultimate prize in this thrilling and immersive adventure game. Uncover secrets, test your wits, and race against time to claim the coveted treasure!",
    imageUrl: TreasureHunt,
    date: 8,
  },
  {
    id: 2,
    title: "Anime Quiz",
    href: "/events/anime-quiz",
    description:
      "Gear up for an unforgettable anime quiz experience and showcase your anime knowledge like never before! Are you ready to rise to the challenge and claim your spot as the ultimate anime aficionado? Join us and let the quizzing begin!",
    imageUrl: AnimeQuiz,
    date: 8,
  },
  {
    id: 3,
    title: "Connexion",
    href: "/events/connexion",
    description:
      "Connexion is a captivating picture-based guessing game where players decipher the correct answer by connecting images with the aid of provided clues.",
    imageUrl: Connexion,
    date: 8,
  },
  {
    id: 4,
    title: "Kollywood Quiz",
    href: "/events/kollywood-quiz",
    description:
      "Dive into the enchanting realm of South Indian cinema with the 'Kollywood Quiz'! From timeless classics to contemporary blockbusters, test your Tamil cinema expertise in a friendly and entertaining competition. We celebrate the magic of Kollywood together. Don't miss this chance to showcase your love for Tamil cinema!",
    imageUrl: KollywoodQuiz,
    date: 9,
  },
  {
    id: 5,
    title: "Poster Designing",
    href: "/events/poster-designing",
    description:
      "Get ready to ignite your imagination and unleash your creativity in our poster designing competition! Show off your artistic flair and design the poster of tomorrow that will leave everyone in awe. Don't miss this chance to make your mark and shine bright!",
    imageUrl: PosterDesiging,
    date: 8,
  },
  {
    id: 6,
    title: "Maathi Yosi",
    href: "/events/maathi-yosi",
    description:
      "Try your best to not answer the question! Reply to as many questions as you can without giving a logical answer to any of them. If your answer is even slightly related to the question, you're out!",
    imageUrl: MaathiYosi, // Yet to change
    date: 9,
  },
  {
    id: 7,
    title: "Dumb Charades",
    href: "/events/dumb-charades",
    description:
      "Dumb charades is a thrilling and hilarious twist on the classic charades game, where participants convey words or phrases without speaking, relying solely on gestures and expressions. It combines wit, creativity, and laughter, making it a perfect entertainment choice for a lively gathering.",
    imageUrl: DumbCharades, // Yet to change
    date: 9,
  },
];

// Elite Events
export const eliteEvents = [
  {
    id: 1,
    title: "Astranova Coding",
    href: "/events/astranova-coding",
    description:
      "Are you a passionate coder looking for an opportunity to showcase your skills? If yes, then join us for our upcoming Competitive Coding Challenge!",
    imageUrl: AstranovaCoding,
    date: 8,
  },
  {
    id: 2,
    title: "Rapid Coding",
    href: "/events/rapid-coding",
    description:
      "Dive into the thrill of rapid coding at our symposium! Solve standard coding questions within tight timeframes, showcasing your coding prowess under pressure. Earn points for each problem cracked accurately, and compete against the clock to claim the top spot!",
    imageUrl: RapidCoding,
    date: 9,
  },
];
