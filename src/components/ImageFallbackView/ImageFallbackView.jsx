import errorImage from './error.jpg';
import 'components/Styles/styles.css';



function ImageFallbackView({ message }) {


return (
<div className="Fallbox" role="alert">
<img src={errorImage} width="460" height="460" alt="sadcat" />
<p className="Falltitle">{ message }</p>
</div>
)

}


export default ImageFallbackView

