import React, { useCallback } from 'react'
import {initialize, listAction, initializeForm, deleteAction} from "../../../store/modules/screenshot";
import { useDispatch, useSelector } from 'react-redux';
import { useUpdateEffect, useLifecycles } from 'react-use';
import { useSnackbar } from "notistack";
import { withRouter } from 'react-router-dom';
import ImageList from "../../components/ImageList";

import noImage from "../../../assets/images/doh.png"
const ViewContainer = ({match}) => {

    const {id} = match.params;
    const dispatch = useDispatch();
    const {list, status, message} = useSelector(state=> state.screenshot);
    const { enqueueSnackbar } = useSnackbar();
    
    const snackBar = useCallback( (text, variant='info') =>{
        enqueueSnackbar(text,
              {
                  variant  : variant,
                  anchorOrigin: {
                      vertical: 'bottom',
                      horizontal: 'right',
                  },
                  autoHideDuration : 3000
              }
          );
      },[enqueueSnackbar]);
  
    
    useUpdateEffect(() => {
        if(status === null ) return;
            switch(status){
                case "LIST_SUCCESS" : 
                      break;
                case "LIST_FAILURE" : 
                        snackBar(message);
                      break;
                case "DELETE_SUCCESS" : 
                        window.$('.close_1x3s325').trigger("click");
                        snackBar(message);
                        dispatch(listAction(id));
                      break;
                case "DELETE_FAILURE" : 
                       snackBar(message, "error");
                      break;
                default : break;
            }
    
        dispatch(initializeForm("status"));
        dispatch(initializeForm("message"));
    
        return () => { // *OPTIONAL*
          // do something on unmount
        }
      },[status]) // you can include deps array if necessary

    // Page Mount Event 
    useLifecycles(
        ()=>{
            dispatch(listAction(id));
        },
        () =>{
            dispatch(initialize());
            console.log("뒷정리");
        }
      );

    const onImageDelete = e => {
        dispatch(deleteAction(e));
    }


    return(<>
        {list.length > 0  ? <ImageList images={list} onDelete={onImageDelete}/> : <img src={noImage} alt="noImage"/>}    
    </>);
}
export default withRouter(ViewContainer);