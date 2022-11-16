import { Component } from 'react';
import ImageFallbackView from 'components/ImageFallbackView';
import ImageGallery from 'components/ImageGallery'; 
import Loader from 'components/Loader';
import ImageAPI from 'components/ImageApi';


class ImageInfo extends Component {
  state = {
    hits: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.hitName;
    const nextName = this.props.hitName;

    if (prevName !== nextName) {
      this.setState({ status: 'pending' });

      setTimeout(() => {
        ImageAPI.fetchImage(nextName)
          .then(hit => this.setState({ hit, status: 'resolved' }))
          .catch(error => this.setState({ error, status: 'rejected' }));
      }, 3000);
    }
  }

  // 'idle' - простой
  // 'pending' - ожидается
  // 'resolve' - выполнилось с результамом (хорошо)
  // 'resjected' - отклонено!

  render() {
    const { hits, error, status } = this.state;
    const { hitName } = this.props;

    if (status === 'idle') {
      return <div>Введите название картинки!</div>;
    }

    if (status === 'pending') {
      return <Loader hitName={hitName} />;
    }

    if (status === 'rejected') {
      return <ImageFallbackView message={error.message} />;
    }

    if (status === 'resolved') {
      return <ImageGallery images={hits} />;
    }
  }
}

export default ImageInfo;
