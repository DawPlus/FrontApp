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
    fontSize: "90%",
    paddingLeft : "10px"
};


const ImageList = (props) =>{
    const {images, onDelete, onClose} =  props;
    
    const [currentImage, setCurrentImage] = useState(null);

    // 현재 선택된 이미지
    const  onCurrentImageChange =(idx,e) =>{
        setCurrentImage(idx, e);
    }

    // 삭제 
    const deleteImage = () => {
      onDelete(images.find((item, idx)=> {return idx=== currentImage})  );
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
                    backdropClosesModal={true}
                    enableImageSelection={false}
                    currentImageWillChange={onCurrentImageChange}
                    customControls={[
                        <Button key="deleteImage" onClick={deleteImage} variant="contained" size="small" style={{margin:" 5px 0px"}}>
                            <DeleteIcon fontSize="small" />
                             Delete Image
                        </Button>
                    ]}
                    lightboxWillClose={onClose}
                />
            </div>
    
    </>);

}
export default ImageList;


