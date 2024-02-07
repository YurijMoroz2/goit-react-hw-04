import axios from 'axios';
// import Data from './data.json'
const API_KEY = "G7TR0cdokKmG7P24Uh9n_1IrtA2VC1KEI1k-iHWGFzA";
// const API_KEYSECRET = "G89wOn6oXLPIPz0yTzWhFtG1NWG-twNcpr9A1FXy5Lg";
export const fetchFoto = async (query, page) => {
  
  const response = await axios.get(`https://api.unsplash.com/photos/?`, {
    params: { client_id:API_KEY ,query, page, per_page:5},
  });
  
  // ----------------------
  // const response = await  Data;
    // return response;

  return response.data;
};
 