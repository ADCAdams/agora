import { fetchTweets } from "./services/fetchTweets";

const USER_ID = "REPLACE_WITH_USER_ID"; // Replace with an actual user ID

(async () => {
  try {
    const tweets = await fetchTweets(USER_ID);
    console.log("Fetched Tweets:", tweets);
  } catch (error) {
    console.error("Failed to fetch tweets:", error);
  }
})();
