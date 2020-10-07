import React, { useState } from "react";
import Viewer from "react-viewer";
import NoImage  from "../components/NoImage";
import config from "../../config";
const ImageViewer = (props) => {

    const {src, alt, container} = props

    
    const [visible , setVisible] = useState(false);
    const showMap = () => {
        setVisible(true);
    }

    const img =   src === null || src===""  ? <NoImage/> :  config.baseURL+src



    return(<>
        <img 
            src={img} 
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
            images={[{src: img , alt: alt}]}
        />


    </>);


}
export default ImageViewer;