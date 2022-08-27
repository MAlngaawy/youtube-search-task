import axios from "axios";
const key: string = "AIzaSyA_RiR7vR4f2WoSEVgIfWje8WNdqpF4mXs";

const request = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/search",
  params: {
    part: "snippet",
    maxResults: 25,
    key: key,
  },
});

export default request;
