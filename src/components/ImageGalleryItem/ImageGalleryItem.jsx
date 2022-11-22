import PropTypes from 'prop-types';
import 'components/Styles/styles.css';


const ImageGalleryItem = ({ image }) => {
    return (
        <li  className="ImageGalleryItem">
            <img
                src={image.webformatURL}
                alt={image.tags}
                data-src={image.largeImageURL}
                id={image.id}
                className="ImageGalleryItem-image"
                loading="lazy" 
            />
        </li>
    );
};





ImageGalleryItem.propTypes = {
    image: PropTypes.object,
};


export default ImageGalleryItem






// const ImageGalleryItem = ({ image }) => {
//     return (
//         <li className="ImageGalleryItem">
//            <a href={image.largeImageURL}>
//             <img
//                 src={image.webformatURL}
//                 alt={image.tags}
//                 data-src={image.largeImageURL}
//                 id={image.id}
//                 className="ImageGalleryItem-image"
//                 loading="lazy" 
//             />
//             </a>
//         </li>
//     );
// };

