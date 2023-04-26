import React, { Component } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { getImagesByQuery } from './Api/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    images: [],
    isLoading: false,
    error: null,
    imageURL: '',
  };

  onChangeInput = ({ target }) => this.setState({ query: target.value });

  onSubmit = value => {
    if (value) {
      this.setState({ query: value, page: 1, images: [] });
    } else {
      this.setState({ images: [] });
    }
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.getImages(query, page);
    }
  }

  getImages = async (query, page) => {
    const { images } = this.state;
    this.setState({ isLoading: true });
    try {
      const response = await getImagesByQuery(query, page);
      this.setState({ images: [...images, ...response], isVisibleBtn: true });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onClickBtn = () => {
    this.setState(prevState => this.setState({ page: prevState.page + 1 }));
  };

  onClickImg = imgURL => {
    this.setState({ imageURL: imgURL });
  };

  onModalClick = event => {
    this.setState({ imageURL: '' });
  };

  escFunction = ({ key }) => {
    if (key === 'Escape') {
      this.setState({ imageURL: '' });
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.escFunction);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction);
  }

  render() {
    const { images, isLoading, imageURL } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {images.length !== 0 && (
          <ImageGallery images={images} onClickImg={this.onClickImg} />
        )}
        {imageURL && <Modal imageURL={imageURL} onClick={this.onModalClick} />}
        {isLoading && <Loader />}
        {images.length !== 0 && !isLoading && (
          <Button onClickBtn={this.onClickBtn} />
        )}
      </>
    );
  }
}
