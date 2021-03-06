import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import Confirm  from "../../../../components/Confirm";
import Warning  from "../../../../components/Warning";
import {updateAction, initializeForm} from "../../../../../store/modules/question";
import { useSnackbar } from 'notistack';
import { useUpdateEffect } from 'react-use';
import { useHistory } from 'react-router-dom';

import {validation} from "../../../../../store/Util/validation";


const ButtonContainer = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const viewInfo = useSelector(state=> state.question.view);
    const {status, message} = useSelector(state=> state.question);
    const [isOpen, setIsOpen] = useState(false);

    const [isWarning, setIsWarning] = useState(false);
    const [warning, setWarning] = useState([]);
    

    // 신규 등록 
    const onSubmit = () => {
        const valid = validation(viewInfo);
        if(valid.length > 0) { 
            setIsOpen(false);
            setIsWarning(true);            
            setWarning(valid.map((it, idx)=><p key={idx}>  [<em>{it}</em>] 이(가) 비어있습니다.</p>));
            return false;
        }
    
        if(viewInfo.type === 1){
            // 객관식 
            if(viewInfo.examples.filter(it=> it.content === "").length >0){
                setIsOpen(false);
                setIsWarning(true)
                setWarning("보기를 모두 입력해 주십시오");       
                return false;     
            }
            // 정답여부 체크 
            if(viewInfo.examples.filter(it=> it.isAnswer === 1).length === 0){
                setIsOpen(false);
                setIsWarning(true)
                setWarning("정답을 선택해 주십시오");       
                return false;
            }
        }else{
            if(viewInfo.singleExample === "" || viewInfo.singleExample === null){
                setIsOpen(false);
                setIsWarning(true)
                setWarning("주관식 정답을 입력해 주십시오");       
                return false;
            }

        }  
      dispatch(updateAction(viewInfo));
    }
   

    const { enqueueSnackbar } = useSnackbar();
    const snackBar = (text, variant='info') =>{
        enqueueSnackbar(text,
            {
                variant  : variant,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                },
                autoHideDuration : 3000
            }
        );
    }

    
     
  useUpdateEffect(() => {
    if(status === null ) return;
        switch(status){
            case "UPDATE_SUCCESS" : 
                    snackBar(message, 'success');
                    history.push("/question");
                    break;
            case "UPDATE_FAILURE" : 
                    snackBar(message, 'error');
                    break;
            default : break;
        }
    dispatch(initializeForm("status"));
    dispatch(initializeForm("message"));
  });


  // 뒷정리 
  useEffect(()=>{
    return()=>{
        dispatch(initializeForm("view"));
    }
  },[dispatch])


  const onCancle = () => {
    history.push("/question");
  }



    return(<>
    
        <Confirm
            message={"수정사항을 등록 하시겠습니까?"}
            isOpen={isOpen}
            onCancle={()=>setIsOpen(false)}
            onAccept={onSubmit}
        />
        <Warning
            message={warning}
            isOpen={isWarning}
            onCancle={()=>setIsWarning(false)}
        />    
        <div style={{textAlign : "right"}} className="mb-3">
            <Button variant="contained" color="primary" style={{marginRight : "10px"}} size="small" onClick={()=>{setIsOpen(true)}}>
             수정
            </Button>
                        
            <Button variant="contained" color="primary"  size="small" onClick={onCancle}>
            취소
            </Button>
        </div>
    </>);


}
export default ButtonContainer;