import React, {  useCallback }  from "react"
import {useLifecycles, useUpdateEffect} from 'react-use';
import {listAction , initialize, initializeForm} from "../../../../store/modules/question";
import { useSelector, useDispatch } from "react-redux";

import { useSnackbar } from "notistack";
import MdbTable from "../../../components/MdbTable";
import columns from "./column";
import { Link } from "react-router-dom";

const ListContainer = () => {

    
    // Dispatch
    const dispatch = useDispatch();
    const {list, message,  status} = useSelector(state=>state.question);

    const { enqueueSnackbar } = useSnackbar();
    const snackBar = useCallback( (text, variant='info') =>{
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
    },[enqueueSnackbar]);

    
    useUpdateEffect(() => {
        if(status === null ) return;
            switch(status){
                case "LIST_SUCCESS" : 
                        list.map(it=> { 
                            it.title = <Link to={`/init/${it.question_id}`} >{it.title}</Link>
                            it.type = it.type === '1' ?  
                                <div className="mb-2 mr-2 badge badge-primary" style={{fontSize : "12px"}}>
                                     객관식
                                </div>: 
                                <div className="mb-2 mr-2 badge badge-success" style={{fontSize : "12px"}}>
                                    주관식
                                </div>
                            return null;
                        });


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

      

    // Page Mount Event 
    useLifecycles(
        ()=>{
            dispatch(listAction());
        },
        () =>{
            dispatch(initialize());
            console.log("뒷정리");
        }
      );

    
    return(<>
       <MdbTable columns={columns} rows ={list} rowNum/>
    </>);




}
export default ListContainer;