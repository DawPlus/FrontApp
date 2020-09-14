import React, {  useCallback }  from "react"
import {useLifecycles, useUpdateEffect} from 'react-use';
import {listAction , initialize, initializeForm, updateUseYnAction} from "../../../../store/modules/question";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import Datatable from "../../../components/Datatable";

import { Link } from "react-router-dom";
import SwitchBtn from "../../../components/Switch";
const ListContainer = () => {

    
    // Dispatch
    const dispatch = useDispatch();
    const {list, message,  status} = useSelector(state=>state.question);
    const { enqueueSnackbar } = useSnackbar();
    const snackBar = useCallback( (text, variant='info') =>{
      enqueueSnackbar(text,
            {
                variant  : variant,
                anchorOrigin : {
                    vertical: 'top',
                    horizontal: 'right',
                },
                autoHideDuration : 3000
            }
        );
    },[enqueueSnackbar]);
    const columns =    [
        {
            name :"question_id",
            label : "QuestionID",
            options : {
                display : false, 
                sort : true,
                filter : false, 
            }
        }, 
        {
            name :"useYN",
            label : "USE YN",
            options : {
                display : false, 
                sort : true,
                filter : false, 
            }
        }, 
        {
            name :"",
            label : "사용여부",
            options : {
                sort : false,
                filter : false,
                customBodyRender : (value, tableMeta, updateValue)=>{
                        const id = tableMeta.rowData[1];
                        const useYN = tableMeta.rowData[2];
                        return <SwitchBtn checked={useYN} id={id} onChange={onUpdate }/>;
                }
               
            }
        }, 
        {
            name :"type",
            label : "Type",
            options : {
                sort : true,
                filter : false,
                customBodyRender : (value, tableMeta, updateValue)=>{
                    return  value === '1' ?   
                            <div className="badge badge-primary" style={{fontSize : "12px"}}>
                                    객관식
                            </div>: 
                            <div className="badge badge-success" style={{fontSize : "12px"}}>
                                주관식
                            </div>
                }
            }
        }, 
        {
            name :"title",
            label : "Title",
            options : {
                sort : true,
                filter : false,
                customBodyRender : (value, tableMeta, updateValue)=>{
                    return <Link to={`/question/${tableMeta.rowData[1]}`}>{value}</Link>
                }
            }
        }
    ]
    
    // 사용여부 변경 
    const onUpdate = (use, id) => { 
        dispatch(updateUseYnAction({useYN:use, question_id : id}));
    }


    useUpdateEffect(() => {
        if(status === null ) return;
            switch(status){
                case "LIST_SUCCESS" : 
                     
                      break;
                case "LIST_FAILURE" : 
                      snackBar(message);
                      break;
                case "UPDATE_USEYN_SUCCESS" :
                       dispatch(listAction()); 
                      snackBar(message);
                      break;                        
                case "UPDATE_USEYN_FAILURE" : 
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
    
       <Datatable columns={columns} data ={list} number={false}/>
        </>);




}
export default ListContainer;