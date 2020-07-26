import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {Card, Form} from 'react-bootstrap';
import {changeField} from "../../../../store/modules/question";

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