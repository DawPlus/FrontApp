import React, { useState } from "react";
import Viewer from "react-viewer";
import NoImage  from "../../assets/images/noImage.jpg";
const ImageViewer = (props) => {

    const {src, alt} = props
    const [visible , setVisible] = useState(false);
    const showMap = () => {
        setVisible(true);
    }

    return(<>
        <img 
            src={src === null ? NoImage :  src} 
            alt={alt}
            className="imageView"
            onClick={showMap}   
        />
        <Viewer
            noImgDetails={true}
            noNavbar={true}
            visible={visible}
            onClose={()=>{setVisible(false)} }
            images={[{src:src === null ? NoImage :  src, alt: alt}]}
        />


    </>);


}
export default ImageViewer;