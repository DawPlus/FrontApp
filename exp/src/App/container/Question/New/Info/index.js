import React from "react";
import TextField from '@material-ui/core/TextField';
import {Row,  Col} from 'react-bootstrap';
import {changeFieldForm} from "../../../../../store/modules/question";
import {useDispatch, useSelector} from "react-redux";




const InfoContainer = (props) => {
    const dispatch = useDispatch();
    const {title, content} = useSelector(state => state.question.new);
    const onChange = e =>{  
        dispatch(changeFieldForm({
            form : "new",
            key : e.target.name,
            value : e.target.value
        }));
    }
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
                            value={title}
                            name="title"
                            onChange={onChange}
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
                            name="content"
                            value={content}
                            onChange={onChange}
                    
                            />
                    </div>
                </Col>
            </Row>
    </>);
}
export default InfoContainer;