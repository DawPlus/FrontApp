import React from 'react'
import Single from "./Single";
import Multi from "./Multi";
import { useSelector } from 'react-redux';


const ExampleContainer = () => {

    const {type} = useSelector(state=> state.question.view);
    

    return(<>    
         {type ==="1"? <Multi/> : <Single/> }
    </>);

}
export default ExampleContainer;