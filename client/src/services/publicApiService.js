import axios from "axios";

export const get = async (url) => {
  try {
    const res = await axios.get(url);
    return res;
  } catch (e) {
    return Promise.reject(e)
  }
};

export const post = async (route, body) => {
  try {
    const res = await axios.post(route, {
      body: body,
    });
    return res;
  } catch (e) {
      return Promise.reject(e)
  }
};