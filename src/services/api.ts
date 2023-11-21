import axios from 'axios';

const YouTubeAPIKey = process.env.NEXT_PUBLIC_REACT_APP_YOUTUBE_API_KEY;
const TicketmasterAPIKey = process.env.NEXT_PUBLIC_REACT_APP_TICKETMASTER_API_KEY;

const api = {
  getYouTube: async (searchTerm: string) => {
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: YouTubeAPIKey,
          part: 'snippet',
          q: searchTerm,
          maxResults: 11,
        },
      });
      return response.data.items;
    } catch (error) {
      console.error('Ocorreu um erro ao buscar vídeos do YouTube:', error);
      return [];
    }
  },

  getTicketmaster: async (searchTerm: string) => {
    try {
        const response = await axios.get('https://app.ticketmaster.com/discovery/v2/attractions.json', {
        params: {
            apikey: TicketmasterAPIKey,
            keyword: searchTerm,
            size: 1,
        },
      });
      return response.data || [];
    } catch (error) {
      console.error('Ocorreu um erro ao buscar detalhes da banda:', error);
      return [];
    }
  },
};

export default api;