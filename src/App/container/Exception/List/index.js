import React, { useEffect } from "react";
import {useDispatch, useSelector } from "react-redux";
import {listAction ,  initialize, initializeForm, deleteAllAction} from "../../../../store/modules/exceptions"
import { useUpdateEffect } from "react-use";
import { useSnackbar } from 'notistack';
import Datatable from "../../../components/Datatable";


import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const TableContainer = () => {


    const dispatch = useDispatch();
    const {list, message, status} = useSelector(state => state.exceptions);
    const { enqueueSnackbar } = useSnackbar();
    
    const columns =    [
        {
            name :"exceptionId",
            label : "excationId",
            options : {
                display : false, 
                sort : true,
                filter : false,
              
            }

        }, 
        {
            name :"title",
            label : "Title",
            options : {
                sort : true,
                filter : false,
                customBodyRender : (value, tableMeta, updateValue)=>{
                    return <Link to={`/exception/${tableMeta.rowData[1]}`}>{value}</Link>
                }

            }

        }, 
       
        {
            name :"deviceId",
            label : "DeviceId",
            options : {
                sort : true,
                filter : false

            }

        }, 
        {
            name :"saveDate",
            label : "등록일",
            options : {
                sort : true,
                filter : false

            }

        }
    ]


    
    const snackBar = (text, variant='info') =>{
      enqueueSnackbar(text,
            {
                variant  : variant,
                anchorOrigin: {
                    vertical: 'top',
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


    
  useUpdateEffect(() => {
    
    if(status === null ) return;

        switch(status){

            case "LIST_SUCCESS" : 
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
        <Datatable columns={columns} data ={list}/>
        <Button variant="contained" color="secondary" onClick={onDelete}>
                전체삭제(임시)
        </Button>
    </>);

}
export default TableContainer;