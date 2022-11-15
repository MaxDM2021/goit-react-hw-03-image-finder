// import ImageGalleryItem from "components/ImageGalleryItem";
import "components/Styles/styles.css"


const  ImageGallery = ({ hits }) => (
<ul className="ImageGallery">
    {hits.map(({id, webformatURL, tags, largeImageURL}) => (
<li 
key={id}
className="ImageGalleryItem">
  <img src={webformatURL} alt={tags} loading="lazy" className="ImageGalleryItem-image"/>
</li>))}
</ul>
    )

export default ImageGallery


