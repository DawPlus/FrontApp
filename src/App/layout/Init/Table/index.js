import React, { useEffect } from "react";
import {Table} from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import {listAction , initialize, initializeForm} from "../../../modules/init"

const TableContainer = () => {


    const dispatch = useDispatch();
    const {list} = useSelector(state => state.init);

    useEffect(()=>{
        dispatch(listAction());
        return()=>{
            dispatch(initialize());
        }
    },[dispatch])
    console.log(list);

    return(<>
    
         <Table responsive hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>API ID</th>
                    <th>NAME</th>
                    <th>URL</th>
                    <th>설명</th>
                </tr>
                </thead>
                <tbody>
                    {list.map((item,idx) => 
                    
                      <tr key={idx}>
                        <th scope="row">{idx+1}</th>
                        <td>{item.API_ID}</td>
                        <td>{item.NAME}</td>
                        <td>{item.URL}</td>
                        <td>{item.DESCRIPTION}</td>
                    </tr>
                    )}
                </tbody>
            </Table>
    </>);

}
export default TableContainer;