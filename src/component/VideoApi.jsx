import axios from "axios";

const VideoApi = async () => {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/videos",
      {
        params: {
          part: "snippet",
          chart: "mostPopular",
          maxResults: 25,
          regionCode: "kr",
          key: import.meta.env.VITE_YOUTUBE_API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error axios data", error);
    throw error;
  }
};
export default VideoApi;
