import React from "react";
import { Card} from 'react-bootstrap';

import TableContainer from "../../App/container/Init/Table";
import {withRouter} from "react-router-dom"
import Title from "../../App/container/Init/Title";

const APIListPage = ({history, match}) => {
 
    return(<>
           <Title/>
            
            <Card>
                <Card.Body>
                    <TableContainer/>
                </Card.Body>
            </Card>
    
    </>);
}
export default withRouter(APIListPage);