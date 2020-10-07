import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import Button from '@material-ui/core/Button';

import { withRouter } from 'react-router-dom';
import { useUpdateEffect } from "react-use";
import { useSnackbar } from 'notistack';
import { initialize, initializeForm  , selectAction} from "../../../../store/modules/exceptions";
import {UnControlled as CodeMirror} from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';


const ViewContainer = ({history, match}) => {

    const {id} = match.params;
    const dispatch = useDispatch();
    const {status,  message} = useSelector(state=> state.exceptions);
    const { enqueueSnackbar } = useSnackbar();

    const { title, exceptions, deviceId, saveDate} = useSelector(state=> state.exceptions.view);

    // SmacBar    
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
  
  

    // 뒤로 
    const onCancle = () => {
        history.push("/exception");
    }



      

    useUpdateEffect(() => {
        if(status === null ) return;
            switch(status){
                case "SELECT_SUCCESS" : 
                    snackBar(message);
                    break;
                case "SELECT_FAILURE" : 
                    snackBar(message);
                    break;
                default : break;
            }
    
        dispatch(initializeForm("status"));
        dispatch(initializeForm("message"));
    
        return () => { // *OPTIONAL*
          // do something on unmount
        }
      },[status]) 
    



    useEffect(() => {
        
        dispatch(selectAction(id))


        return () => {
            dispatch(initialize());
        }
    }, [dispatch, id])


    return(<>
            <Row>
                <Col md={2}>
                    <label htmlFor="title" className="col-form-label">Title</label>
                </Col>
                <Col md={10}>
                    <textarea className="form-control" id="title" value={title} readOnly style={{resize : "none"}}></textarea>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col md={2}>
                    <label htmlFor="deviceId" className="col-form-label">Device ID</label>
                </Col>
                <Col md={10}>
                     <input name="deviceId" id="deviceId" type="text" className="form-control" value={deviceId} readOnly/>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col md={2}>
                     <label htmlFor="saveDate" className="col-form-label">등록일시</label>
                </Col>
                <Col md={10}>
                    <input name="saveDate" id="saveDate" type="text" className="form-control" value={saveDate} readOnly/>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col md={2}>
                     <label htmlFor="exception" className="col-form-label">Exception</label>
                </Col>
                <Col md={10}>
                        <CodeMirror
                            value={exceptions}
                            options={{
                                mode: 'javascript',
                                theme: 'xq-light',
                                lineNumbers: true
                            }}
                        />
                </Col>
            </Row>
            <Row className="mt-3">
                <Col style={{textAlign : "right"}}>
                    <Button variant="contained" color="primary" onClick={onCancle}>
                        뒤로
                    </Button>
                </Col>
            </Row>
         
    </>);


}
export default withRouter(ViewContainer);