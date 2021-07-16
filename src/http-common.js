import axios from "axios";

export default axios.create({
  baseURL: "https://stormy-fjord-74565.herokuapp.com",
  headers: {
    "Content-type": "application/json"
  }
});
