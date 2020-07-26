import React from "react";
import TextField from '@material-ui/core/TextField';

import {Form} from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import {changeField} from "../../../../store/modules/question";
const NewContainer = () => {
    const dispatch = useDispatch();

    const {title, content} = useSelector(state => state.question);

   
    const onChange = e =>{
        console.log(e.target.name, e.target.value);
      
        dispatch(changeField({
            key : e.target.name,
            value : e.target.value
        }));
    }
    return(<>
  
       <Form>
            <Form.Group controlId="formBasicEmail">
                <TextField id="title" 
                    label="제목을 입력해주세요" 
                    fullWidth 
                    variant="outlined" 
                    autoComplete='off'
                    name="title"    
                    size="small"     
                    value={title}         
                    onChange={onChange}    
                />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <TextField  
                        id="content"  
                        value=""
                        label="내용을 입력해주세요"  
                        rows={6}
                        fullWidth  
                        autoComplete='off' 
                        multiline 
                        name="content"
                        size="small"   
                        value={content}    
                        onChange={onChange}
                        variant="outlined"/>
            </Form.Group>
        </Form>
   

    
    
    
    </>);
}
export default NewContainer;