// import ImageGalleryItem from "components/ImageGalleryItem";
import 'components/Styles/styles.css';
import ImageGalleryItem from 'components/ImageGalleryItem';


const ImageGallery = ({ images = [], showModal }) => (
  <div>
    <ul className="ImageGallery" onClick={showModal} >
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} ></ImageGalleryItem>
      ))}
    </ul>
  </div>
);


export default ImageGallery;
