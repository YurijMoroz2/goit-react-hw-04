import { ImageModal } from '../../ImageModal/ImageModal';


export const ImageCard = ({ item }) => {
  return (
    <div>
      <ImageModal user={item} />
    </div>
  );
};
