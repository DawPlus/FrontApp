import React, { useCallback } from 'react'
import {initialize, listAction, initializeForm} from "../../../store/modules/screenshot";
import { useDispatch, useSelector } from 'react-redux';
import { useUpdateEffect, useLifecycles } from 'react-use';
import { useSnackbar } from "notistack";
import { withRouter } from 'react-router-dom';
import ImageList from "../../components/ImageList";

import noImage from "../../../assets/images/doh.png"
const ViewContainer = ({match, history}) => {

    const {id} = match.params;
    const dispatch = useDispatch();
    const {list, status, message} = useSelector(state=> state.screenshot);
    const { enqueueSnackbar } = useSnackbar();

    console.log(list);
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



    const onDelete = () => {

        console.log("delete")
    }


    return(<>
    
        {list.length > 0  ? <ImageList images={list} onDelete={onDelete}/> : <img src={noImage} alt="test"/>}
    

    
    
    </>);
}
export default withRouter(ViewContainer);