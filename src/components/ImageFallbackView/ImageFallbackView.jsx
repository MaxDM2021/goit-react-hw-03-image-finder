import errorImage from './error.jpg';



function ImageFallbackView({ message }) {


return (
<div role="alert">
    Нет такой картинки!!!
<img src={errorImage} width="240" alt="sadcat" />
<p>{ message }</p>
</div>
)

}


export default ImageFallbackView

