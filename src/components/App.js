import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { getImagesByQuery } from './Api/api';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    images: [],
    isLoading: false,
    error: null,
  };

  onChangeInput = ({ target }) => this.setState({ query: target.value });

  onSubmit = value => {
    if (value) this.setState({ query: value, page: 1, images: [] });
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

  render() {
    const { images, isLoading } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {images.length !== 0 && <ImageGallery images={images} />}
        {images.length !== 0 && !isLoading && (
          <Button onClickBtn={this.onClickBtn} />
        )}
      </>
    );
  }
}
