import css from './ImageGallery.module.css';

export function ImageGalleryItem({ webformatURL, largeImageURL, onClickImg }) {
  return (
    <li className={css.gallery__item}>
      <img
        src={webformatURL}
        alt="Nice web pictures"
        onClick={() => onClickImg(largeImageURL)}
      />
    </li>
  );
}
