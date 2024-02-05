import axios from 'axios';
import Data from './data.json'
const API_KEY = "G7TR0cdokKmG7P24Uh9n_1IrtA2VC1KEI1k-iHWGFzA";
// const API_KEYSECRET = "G89wOn6oXLPIPz0yTzWhFtG1NWG-twNcpr9A1FXy5Lg";
export const fetchArticlesWithTopic = async (query, page) => {
  // const response = await axios.get(`http://hn.algolia.com/api/v1/search?`, {
  //   params: { query, page, hitsPerPage: 1 },
  // });
  // const response = await axios.get(`https://api.unsplash.com/photos/?`, {
  //   params: { client_id:API_KEY ,query,page,per_page:10},
  // });
  //  const imageUrl = data.urls.regular;
  const response = await  Data;
  // {
  //   params: { client_id:A,query,page,per_page:10},
  // })
  // console.log(response);
  // console.log(query);

  return response;

  // return response.data;
};
 // Отримуємо URL зображення з отриманих даних
//  const imageUrl = data.urls.regular;
    
 // Використовуємо URL зображення в вашому коді HTML, наприклад:
//  const imgElement = document.createElement('img');
//  imgElement.src = imageUrl;
//  document.body.appendChild(imgElement);