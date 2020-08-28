import React from "react";
import TextField from '@material-ui/core/TextField';

import {Row,  Col} from 'react-bootstrap';
//import {useDispatch, useSelector} from "react-redux";
// import {changeField} from "../../../modules/question";



const InfoContainer = (props) => {
    // const {disabled} = props;

    // const dispatch = useDispatch();
    // const {title, content} = useSelector(state => state.question);
    // const onChange = e =>{  
    //     // dispatch(changeField({
    //     //     key : e.target.name,
    //     //     value : e.target.value
    //     // }));
    // }
    return(<>

            <Row>
                <Col>
                    <div className="position-relative form-group">
                        <label htmlFor="exampleEmail" className="">제목</label>
                        <TextField
                            id="standard-full-width"
                            label="제목을 입력해 주십시오"
                            style={{ margin: 8 }}
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            size="small"
                            />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>         
                    <div className="position-relative form-group">
                        <label htmlFor="exampleText" className="">내용</label>
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
export default InfoContainer;