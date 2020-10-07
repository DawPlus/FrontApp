import React, { useState, useCallback } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import Confirm  from "../../components/Confirm";
import { useSnackbar } from "notistack";
import {deleteAction, initializeForm} from "../../../store/modules/team";
import { useHistory } from 'react-router-dom';
import { useUpdateEffect } from 'react-use';


const ButtonContainer = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [isOpen , setIsOpen] = useState(false);
    const {status, message} = useSelector(s => s.team); 
    const {teamId} = useSelector(s => s.team.view); 
    const { enqueueSnackbar } = useSnackbar();
    
    const snackBar = useCallback( (text, variant='info') =>{
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
      },[enqueueSnackbar]);
    
  
    useUpdateEffect(() => {
        if(status === null ) return;
            switch(status){
                case "DELETE_SUCCESS" : 
                        setIsOpen(false);
                        snackBar(message);
                        history.push("/team")
                      break;
                case "DELETE_FAILURE" : 
                       snackBar(message, "error");
                      break;
                default : break;
            }    
        dispatch(initializeForm("status"));
        dispatch(initializeForm("message"));
    
        return () => { // *OPTIONAL*
          // do something on unmount
        }
      },[status]) // you can include deps array if necessary
    const onSubmit = () =>{
        dispatch(deleteAction(teamId));
    }

    const onCancle = () =>{
       history.push("/team");

    }
    return(<>
        
        <Confirm
                message={<>팀관련 모든 데이터가 삭제됩니다. <br/>삭제 하시겠습니까? </>}
                isOpen={isOpen}
                onCancle={()=>setIsOpen(false)}
                onAccept={onSubmit}
        />
        
        <div style={{textAlign : "right"}} className="mb-3">
            <Button variant="contained" 
                        color="primary" 
                        style={{marginRight : "10px"}} size="small" 
                        onClick={()=>{setIsOpen(true)}}>
             삭제
            </Button>
                        
            <Button variant="contained" color="primary"  size="small" onClick={onCancle}>
            목록
            </Button>
        </div>
    
    
    </>);

}
export default ButtonContainer;