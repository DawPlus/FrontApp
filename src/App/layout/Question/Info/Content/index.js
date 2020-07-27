import React from "react";

import { Form} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {changeField} from "../../../../modules/question";



const InfoContainer = () => {
 

    const dispatch = useDispatch();
    const {title, content} = useSelector(state => state.question);
    const onChange = e =>{  
        dispatch(changeField({
            key : e.target.name,
            value : e.target.value
        }));

    }
    return(<>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>제목</Form.Label>
                <Form.Control type="text"
                    id="title"
                    name="title"
                    placeholer="제목을 입력해 주십시오."
                    value={title}
                    autoComplete="off"
                    onChange={onChange}    
                />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>내용</Form.Label>
                <Form.Control  
                        id="content"  
                        as="textarea" 
                        rows="4" 
                        placeholer="내용을 입력해 주십시오." 
                        autoComplete='off' 
                        name="content"
                        value={content}    
                        onChange={onChange}
                        />
            </Form.Group>
    </>);
}
export default InfoContainer;