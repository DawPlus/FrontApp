import React from 'react'
import {Card} from 'react-bootstrap';

import Title from "../../App/container/Question/Title";
import List from "../../App/container/Question/List";

const QuestionList = () => {

    return(<>
          <Title/>
            <Card>
                <Card.Body>
                    <List/>
                </Card.Body>
            </Card>
            
    </>);
}
export default QuestionList;