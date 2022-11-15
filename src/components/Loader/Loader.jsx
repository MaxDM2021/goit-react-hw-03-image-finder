import { ImSpinner } from 'react-icons/im';
import ImageGallery from '../ImageGallery';
import pendingImage from './pending.jpg';

const styles = {
    spinner: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 10,
      fontSize: 24,
    },
  };

export default function Loader ({ imageName }) {



// Нужно разобраться с пробрасыанием image  с сервера


    const image = {
        name: imageName,
        sprites: {
          other: {
            'official-artwork': {
              front_default: pendingImage,
            },
          },
        },
        stats: [],
      };


  return (
    <div role="alert">
      <div style={styles.spinner}>
        <ImSpinner size="32" className="icon-spin" />
        Загружаем...
      </div>
      <ImageGallery image={image} />
    </div>
  );
}
