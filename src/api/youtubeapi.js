// src/api/youtubeApi.js

import axios from 'axios';

class YouTubeApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://www.googleapis.com/youtube/v3';
  }

  async getVideosByChannelId(channelId, maxResults = 10) {
    try {
      const response = await axios.get(`${this.baseUrl}/search`, {
        params: {
          key: this.apiKey,
          channelId: channelId,
          part: 'snippet,id',
          order: 'date',
          maxResults: maxResults,
        },
      });
      return response.data.items;
    } catch (error) {
      console.error('Error fetching videos:', error);
      return [];
    }
  }

  async getChannelDetails(channelId) {
    try {
      const response = await axios.get(`${this.baseUrl}/channels`, {
        params: {
          key: this.apiKey,
          id: channelId,
          part: 'snippet,statistics',
        },
      });
      return response.data.items[0];
    } catch (error) {
      console.error('Error fetching channel details:', error);
      return null;
    }
  }
}

export default YouTubeApi;