import React from "react";
import Images from "../../../components/ImageViewer";
import { useSelector } from "react-redux";
const HintImage = () => {

    const {hintImage} = useSelector(state => state.question);
    return(<>
    
    <Images src={hintImage} alt="hint"/>
    
    </>);


}
export default HintImage;