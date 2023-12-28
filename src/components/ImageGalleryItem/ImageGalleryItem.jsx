import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, openModal }) => {
  const { tags, webformatURL, largeImageURL } = image;

  const handleClick = () => {
    openModal(largeImageURL, tags);
  };

  return (
    <li onClick={handleClick} className={css.item}>
      <img src={webformatURL} alt="tags" loading="lazy" className={css.img} />
    </li>
  );
};

export default ImageGalleryItem;
