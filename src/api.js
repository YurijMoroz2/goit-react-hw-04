import axios from 'axios';

const API_KEY = 'G7TR0cdokKmG7P24Uh9n_1IrtA2VC1KEI1k-iHWGFzA';

export const fetchFoto = async (query, page) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos/?`, {
    params: { client_id: API_KEY, query, page, per_page: 12 },
  });

  return response.data;
};
