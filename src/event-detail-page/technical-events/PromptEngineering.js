import React from "react";
import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import PromptEngineeringImg from "../../assets/event-images/prompt-engineering.jpg";

const promptEngineering = {
  image: PromptEngineeringImg,
  description:
    "Can you replicate this image pixel-perfect? Test your precision and creativity in our prompt engineering challenge and showcase your AI prowess!",
  type: "Technical Event",
  eventName: "Prompt Engineering",
  dateTime: "March 09, 03:00PM - 04:00PM",
  venue: "IT-443",
  rules: [
    "All participants must use playground.ai as the image generation platform.",
    "Bring your own laptops if possible.",
    "Participants are given a target image at the beginning. They must generate an image as close as possible to the original image.",
    "All submissions must be done within the deadline. Late submissions are not accepted.",
    "Submissions must include the generated image, the prompt used to generate it and the contact details of the participants.",
    "The winning submission is the image that matches the target image the closest",
    "Images must be in .jpeg/.jpg/.pdf/.png format",
  ],

  firstprize: 500,
  secondprize: 300,
  thirdprize: 0,
  contact: [
    {
      name: "Aruneshwar T K",
      phoneNo: "7200986816",
    },
    {
      name: "Saifulla R",
      phoneNo: "9566758911",
    },
  ],
};

const PromptEngineering = () => {
  return <SingleEventPage eventDetails={promptEngineering} />;
};

export default PromptEngineering;
