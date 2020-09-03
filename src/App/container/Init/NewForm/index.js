import React, { useEffect } from "react";
import {Row, Col, Form, Button} from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import {chageField, initialize, initializeForm, newAction} from "../../../../store/modules/init"
import { useUpdateEffect } from "react-use";
import { useSnackbar } from 'notistack';
import { withRouter } from 'react-router-dom';
// import TextField from '@material-ui/core/TextField';


// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';

const NewForm = ({ history}) => {
    
    const dispatch = useDispatch();
    const {newApi, status, message} = useSelector(state=> state.init);
    const {name, url, description } = newApi;
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



    const onChange = e => {
        dispatch(
            chageField({
                form : "newApi",
                key : e.target.name,
                value : e.target.value
            })
        );
    };

    const onClick = e =>{
        dispatch(newAction(newApi));
    }
    const onCancle = ()=>{
        history.push("/init")
    }

    useEffect(()=>{
            return()=>{
                console.log("뒷정리 ");
                dispatch(initialize());
            }
    },[dispatch])



     
  useUpdateEffect(() => {
    if(status === null ) return;

        switch(status){

            case "NEW_SUCCESS" : 
                    snackBar(message, 'success');
                    history.push("/init");
                    break;
            case "NEW_FAILURE" : 
                    snackBar(message, 'error');
                    break;
         
            case "DELETE_SUCCESS" : 
                    snackBar(message, 'success')
                    break;
            case "DELETE_FAILURE" : 
                    snackBar(message, 'error')
                    break;


            default : break;
        }

    dispatch(initializeForm("status"));


    return () => { // *OPTIONAL*
      // do something on unmount
    }
  }) // you can include deps array if necessary

    return(<> 
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
                            value={name}
                            name="name"
                            onChange={onChange}
                            />
                        <Form.Text className="text-muted">
                            API Name (Key)
                        </Form.Text>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="method">
                        <Form.Label>Method</Form.Label>
                        <Form.Control as="select" 
                            className="mb-3" 
                            name="method"
                            onChange={onChange}
                            value={newApi.method}
                        >
                            <option value='' >선택</option>
                            <option value='GET' >GET</option>
                            <option value='POST'>POST</option>
                            <option value='PUT'>PUT</option>
                            <option value='DELETE'>DELETE</option>
                        </Form.Control>
                      
                        {/* <TextField required id="standard-required" label="API Name"  size="small" fullWidth/> */}
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="url">
                    <Form.Label>URL</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter URL" 
                        value={url}
                        name="url"
                        onChange={onChange}
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
                    onChange={onChange}
                />
            </Form.Group>
        </Col>
    </Row>
    <Row>
        <Col md={6}>
            <Button variant="primary" onClick={onClick}  block>
                등록
            </Button>
        </Col>
        <Col md={6}>
         
        <Button variant="contained" onClick={onCancle}  block style={{backgroundColor: "#eaeaea", fontWeight: "bold"}}>
                취소
            </Button>
        </Col>
    </Row>
  
    </>);

}
export default withRouter(NewForm);