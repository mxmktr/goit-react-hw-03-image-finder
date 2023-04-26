import PropTypes from 'prop-types';
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

ImageGallery.propTypes = {
  onClickImg: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};
