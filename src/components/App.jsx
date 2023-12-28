import Searchbar from './Searchbar/Searchbar';
import { getAllImages } from 'api/images';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { useCallback, useEffect, useState } from 'react';

const App = () => {
  const [images, setImages] = useState(null);
  const [q, setQ] = useState('');
  const [page, setPage] = useState(1);
  // const [perPage, setPerPage] = useState(12);
  const [loadMore, setLoadMore] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [largeImgUrl, setLargeImgUrl] = useState(null);
  const [tag, setTag] = useState(null);
  const [loader, setLoader] = useState(false);

  const getImages = useCallback(async () => {
    try {
      setLoader(true);
      const response = await getAllImages(q, page);
      const { totalHits, hits } = response;
      if (totalHits === 0) {
        setLoadMore(false);
        Notify.info(`There is no such images like ${q}`);
        return;
      } else if (hits.length === 0) {
        setLoadMore(false);
        Notify.info(`There is no more images`);
        return;
      } else if (response) {
        Notify.success(`Yey, we found ${hits.length} images`);
      }

      const newImages = hits.map(
        ({ id, webformatURL, largeImageURL, tags }) => ({
          id,
          webformatURL,
          largeImageURL,
          tags,
        })
      );

      setImages(prevImgs =>
        prevImgs ? [...prevImgs, ...newImages] : newImages
      );

      setLoadMore(true);
    } catch {
      Notify.failure(`Oops, something went wrong`);
    } finally {
      setLoader(false);
    }
  }, [q, page]);

  useEffect(() => {
    if (!q) return;
    getImages();
  }, [page, q, getImages]);

  const onSubmit = e => {
    e.preventDefault();
    const q = e.target.search.value;
    if (q === '') {
      Notify.warning('Please enter your request');
      return;
    }
    setQ(q);
    setPage(1);
    setImages(null);
  };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
    setLoader(true);
  };

  const hideModal = () => {
    setIsShowModal(false);
  };

  const openModal = (largeImgUrl, tag) => {
    setIsShowModal(true);
    setLargeImgUrl(largeImgUrl);
    setTag(tag);
  };
  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      {images && <ImageGallery images={images} openModal={openModal} />}
      {loader && <Loader />}
      {loadMore && <Button onLoadMore={onLoadMore} />}
      {isShowModal && (
        <Modal hideModal={hideModal} largeImgUrl={largeImgUrl} tag={tag} />
      )}
    </>
  );
};
export default App;
