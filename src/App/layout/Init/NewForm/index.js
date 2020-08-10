import React, { useEffect } from "react";
import {Row, Col, Form, Button} from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import {chageField, initialize, initializeForm, newAction} from "../../../modules/init"
import { useUpdateEffect } from "react-use";

const NewForm = () => {

    const dispatch = useDispatch();
    const {newApi, status} = useSelector(state=> state.init);
    const {name, url, description } = newApi;

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

    useEffect(()=>{
        return()=>{
            dispatch(initialize());
        }
    },[dispatch])



     
  useUpdateEffect(() => {
    if(status === null ) return;

    switch(status){

            case "NEW_FAILURE" : 
                    alert("실패 ! ")
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
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
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

                <Form.Group controlId="formBasicPassword">
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
            <Form.Group controlId="exampleForm.ControlTextarea1">
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
        <Col>
            <Button variant="primary" onClick={onClick}>
                Submit
            </Button>
        </Col>
    </Row>
    </>);

}
export default NewForm;