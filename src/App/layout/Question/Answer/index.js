import React from "react";
import {useSelector } from "react-redux";
import {Card} from 'react-bootstrap';


import AnswerList from "./List";
import AnswerSingle from "./Single";


const ToggleContainer = () => {


      
    const  {type} = useSelector(state => state.question);

    return(<>
       <Card className="answer_list">
            { type ? 
                    <AnswerList/> :
                    <AnswerSingle />
            }


       </Card>
    
    </>);
}
export default ToggleContainer;