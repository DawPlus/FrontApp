
import React from "react";
import DeleteIcon from '@material-ui/icons/DeleteForever';

const btnCss = {
    position: "absolute",
    borderRadius: "5px",
    border: "0px",
    right: "7px",
    bottom: "7px",
    background:"#fff"

}



const ImageRenderer = (props) => {

    const { index, photo,  onClick, onDeleteClick} = props;

    const handleOnClick = e => {
        onClick(e, {photo, index});
    };
    const deleteClick = (e , id)=> {
        onDeleteClick(id);
    }

    return(<>
        <div style={{position:"relative"}}>
        <button onClick={e=> deleteClick(e, photo.id)} name={photo.id} style={btnCss}><DeleteIcon/></button>  
        <img
          alt={photo.title}
          {...photo}
          onClick={handleOnClick}
          style={{cursor : "pointer", margin:"2px"}}
        />
      </div>
</>);

}
export default ImageRenderer;