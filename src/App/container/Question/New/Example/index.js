import React from 'react'
import Single from "./Single";
import Multi from "./Multi";
import { useSelector } from 'react-redux';


const ExampleContainer = () => {

    const {type} = useSelector(state=> state.question.new);


    return(<>    
         {type ? <Multi/> : <Single/> }
    </>);

}
export default ExampleContainer;