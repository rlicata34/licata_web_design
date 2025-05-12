import purevibesMain from "../assets/purevibes.png";
import purevibesomeSearch from "../assets/home-searchresults.png";
import purevibesProfile from "../assets/purevibes-profile.png";
import wtwrMain from "../assets/wtwr.png";
import wtwrLogin from "../assets/wtwr-login.png";
import wtwrSignup from "../assets/wtwr-signup.png";
import wtwrProfile from "../assets/wtwr-profile.png";
import aroundtheusMain from "../assets/around-the-us.png";
import aroundtheusEdit from "../assets/aroundus-editprofile.png";
import aroundtheusNew from "../assets/aroundus-newplace.png";
import aroundtheusPreview from "../assets/aroundus-preview.png";

const projects = [
  {
    title: "PureVibes",
    description: "Event finding app utilizing the ticketmaster API.",
    imageUrls: [purevibesMain, purevibesProfile, purevibesomeSearch],
    liveUrl: "",
    tags: [],
  },
  {
    title: "What To Wear App",
    description:
      "Outfit configuration app based on the current weather of the user's location.",
    imageUrls: [wtwrMain, wtwrLogin, wtwrProfile, wtwrSignup],
    liveUrl: "",
    tags: [],
  },
  {
    title: "Around The US",
    description: "Blog app for travel documentation.",
    imageUrls: [
      aroundtheusMain,
      aroundtheusEdit,
      aroundtheusNew,
      aroundtheusPreview,
    ],
    liveUrls: "",
    tags: [],
  },
];

export default projects;
