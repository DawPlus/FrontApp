import React, { useEffect } from "react";
import {useDispatch, useSelector } from "react-redux";
import {listAction ,  initialize, initializeForm} from "../../../../store/modules/team"
import { useUpdateEffect } from "react-use";
import { useSnackbar } from 'notistack';
import MdbTable from "../../../components/MdbTable";
import columns from "./column";
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
    },[dispatch]);


    const buttonComponent = (id, name)=>{
        return <Link to={`/team/${id}`} >{name}</Link>};  
        
        
  useUpdateEffect(() => {
    
    if(status === null ) return;

        switch(status){

            case "LIST_SUCCESS" : 
                    list.map(it=> it.team = buttonComponent(it.teamId, it.team )
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
      
    }
  },[status])



    return(<>
        <MdbTable columns={columns} rows ={list} rowNum/>
    </>);

}
export default ListContainer;