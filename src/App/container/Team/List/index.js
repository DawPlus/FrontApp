import React, { useEffect } from "react";
import {useDispatch, useSelector } from "react-redux";
import {listAction ,  initialize, initializeForm} from "../../../../store/modules/team"
import { useUpdateEffect } from "react-use";
import { useSnackbar } from 'notistack';
import Datatable from "../../../components/Datatable"

import { Link } from "react-router-dom";

const ListContainer = () => {

    const dispatch = useDispatch();
    const {list, message, status} = useSelector(state => state.team);
    const { enqueueSnackbar } = useSnackbar();
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
    const columns =    [
        {
            name :"teamId",
            label : "TeamId",
            options : {
                display : false, 
                sort : true,
                filter : false, 
            }
        }, 
        {
            name :"team",
            label : "team",
            options : {
                sort : true,
                filter : false,
                customBodyRender : (value, tableMeta, updateValue)=>{
                    return <Link to={`/team/${tableMeta.rowData[1]}`}>{value}</Link>
                }
            }
        }, 
        {
            name :"manager",
            label : "Manager",
            options : {
                sort : true,
                filter : false
            }
        }, 
        {
            name :"phone",
            label : "Phone",
            options : {
                sort : true,
                filter : false
            }
        },
        {
            name :"updateDate",
            label : "Update Date",
            options : {
                sort : true,
                filter : false
            }
        },
        {
            name :"saveDate",
            label : "Save Date",
            options : {
                sort : true,
                filter : false
            }
        }
    ];

    useEffect(()=>{
        dispatch(listAction());  
        return()=>{
            dispatch(initialize());
        }
    },[dispatch]);


        
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
      
    }
  },[status])



    return(<>
        <Datatable columns={columns} data ={list} />
    </>);

}
export default ListContainer;