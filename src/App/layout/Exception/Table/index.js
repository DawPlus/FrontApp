import React, { useEffect } from "react";

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import {listAction,initialize, initializeForm} from "../../../modules/exceptions";
import MbdTable from "../../../components/MdbTable";
import column from "./column";
const TableContainer = () => {
  
  const dispatch = useDispatch();
  const {list, status} = useSelector(state => state.exceptions);


  useEffect(()=>{

    dispatch(listAction());

    return(()=>{
      console.log("뒷정리")
      dispatch(initialize())
    });

  }, [dispatch]);



  useEffect(()=>{
    if(status === null) return;

    switch(status){
      case "LIST_SUCCESS": 
            list.map(it=> it.title = <Link to={`/exception/${it.exception_id}`}>{it.title}</Link> );
          break;
      default : break;
    }



    dispatch(initializeForm("status"));
    dispatch(initializeForm("message"));
  },[dispatch, status, list])

  // datatable.rows.map(it=> it.name = <Link to={`/exception/${it.age}`}>{it.name}</Link> );
  // console.log(datatable.rows);


    return(<>
      <MbdTable columns={column} rows={list} rowNum/>
    
    </>);

}
export default TableContainer;