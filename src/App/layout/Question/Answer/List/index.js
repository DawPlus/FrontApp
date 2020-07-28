import React from "react";
import {InputGroup,FormControl } from 'react-bootstrap';
import { useSelector } from "react-redux";

const ExampleList = () =>{


    const {answer} = useSelector(state=> state.question);


    const onChange = e => {
        console.log(e.target.name, e.target.value)
    }
    const onClick = e => {
        console.log(e.target.name, e.target.value)
    }
    return(<>
    
        {answer.map((it,idx) =>
            <InputGroup className="mt-1" key={idx}>
                <InputGroup.Prepend>
                    <InputGroup.Radio onClick={onClick}  name={idx} value={it.isTrue}/>
                </InputGroup.Prepend>
                <FormControl onChange={onChange} name="content" value={it.content}/>
            </InputGroup>         
         )}
    </>);


}
export default ExampleList