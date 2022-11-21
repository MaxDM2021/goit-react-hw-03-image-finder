import { Component } from 'react';
import ImageFallbackView from 'components/ImageFallbackView';
import ImageGallery from 'components/ImageGallery';
import Modal from 'components/Modal';
import Loader from 'components/Loader';
import ImageAPI from 'components/ImageApi';
import Button from 'components/Button';

class ImageInfo extends Component {
  state = {
    request: '',
    hits: [],
    error: null,
    status: 'idle',
    Load: false,
    page: 1,
    total: 1,
    alt: '',
    modal: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.hitName;
    const nextName = this.props.hitName;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

   

    if (prevName !== nextName ) {
      this.setState({status: 'pending', hits: [], page: 1  
    });
    

      ImageAPI.fetchImage(nextName)
        .then(response => {
          console.log(response);
          this.setState({
            hits: response?.hits,
            total: response?.totalHits,
            page: response?.page,
            status: 'resolved',
          });
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }

    if ( prevPage !== nextPage) {
    
      ImageAPI.fetchImage(nextName)
        .then(response => {
          console.log(response);
          this.setState({
            hits: response?.hits,
            total: response?.totalHits,
            page: response?.page,
            status: 'resolved',
          });
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }




}







  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  // };

  toggleModal = event => {
    if (event.target.nodeName !== 'IMG') {
      return;
    }
    this.setState({
      modal: event.target.dataset.src,
      alt: event.target.getAttribute('alt'),
    });
  };

  resetModal = () => {
    this.setState({
      modal: '',
      alt: '',
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    console.log(this.state.request);
  };

  // 'idle' - простой
  // 'pending' - ожидается
  // 'resolve' - выполнилось с результамом (хорошо)
  // 'resjected' - отклонено!

  render() {
    const { hits, error, status, modal, alt, total, Load, page } = this.state;
    const { hitName } = this.props;
    const totalCond = total > 0 && Math.ceil(total / 12) !== page && !Load;

    if (status === 'idle') {
      return <div>Введите название картинки!</div>;
    }

    if (status === 'pending') {
      return <Loader hitName={hitName} />;
    }

    if (status === 'rejected') {
      return <ImageFallbackView message={error.message} />;
    }

    if (status === 'resolved' && hits.length > 0) {
      return (
        <>
          <ImageGallery images={hits} showModal={this.toggleModal} />
          {modal !== '' && (
            <Modal src={modal} alt={alt} onClose={this.resetModal} />
          )}
          {totalCond > 0 && <Button loadMore={this.loadMore} />}
        </>
      );
    }
  }
}

export default ImageInfo;
