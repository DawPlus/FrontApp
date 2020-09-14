import React  from "react"
import { useSelector } from "react-redux";
import {Row, Col, Card} from 'react-bootstrap';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useSnackbar } from 'notistack';
import { Button } from "@material-ui/core";

const ViewContainer =() => {
    

    const {view} = useSelector(s => s.question);
 

    const { enqueueSnackbar } = useSnackbar();
    // SmacBar    
    const snackBar = (text, variant='info') =>{
        enqueueSnackbar(text,
            {
                variant  : variant,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                },
                autoHideDuration : 3000
            }
        );
    }

    const onCopy = () => {

        snackBar("클립보드에 복사", "info")
    }
    return(<>

        <Card>
            <Card.Body>
                <h5 className="card-title">
                    Question Info
                    {view.type === "1" ?
                    <div className="badge badge-primary" style={{fontSize : "12px", float:"right"}}>
                            객관식
                    </div>: 
                    <div className="badge badge-success" style={{fontSize : "12px", float:"right"}}>
                        주관식
                    </div>
                     }
                </h5>
                    <Row className="mt-5">
                        <Col md={2}><label htmlFor="title" className="col-form-label">Title</label></Col>
                        <Col md={10}>
                            <input name="title" id="title" type="text" className="form-control" value={view.title} readOnly/>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={2}><label htmlFor="content" className="col-form-label">Content</label></Col>
                        <Col md={10}>
                        <textarea className="form-control" id="content" value={view.content} readOnly style={{resize : "none"}}></textarea>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={2}><label htmlFor="hint" className="col-form-label">Hint</label></Col>
                        <Col md={10}>
                            <textarea className="form-control" id="hint" value={view.hint} readOnly style={{resize : "none"}}></textarea>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={2}><label htmlFor="hint" className="col-form-label">Video</label></Col>
                        <Col md={10}>
                            <div className="input-group">
                                <input type="text" className="form-control" value={view.video} readOnly/>
                                <div className="input-group-append">
                                    <CopyToClipboard onCopy={onCopy} text={view.video}>
                                        <Button variant="contained" color="primary">
                                            <i className="pe-7s-note2"></i>
                                        </Button>
                                    </CopyToClipboard>
                                </div>
                            </div>
                        </Col>
                    </Row>




            </Card.Body>
        </Card>

    </>);


}
export default ViewContainer;