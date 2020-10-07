import React from 'react';
import {Card} from 'react-bootstrap';
import Title from "../../App/container/Team/Title";
import List from "../../App/container/Team/List";

const TeamList = () => {

    return(<>
            <div className="animated animate__fadeInUp faster">
                <Title/>
            </div>
            <Card className="animated animate__fadeInUp delay-1">
                <Card.Body>
                    <List/>
                </Card.Body>
            </Card>
    </>);
    
}
export default TeamList;