import React, { useState } from "react";
import Viewer from "react-viewer";
import NoImage  from "../../assets/images/doh.png";
const ImageViewer = (props) => {

    const {src, alt, container} = props
    const [visible , setVisible] = useState(false);
    const showMap = () => {
        setVisible(true);
    }

    return(<>
        <img 
            src={src === null || src===""  ? NoImage :  src} 
            alt={alt}
            className="imageView"
            onClick={showMap}   
        />
        <Viewer
            noImgDetails={true}
            noNavbar={true}
            visible={visible}
            container={container}
            onClose={()=>{window.$('body').css("overflow",""); setVisible(false)} }
            images={[{src:src === null ? NoImage :  src, alt: alt}]}
        />


    </>);


}
export default ImageViewer;