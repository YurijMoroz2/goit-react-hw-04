import { ImageCard } from './ImageCard/ImageCard';
import css from './ImageGallery.module.css'
export const ImageGallery = ({ items }) => {
  return (
    <div>
      <ul className={css.container}>
        {items.map(item => {
          return (
            <li key={item.id} className={css.element}>
              <ImageCard item={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
