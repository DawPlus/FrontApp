import React from "react";
import Images from "../../../components/ImageViewer"
import { useSelector } from "react-redux";
const MapImage = () => {

    const { mapImage} = useSelector(state => state.question);
    return(<>
        <Images src={mapImage} alt="map"/>
    </>);
}
export default MapImage;