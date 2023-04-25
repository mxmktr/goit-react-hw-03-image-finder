import css from './ImageGallery.module.css';

export function ImageGalleryItem({ webformatURL, largeImageURL }) {
  return (
    <li className={css.gallery__item}>
      <img src={webformatURL} alt={largeImageURL} onClick={onClick} />
    </li>
  );
}

function onClick() {
  console.log('You click on the picture!');
}
