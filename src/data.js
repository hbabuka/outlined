import clock from "./images/clock.svg";
import diaphragm from "./images/diaphragm.svg";
import money from "./images/money.svg";
import teamwork from "./images/teamwork.svg";
import athleteSmall from "./images/athlete-small.png";
import theracerSmall from "./images/theracer-small.png";
import goodtimesSmall from "./images/goodtimes-small.png";
import athlete2 from "./images/athlete2.png";
import theracer2 from "./images/the-racer2.jpg";
import goodtimes2 from "./images/good-times2.jpg";
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

export const moviesData = [
  {
    id: uuidv4(),
    title: "The Athlete",
    thumbnail: athleteSmall,
    mainImg: athleteSmall,
    secondaryImg: athlete2,
    url: "/work/the-athlete",
    awards: [
      {
        title: "Truly A masterpiece",
        description:
          "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
      },
      {
        title: "Fresh look on a brutal sport.",
        description:
          "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
      },
      {
        title: "It’s okay lmao.",
        description:
          "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Good Times",
    thumbnail: goodtimesSmall,
    mainImg: goodtimesSmall,
    secondaryImg: goodtimes2,
    url: "/work/good-times",
    awards: [
      {
        title: "Truly A masterpiece",
        description:
          "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
      },
      {
        title: "Fresh look on a brutal sport.",
        description:
          "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
      },
      {
        title: "It’s okay lmao.",
        description:
          "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "The Racer",
    thumbnail: theracerSmall,
    mainImg: theracerSmall,
    secondaryImg: theracer2,
    url: "/work/the-racer",
    awards: [
      {
        title: "Truly A masterpiece",
        description:
          "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
      },
      {
        title: "Fresh look on a brutal sport.",
        description:
          "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
      },
      {
        title: "It’s okay lmao.",
        description:
          "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
      },
    ],
  },
];
