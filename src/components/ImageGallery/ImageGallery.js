import { ImageGalleryItem } from './ImageGalleryItem';
import css from './ImageGallery.module.css';

export function ImageGallery({ images, onClickImg }) {
  return (
    <ul className={css.gallery}>
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          onClickImg={onClickImg}
        />
      ))}
    </ul>
  );
}
