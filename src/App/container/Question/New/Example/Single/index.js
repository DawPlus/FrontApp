import React from 'react'
import TextField from '@material-ui/core/TextField';

import {Row,  Col} from 'react-bootstrap';

import {useDispatch, useSelector} from "react-redux";
import {changeField} from "../../../../../../store/modules/question";

const SingeContainer = () => {

    const dispatch = useDispatch();
    const {singleExample} = useSelector(state=>state.question);

    const onChange = e => {

        dispatch(changeField({
            key : e.target.name,
            value : e.target.value

        }));
    }


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
                            value={singleExample}
                            name="singleExample"
                            onChange={onChange}
                            />
                    </div>
                </Col>
            </Row>
    
    </>);

}
export default SingeContainer
