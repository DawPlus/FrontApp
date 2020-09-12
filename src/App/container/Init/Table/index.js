import React, { useEffect } from "react";

import {useDispatch, useSelector } from "react-redux";
import {listAction ,  initialize} from "../../../../store/modules/init"
//import columns from "./column";
import { Link } from "react-router-dom";
import Tables from "../../../components/MuiTable";

const TableContainer = () => {

    const columns =  [
        {
            name: " ",
            label: "NO",
            options: {
                customBodyRenderLite: (dataIndex) => {
                    return dataIndex + 1;
               }
            }
        },
        {
            name :"apiId",
            label : "apiId",
            options : {
                display:false

            }

        },
        {
            name: "method",
            label: "Method",
            options: {
                filter: true,
                sort: true
            
            }
        },
        {
            name: "name",
            label: "Name",
            options: {
                filter: false,
                sort: true,
                customBodyRender : (value, tableMeta, updateValue)=>{
                    return <Link to={`/init/${tableMeta.rowData[1]}`}>{value}</Link>
                }
            }
        },
        {
            name: "url",
            label: "URL",
            options: {
                filter: false,
                sort: true,
            }
        },
        {
            name: "description",
            label: "DESCRIPTION",
            options: {
                filter: false,
                sort: true,
            }
        },
    ]

    

    const dispatch = useDispatch();
    const {list} = useSelector(state => state.init);
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