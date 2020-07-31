import React from "react";
import {InputGroup,FormControl } from 'react-bootstrap';
const ExampleList = (props) =>{
    const {example =[], onChange, onClick} = props;
    

    return(<>
    
        {example.map((it,idx) =>
            <InputGroup className="mt-1" key={idx} size="sm">
                <InputGroup.Prepend>
                    <InputGroup.Radio onClick={e=>{onClick(e,idx)}}  name="isTrue" value={it.isTrue}/>
                </InputGroup.Prepend>
                <FormControl onChange={e=>{onChange(e, idx)}} name="content" value={it.content}/>
            </InputGroup>         
         )}
    </>);


}
export default ExampleList