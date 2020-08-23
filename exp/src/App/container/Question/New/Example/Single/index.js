import React from 'react'
import TextField from '@material-ui/core/TextField';

import {Row,  Col} from 'react-bootstrap';
// import {useDispatch, useSelector} from "react-redux";

const SingeContainer = () => {


    return(<>


            <Row>
                <Col>         
                    <div className="position-relative form-group">
                        <TextField
                            id="standard-full-width"
                            label="내용을 입력해 주십시오"
                            style={{ margin: 8 }}
                            fullWidth
                            rows={4}
                            multiline
                            variant="outlined"
                            margin="normal"
                            size="small"
                            />
                    </div>
                </Col>
            </Row>
    
    </>);

}
export default SingeContainer
