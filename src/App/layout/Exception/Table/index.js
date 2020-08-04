import React, { useEffect } from "react";
import { MDBDataTableV5, MDBBtn } from 'mdbreact';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import {listAction, initializeForm} from "../../../modules/exceptions";
const TableContainer = () => {
  
  const dispatch = useDispatch();
  const {data, status} = useSelector(state => state.exceptions);
console.log(data);

  useEffect(()=>{

    dispatch(listAction());

    return(()=>{

    });

  }, [dispatch]);



  useEffect(()=>{
    if(status === null) return;

    switch(status){
      case "LIST_SUCCESS": 
            data.rows.map(it=> it.title = <Link to={`/exception/${it.exception_id}`}>{it.title}</Link> );
          break;
    }



    dispatch(initializeForm("status"));
  },[dispatch, status])

  // datatable.rows.map(it=> it.name = <Link to={`/exception/${it.age}`}>{it.name}</Link> );
  // console.log(datatable.rows);


    return(<>
    

      <MDBDataTableV5 hover 
            entriesOptions={[5, 20, 25]} 
            entries={5}
            pagesAmount={4}
            data={data} 
      />
    
    </>);

}
export default TableContainer;