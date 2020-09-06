import React from 'react';
import {Card} from 'react-bootstrap';
import Title from "../../App/container/Team/Title";
import List from "../../App/container/Team/List";

const TeamList = () => {

    return(<>
            <Title/>
            <Card>
                <Card.Header>
                    <Card.Title as="h5">팀 관리 </Card.Title>
                </Card.Header>
                <Card.Body>
                    <List/>
                </Card.Body>
            </Card>
    </>);
    
}
export default TeamList;