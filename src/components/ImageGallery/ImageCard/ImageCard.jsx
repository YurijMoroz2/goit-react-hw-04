export const ImageCard =({id,slug,urls,likes,user})=>{
//     console.log(likes);
//         console.log(user.location, user.name, user.bio, user.updated_at);
        
//         // console.log(urls.small);
//         // console.log(urls.regular);
//     return(
// <div>
//               {/* Використовуємо URL зображення в вашому коді JSX */}
//               <img src={urls.regular} alt={slug} width='250' height='250'/>
//             </div>
//     )
// }
// ----------------------------
// export const ImageCard =({arrow:{slug,urls,likes,user}})=>{
    // console.log(arrow);
    // console.log(likes);
        // console.log(user.location, user.name, user.bio, user.updated_at);
        
        // console.log(urls.small);
        // console.log(urls.regular);
    return(
<div>
              {/* Використовуємо URL зображення в вашому коді JSX */}
          <img src={urls.regular} alt={slug} width='250' height='250'/>

              {/* <img src='regular' alt='slug' width='250' height='250'/> */}
            </div>
    )
}