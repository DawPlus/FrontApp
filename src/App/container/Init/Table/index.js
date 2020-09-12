import React, { useEffect } from "react";

import {useDispatch, useSelector } from "react-redux";
import {listAction ,  initialize, initializeForm} from "../../../../store/modules/init"
import { useUpdateEffect } from "react-use";
import { useSnackbar } from 'notistack';
import columns from "./column";
import { Link } from "react-router-dom";
import Tables from "../../../components/MuiTable";

const TableContainer = () => {

    

    const dispatch = useDispatch();
    const {list, message, status} = useSelector(state => state.init);
    // Component Did Mount
    useEffect(()=>{
        dispatch(listAction());      
        // 뒷정리 
        return()=>{
            dispatch(initialize());
        }
    },[dispatch])


    return(<>
    
        <Tables columns={columns} data={list}/>
    </>);

}
export default TableContainer;