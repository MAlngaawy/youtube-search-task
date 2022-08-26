import axios from "axios";
const key: string = "AIzaSyDQnoF5nJoaEtMoml73bemRCOsHQoeoC3A";

const request = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/search",
  params: {
    part: "snippet",
    maxResults: 25,
    key: key,
  },
});

export default request;
