import React, { useEffect } from "react";
import {Col, Form, Button} from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import {chageField, initialize,newAction} from "../../../modules/init"

const NewForm = () => {

    const dispatch = useDispatch();
    const newInfo = useSelector(state=> state.init.new);
    const {name, url, description } = newInfo;

    const onChange = e => {
        dispatch(chageField({
                form : "new",
                key : e.target.name,
                value : e.target.value
        }));
    };

    const onClick = e =>{
        dispatch(newAction(newInfo));
    }

    useEffect(()=>{
        return()=>{
            dispatch(initialize());
        }
    },[])


    return(<> 
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
                <Button variant="primary" onClick={onClick}>
                    Submit
                </Button>
            </Form>
        </Col>
        <Col md={6}>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description textarea</Form.Label>
                <Form.Control as="textarea" 
                    rows="3" 
                    value={description} 
                    name="description"
                    onChange={onChange}
                />
            </Form.Group>
        </Col>
    </>);

}
export default NewForm;