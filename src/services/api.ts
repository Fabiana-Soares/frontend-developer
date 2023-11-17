import axios from 'axios';

const YouTubeAPIKey = process.env.NEXT_PUBLIC_REACT_APP_YOUTUBE_API_KEY;
const TicketmasterAPIKey = process.env.NEXT_PUBLIC_REACT_APP_TICKETMASTER_API_KEY;

const api = {
  getYouTube: async (searchTerm: string) => {
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: YouTubeAPIKey,
          q: searchTerm,
          part: 'snippet',
          maxResults: 12,
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
            size: 10,
        },
      });
      return response.data || [];
    } catch (error) {
      console.error('Ocorreu um erro ao buscar:', error);
      return [];
    }
  },
};

export default api;



// import axios from 'axios';

// const KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

// const api = axios.create({
//     baseURL:'https://www.goolgeapis.com/youtube/v3/',
//     params: {
//         part: 'snippet',
//         maxResults: 10,
//         key: KEY
//     },
// });

// export default api;