import React from 'react'
import {Row,  Col} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {changeFieldForm} from "../../../../../../store/modules/question";

const SingeContainer = () => {

    const dispatch = useDispatch();
    const {singleExample} = useSelector(state=>state.question.view);

    const onChange = e => {

        dispatch(changeFieldForm({
            form : "view",
            key : e.target.name,
            value : {
                    "example_id" : singleExample.example_id,
                    "content":  e.target.value
                }

        }));
    }



    return(<>


            <Row>
                <Col>         
                    <div className="position-relative form-group">
                    <textarea 
                        className="form-control" 
                        name="singleExample"
                        id="singleExample"
                        value={singleExample.content}     onChange={onChange} style={{resize : "none"}}></textarea>
                        
                    </div>
                </Col>
            </Row>
    
    </>);

}
export default SingeContainer
