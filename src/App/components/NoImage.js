import React from "react";
import Lottie from "lottie-react";
import noImage from "./Lotties/noImage.json";
const style = {
    margin : "0 auto",
    width : "350px "
}
const NoImage = () => {
    return(<>
        <div style={style}>
            <Lottie animationData={noImage} />
        </div>
    </>);
}
export default NoImage;