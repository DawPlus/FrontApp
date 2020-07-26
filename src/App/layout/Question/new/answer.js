import React from "react";
import {useSelector } from "react-redux";
import {Card} from 'react-bootstrap';


import AnswerList from "./answerList";
import AnswerSingle from "./answerSingle";


const ToggleContainer = () => {


      
    const  {type} = useSelector(state => state.question);

    return(<>
       <Card>
            { type ? 
                    <AnswerList/> :
                    <AnswerSingle />
            }


       </Card>
    
    </>);
}
export default ToggleContainer;