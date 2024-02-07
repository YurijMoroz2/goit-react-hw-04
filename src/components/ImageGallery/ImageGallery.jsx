import { ImageCard } from './ImageCard/ImageCard';
export const ImageGallery = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map(item => {
          return (
            <li key={item.id}>
              <ImageCard item={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
