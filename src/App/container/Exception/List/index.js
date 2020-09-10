import React, { useEffect } from "react";
import {useDispatch, useSelector } from "react-redux";
import {listAction ,  initialize, initializeForm, deleteAllAction} from "../../../../store/modules/exceptions"
import { useUpdateEffect } from "react-use";
import { useSnackbar } from 'notistack';


import MdbTable from "../../../components/MdbTable";
import columns from "./column";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const TableContainer = () => {


    const dispatch = useDispatch();
    const {list, message, status} = useSelector(state => state.exceptions);
    const { enqueueSnackbar } = useSnackbar();
    
    


    
    const snackBar = (text, variant='info') =>{
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
    }



    useEffect(()=>{
        dispatch(listAction());
      
        return()=>{
            dispatch(initialize());
        }
    },[dispatch])


    const buttonComponent = (id, title)=>{
        
        return <Link to={`/exception/${id}`} >{title}</Link>};

    
  useUpdateEffect(() => {
    
    if(status === null ) return;

        switch(status){

            case "LIST_SUCCESS" : 
                list.map(it=> it.title = buttonComponent(it.exceptionId, it.title ));
                break;
            case "LIST_FAILURE" : 
                  snackBar(message);
                    break;

            case "DELETEALL_SUCCESS" : 
                dispatch(listAction());
                break;
            case "DELETEALL_FAILURE" : 
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




  const onDelete = () => {
    dispatch(deleteAllAction());
  }


    return(<>
        <MdbTable columns={columns} rows ={list} rowNum/>
        <Button variant="contained" color="secondary" onClick={onDelete}>
                전체삭제(임시)
        </Button>
    </>);

}
export default TableContainer;