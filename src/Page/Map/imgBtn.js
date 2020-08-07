import React, { useState, useEffect } from "react";
import DeleteIcon from '@material-ui/icons/DeleteForever';

const btnCss = {
    position: "absolute",
    borderRadius: "5px",
    border: "0px",
    right: "7px",
    bottom: "7px",
    background:"#fff"

}


const SelectedImage = ({
  index,
  photo,
  margin,
  direction,
  top,
  left,
  onClick
}) => {

  
  const handleOnClick = e => {
    onClick(e, {photo, index});
  };
  const deleteClick = (e , id)=> {
    alert(id);
  }


  return (<>
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
};

export default SelectedImage;
