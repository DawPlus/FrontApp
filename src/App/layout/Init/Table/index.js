import React, { useEffect, useState } from "react";
//import {Table} from 'react-bootstrap';
import {useDispatch, useSelector } from "react-redux";
import {listAction , deleteAction, initialize, initializeForm} from "../../../modules/init"
import { useUpdateEffect } from "react-use";
import { useSnackbar } from 'notistack';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Confirm from "../../../components/Confirm";
import MdbTable from "../../../components/MdbTable";
import columns from "./column";
const TableContainer = () => {


    const dispatch = useDispatch();
    const {list, message, status} = useSelector(state => state.init);
    const { enqueueSnackbar } = useSnackbar();
    const [isOpen, setIsOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(null);



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

    
  useUpdateEffect(() => {
    if(status === null ) return;

        switch(status){

            case "LIST_SUCCESS" : 

            list.map(it=> it.action = 
              <div style={{textAlign:"center"}}>
            <IconButton 
              aria-label="delete" 
              color="primary" 
              className="deleteBtn" 
              onClick={e => showConfirm(e, it.API_ID)}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
          </div> );
          
                    break;
            case "LIST_FAILURE" : 
                  snackBar(message);
                    break;
            case "DELETE_SUCCESS" : 
                  dispatch(listAction());
                  snackBar(message);
                    break;
            case "DELETE_FAILURE" : 
                 snackBar(message);
                    break;


            default : break;
        }

    dispatch(initializeForm("status"));
    dispatch(initializeForm("message"));

    return () => { // *OPTIONAL*
      // do something on unmount
    }
  }) // you can include deps array if necessary



  const showConfirm = (e, id) => {
    setIsOpen(true);
    setDeleteId(id);
  }


  const onDelete = () =>{
    setIsOpen(false);
    setDeleteId(null);
    dispatch(deleteAction(deleteId));
  }


  





  console.log(columns);
    return(<>
        <Confirm
            message ="삭제하시겠습니까?"
            isOpen={isOpen}
            onCancle={()=>{setIsOpen(false)}}
            onAccept={onDelete}
        />





        <MdbTable columns={columns} rows ={list}/>







         {/* <Table responsive>
                <thead>
                <tr>
                    <th>#</th>
                  
                    <th>Method</th>
                    <th>NAME</th>
                    <th>URL</th>
                    <th>설명</th>
                    <th style={{textAlign:"center"}}>Action</th>
                </tr>
                </thead>
                <tbody>
                    {list.map((item,idx) => 
                    
                      <tr key={idx}>
                        <th scope="row">{idx+1}</th>
                  
                        <td>{item.method}</td>
                        <td>{item.NAME}</td>
                        <td>{item.URL}</td>
                        <td style={{whiteSpace: "normal"}}>{item.DESCRIPTION}</td>
                        <td style={{    textAlign: "center"}}>
                          <IconButton 
                              aria-label="delete" 
                              color="primary" 
                              className="deleteBtn" 
                              onClick={e => showConfirm(e, item.API_ID)}
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>

                        </td>
                    </tr>
                    )}
                </tbody>
            </Table> */}
    </>);

}
export default TableContainer;