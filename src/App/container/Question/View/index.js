import React, { useEffect, useState }  from "react"
import { useSelector, useDispatch } from "react-redux";
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import {Row, Col, Card} from 'react-bootstrap';

import Confirm  from "../../../components/Confirm";
import {viewAction, initialize, initializeForm, deleteAction} from "../../../../store/modules/question";
import { useUpdateEffect } from "react-use";
import { useSnackbar } from 'notistack';


import Info from "./Info";
import Example from "./Example";
import Map from "./Map";
import Guide from "./Guide";
import Video from "./Video";

const ViewContainer = ({history, match}) => {

    const {id} = match.params;
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);


    const {status, message} = useSelector(s => s.question);
  
    const { enqueueSnackbar } = useSnackbar();
    // SmacBar    
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


    // component did mount
    useEffect(() => {
      
        dispatch(viewAction(id))
        return () => {
            dispatch(initialize());
        }
    }, [dispatch, id])

    

    useUpdateEffect(() => {
        if(status === null ) return;
            switch(status){
                case "VIEW_SUCCESS" : 
                    snackBar(message);
                    break;
                case "VIEW_FAILURE" :
                    snackBar(message);
                    break;
                case "DELETE_SUCCESS" : 
                    snackBar(message);
                    history.push("/question");
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
      },[status]); 
      
 
      const backBtn = () => {
        history.push("/question")
      }


      const onConfirm = () =>{
          setIsOpen(true);
      }

      const onDelete = () => {
            dispatch(deleteAction(id));
      }

    
 
 return(<>
        <Confirm
            message={"문제를 삭제 하시겠습니까?"}
            isOpen={isOpen}
            onCancle={()=>setIsOpen(false)}
            onAccept={onDelete}
        />


        <Row>
            <Col>
                 <Card.Body style={{textAlign:"right"}}>
                    <Button variant="contained" color="primary" onClick={backBtn} className="mr-2" size="small">
                            뒤로
                    </Button>
                    <Button variant="contained" color="primary" onClick={onConfirm} size="small">
                            삭제 
                    </Button>
                    
                </Card.Body>
            </Col>


        </Row>


        <Row>
            <Col md={8}>
                <Info/>
            </Col>
            <Col md={4}>
                <Example/>
            </Col>
        </Row>
    
        <Row>
            <Col md={4}>
                <Map/>
            </Col>
            <Col md={4}>
                <Guide/>
            </Col>
            <Col md={4}>
                <Video/>
            </Col>
            
        </Row>
    
    
    </>);


}
export default withRouter(ViewContainer);