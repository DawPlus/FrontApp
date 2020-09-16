import React from "react";
import { Card} from 'react-bootstrap';

import TableContainer from "../../App/container/Init/Table";
import Title from "../../App/container/Init/Title";

const APIListPage = () => {
 
    return(<>
            <div className="animated animate__fadeInUp faster">
                <Title/>
            </div>
            <Card className="animated animate__fadeInUp delay-1">
                <Card.Body>
                    <TableContainer/>
                </Card.Body>
            </Card>
    
    </>);
}
export default APIListPage;