import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

const X_API_URL = "https://api.twitter.com/2/tweets";
const BEARER_TOKEN = process.env.X_API_KEY;

export const fetchTweets = async (userId: string) => {
  const url = `${X_API_URL}/?ids=${userId}`;
  const headers = { Authorization: `Bearer ${BEARER_TOKEN}` };

  try {
    const response = await axios.get(url, { headers });
    console.log("Tweets fetched:", response.data);
    return response.data;
  } catch (error) {
    // Narrow down the error type to an AxiosError if applicable
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error; // Re-throw after handling
  }
};
