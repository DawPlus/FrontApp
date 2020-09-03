import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import Confirm  from "../../../../components/Confirm";
import {newAction, initializeForm} from "../../../../../store/modules/question";
import { useSnackbar } from 'notistack';
import { useUpdateEffect } from 'react-use';
import { useHistory } from 'react-router-dom';


const ButtonContainer = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const newInfo = useSelector(state=> state.question.new);
    const {status, message} = useSelector(state=> state.question);
    const [isOpen, setIsOpen] = useState(false);

    // 신규 등록 
    const onSubmit = () => {
       dispatch(newAction(newInfo));
    }

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

    
     
  useUpdateEffect(() => {
    if(status === null ) return;

        switch(status){

            case "NEW_SUCCESS" : 
                    snackBar(message, 'success');
                    history.push("/question");
                    break;
            case "NEW_FAILURE" : 
                    snackBar(message, 'error');
                    break;
            default : break;
        }

    dispatch(initializeForm("status"));
    dispatch(initializeForm("message"));


  }) // you can include deps array if necessary


  // 뒷정리 
  useEffect(()=>{
    return()=>{
        dispatch(initializeForm("new"));
    }
  },[dispatch])


  const onCancle = () => {
    history.push("/question");
  }



    return(<>
        <Confirm
            message={"신규 등록 하시겠습니까?"}
            isOpen={isOpen}
            onCancle={()=>setIsOpen(false)}
            onAccept={onSubmit}
        />


        <div style={{textAlign : "right"}}>
            <Button variant="contained" color="primary" style={{marginRight : "10px"}} size="small" onClick={()=>{setIsOpen(true)}}>
             등록
            </Button>
                        
            <Button variant="contained" color="primary"  size="small" onClick={onCancle}>
            취소
            </Button>
        </div>
    </>);


}
export default ButtonContainer;