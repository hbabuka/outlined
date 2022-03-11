import clock from "./images/clock.svg";
import diaphragm from "./images/diaphragm.svg";
import money from "./images/money.svg";
import teamwork from "./images/teamwork.svg";
import { v4 as uuidv4 } from "uuid";

export const cardDetails = [
  {
    id: uuidv4(),
    icon: clock,
    title: "Efficient",
    description: "It is an imperative to us that we are efficient",
  },
  {
    id: uuidv4(),
    icon: diaphragm,
    title: "Diaphragm",
    description: "We breate photography and video",
  },
  {
    id: uuidv4(),
    icon: money,
    title: "Affordable",
    description: "You get the best value for the money though",
  },
  {
    id: uuidv4(),
    icon: teamwork,
    title: "Teamwork",
    description: "We are a great team that works together",
  },
];

export const questions = [
  {
    id: uuidv4(),
    question: "How Do I Start?",
    answers: [
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, illum!",
    ],
  },
  {
    id: uuidv4(),
    question: "Daily Schedule",
    answers: [
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, illum!",
    ],
  },
  {
    id: uuidv4(),
    question: "Different Payment Methods",
    answers: [
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, illum!",
    ],
  },
  {
    id: uuidv4(),
    question: "What Products Do You Offer?",
    answers: [
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, illum!",
    ],
  },
];
