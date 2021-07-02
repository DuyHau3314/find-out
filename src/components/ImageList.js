const ImageList = ({images}) => {


    const renderImage = () => {
        return images.map((image, i) => {
            return <img key={i} src={image.urls.regular} alt={image.description} style={{height: '100%', width: '100%'}} />
        })
    };
    return ( 
        <div style={{margin: '0 auto',textAlign: 'center'}}>
            {renderImage()}

            {images && images.length > 0 && <a href="#top" style={{margin: '0', padding: '40px', display: 'block', fontSize: '18px'}}>Click để lên đầu trang</a>}
        </div>
     );
}
 
export default ImageList;