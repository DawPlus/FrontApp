import React, { useEffect } from "react";
//import {Table} from 'react-bootstrap';
import {useDispatch, useSelector } from "react-redux";
import {listAction ,  initialize, initializeForm} from "../../../../store/modules/init"
import { useUpdateEffect } from "react-use";
import { useSnackbar } from 'notistack';
// import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/Delete';

import MdbTable from "../../../components/MdbTable";
import columns from "./column";
import { Link } from "react-router-dom";

const TableContainer = () => {


    const dispatch = useDispatch();
    const {list, message, status} = useSelector(state => state.init);
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


    const buttonComponent = (id, name)=>{
        
        return <Link to={`/init/${id}`} >{name}</Link>};

    
  useUpdateEffect(() => {
    
    if(status === null ) return;

        switch(status){

            case "LIST_SUCCESS" : 
                list.map(it=> it.name = buttonComponent(it.apiId, it.name )
                );
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



    return(<>
        <MdbTable columns={columns} rows ={list} rowNum/>
    </>);

}
export default TableContainer;