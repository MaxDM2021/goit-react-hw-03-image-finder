import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from 'components/Searchbar';
import ImageInfo from 'components/ImageInfo';

class App extends Component {
  state = {
    hitName: '',
    // visible: true,
  };

  handleFormSubmit = hitName => {

    this.setState({ hitName });
  };


  render() {
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <Searchbar qwe={this.handleFormSubmit} />
        <ImageInfo hitName={this.state.hitName} page={this.state.page}/>

        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
