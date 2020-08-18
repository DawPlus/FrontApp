import React, { useState } from 'react';
import Gallery from 'react-grid-gallery';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
const captionStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    maxHeight: "240px",
    overflow: "hidden",
    position: "absolute",
    bottom: "0",
    width: "100%",
    color: "white",
    padding: "2px",
    fontSize: "90%"
};


const ImageList = (props) =>{
    const {images} =  props;
    // const [images, setImages] = useState([
    //     {
    //         src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    //         thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
    //         thumbnailWidth: 1,
    //         thumbnailHeight: 1,
    //         caption: "After Rain (Jeshu John - designerspics.com)"
    //     },
    //     {
    //         src: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg",
    //         thumbnail: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_n.jpg",
    //         thumbnailWidth: 1,
    //         thumbnailHeight: 1,
    //         caption: "37H (gratispgraphy.com)"
    //     },
    //     {
    //         src: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg",
    //         thumbnail: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_n.jpg",
    //         thumbnailWidth: 1,
    //         thumbnailHeight: 1,
    //         caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    //     },
    //     {
    //         src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
    //         thumbnail: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
    //         thumbnailWidth: 320,
    //         thumbnailHeight: 213,
    //         caption: "201H (gratisography.com)"
    //     },
    //     {
    //         src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
    //         thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
    //         thumbnailWidth: 320,
    //         thumbnailHeight: 213,
    //         caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)"
    //     },
    //     {
    //         src: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg",
    //         thumbnail: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_n.jpg",
    //         thumbnailWidth: 320,
    //         thumbnailHeight: 213,
    //         caption: "Man on BMX (Tom Eversley - isorepublic.com)"
    //     },
    //     {
    //         src: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
    //         thumbnail: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_n.jpg",
    //         thumbnailWidth: 320,
    //         thumbnailHeight: 213,
    //         caption: "Ropeman - Thailand (Tom Eversley - isorepublic.com)"
    //     },
    //     {
    //         src: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_b.jpg",
    //         thumbnail: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_n.jpg",
    //         thumbnailWidth: 257,
    //         thumbnailHeight: 320,
    //         caption: "A photo by 贝莉儿 NG. (unsplash.com)"
    //     }
    // ]);
    const [currentImage, setCurrentImage] = useState(null);
    const  onCurrentImageChange =(idx) =>{
        setCurrentImage(idx);
    }

    const deleteImage = () => {
        console.log(currentImage);

    }
  
    var nImage =  images.map((i) => {
        i.customOverlay = (
                <div style={captionStyle}>
                <div>{i.caption}</div>
                {i.hasOwnProperty('tags') &&
                 this.setCustomTags(i)}
            </div>);
        return i;
    });
    return(<>
    
           <div style={{
                display: "block",
                minHeight: "1px",
                width: "100%",
                border: "1px solid #ddd",
                overflow: "auto"}}>
               
                <Gallery
                    images={nImage}
                    enableLightbox={true}
                    enableImageSelection={false}
                    currentImageWillChange={onCurrentImageChange}
                    customControls={[
                        <Button key="deleteImage" onClick={deleteImage} variant="contained" size="small">
                               <DeleteIcon fontSize="small" />
                                Delete Image
                                </Button>
                    ]}
                />

            </div>
    
    </>);

}
export default ImageList;


