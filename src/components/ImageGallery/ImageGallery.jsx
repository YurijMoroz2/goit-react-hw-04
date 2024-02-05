// export const ArticleList = ({ items }) => {
//   return (
//     <ul>
//       {items.map(({id, urls }) => (
//         console.log(id);
//         console.log(urls);
//         console.log(urls.regular);
//         // console.log();

import { ImageCard } from "./ImageCard/ImageCard";

//         <li key={id}>
//            <div>
//       {/* Використовуємо URL зображення в вашому коді JSX */}
//       <img src={urls.regular} alt="Unsplash image" />
//     </div>
          
//         </li>
//       ))}
//     </ul>
//   );
// };
export const ArticleList = ({ items }) => {
  return (
    <ul>
      {items.map(({id, slug,urls,likes,user}) => {
        // console.log(likes);
        // console.log(user.location, user.name, user.bio, user.updated_at);
        
        // console.log(urls.small);
        // console.log(urls.regular);
        return (
          <li key={id}>
            <ImageCard slug={slug} urls={urls} likes={likes} user={user}/>
          </li>
        )
      })}
    </ul>
  );
};
        // {/* <div>
        //   {/* Використовуємо URL зображення в вашому коді JSX */}
        //   <img src={urls.regular} alt={slug} width='250' height='250'/>
        // </div> */}