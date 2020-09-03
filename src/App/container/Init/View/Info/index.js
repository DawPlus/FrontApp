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
    const {API_ID, NAME, DESCRIPTION, method, URL} = useSelector(state=> state.init.viewApi);
    const {status, message}  = useSelector(state=> state.init);
    const [isOpen, setIsOpen] = useState(false);

     // Component Did Mount 
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
                    console.log("삭제 완료 ")
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
        if(API_ID ==="") {
            snackBar("삭제할 API 가 존재하지 않습니다.", "error"); return;
        }
        dispatch(deleteAction(API_ID));
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
                        {/* <TextField 
                            required 
                            label="API Name"  
                            margin="dense"
                            variant="outlined"
                            inputProps={{style: {fontSize: 14}}} // font size of input text
                            InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                            fullWidth/> */}
                        <Form.Control 
                            type="text" 
                            placeholder="Enter API Name" 
                            value={NAME}
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
                      
                        {/* <TextField required id="standard-required" label="API Name"  size="small" fullWidth/> */}
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="url">
                    <Form.Label>URL</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter URL" 
                        value={URL}
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
                    value={DESCRIPTION}
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