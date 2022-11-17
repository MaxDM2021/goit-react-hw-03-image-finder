// import ImageGalleryItem from '../ImageGalleryItem';
// import ImageGallery from 'components/ImageGallery';
import { ImSpinner } from 'react-icons/im';
// import pendingImage from './pending.jpg';
import "../Styles/styles.css"


// const styles = {
//   spinner: {
//     display: 'flex',
//     alignItems: 'center',
//     marginBottom: 10,
//     fontSize: 24,
//   },
// };



export default function Loader({ imageName }) {

  // const image = { webformatURL: pendingImage };
  // Нужно разобраться с пробрасыанием image  с сервера

  return (
    <div role="alert" className="icon-box">
      
      
      <ImSpinner size="32" className="icon-spin" />
      {/* <ImageGallery images={image}></ImageGallery> */}
    </div>
  );
}
