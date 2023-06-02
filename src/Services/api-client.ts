import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e4087534d8cb45039a86ea48e5554b69",
  },
});
