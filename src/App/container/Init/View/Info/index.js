import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {selectAction, initialize, initializeForm, deleteAction} from "../../../../../store/modules/init"
import {Row, Col, Form, Button} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { useUpdateEffect } from "react-use";
import { useSnackbar } from 'notistack';
import Confirm from "../../../../components/Confirm";


const ViewContainer = ({match, history}) => {
    const {id} = match.params;
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const {apiId, name, description, method, url} = useSelector(state=> state.init.viewApi);
    const {status, message}  = useSelector(state=> state.init);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {     
        dispatch(selectAction(id));
        return () => {
           dispatch(initialize());
        }
    }, [dispatch, id]);
    
    // 뒤로 
    const onCancle = () => {
        history.push("/init");
    }


    // SnackBar    
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
                case "SELECT_SUCCESS" : 
                    snackBar(message);
                    break;
                case "SELECT_FAILURE" : 
                    snackBar(message);
                    break;
                case "DELETE_SUCCESS" : 
                    history.push("/init");
                  
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
      },[status]) // you can include deps array if necessary
    

    // Confirm 창 
    const showConfirm = (e, id) => {
        setIsOpen(true);
    }

    // 삭제 
    const onDelete = () =>{
        setIsOpen(false);
        if(apiId ==="") {
            snackBar("삭제할 API 가 존재하지 않습니다.", "error"); return;
        }
        dispatch(deleteAction(apiId));
    }




    return(<>
      <Confirm
            message ="삭제하시겠습니까?"
            isOpen={isOpen}
            onCancle={()=>{setIsOpen(false)}}
            onAccept={onDelete}
        />
     <Row>
        <Col md={6}>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="apiName">
                        <Form.Label>API Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter API Name" 
                            value={name}
                            name="name"
                            disabled
                            />
                        <Form.Text className="text-muted">
                            API Name (Key)
                        </Form.Text>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="method">
                        <Form.Label>Method</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={method}
                            name="method"
                            disabled
                            />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="url">
                    <Form.Label>URL</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter URL" 
                        value={url}
                        name="url"
                        disabled
                    />
                </Form.Group>
            </Form>
        </Col>
        <Col md={6}>
            <Form.Group controlId="description">
                <Form.Label>Description textarea</Form.Label>
                <Form.Control as="textarea" 
                    rows="6" 
                    value={description}
                    name="description"
                    disabled
                />
            </Form.Group>
        </Col>
    </Row>
    <Row>
        <Col>
            <Button variant="primary" onClick={showConfirm}  >
                삭제
            </Button>
            <Button variant="contained" onClick={onCancle}   style={{backgroundColor: "#eaeaea", fontWeight: "bold"}}>
                뒤로 
            </Button>
        </Col>
    </Row>
    
    
    
    
    
    
    
    </>);
}
export default withRouter(ViewContainer);