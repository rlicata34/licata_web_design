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
    type: "Full-stack event discovery app",
    description:
      "A responsive event discovery experience built around search, saved profiles, and Ticketmaster API data.",
    imageUrls: [purevibesMain, purevibesProfile, purevibesomeSearch],
    liveUrl: "",
    tags: ["React", "API Integration", "Responsive UI"],
  },
  {
    title: "What To Wear App",
    type: "Weather-based wardrobe app",
    description:
      "A weather-aware wardrobe tool that helps users choose and manage clothing based on local conditions.",
    imageUrls: [wtwrMain, wtwrLogin, wtwrProfile, wtwrSignup],
    liveUrl: "",
    tags: ["React", "Express", "Weather API"],
  },
  {
    title: "Around The US",
    type: "Interactive travel gallery",
    description:
      "A clean photo-sharing interface with editable profiles, post creation, preview states, and responsive layouts.",
    imageUrls: [
      aroundtheusMain,
      aroundtheusEdit,
      aroundtheusNew,
      aroundtheusPreview,
    ],
    liveUrl: "",
    tags: ["JavaScript", "Responsive Design", "UI Components"],
  },
];

export default projects;
