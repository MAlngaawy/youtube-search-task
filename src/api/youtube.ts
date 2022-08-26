import axios from "axios";
const key: string = "AIzaSyDQnoF5nJoaEtMoml73bemRCOsHQoeoC3A";

const request = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/search",
  params: {
    part: "snippet",
    maxResult: 10,
    key: key,
  },
});

export default request;
