import React, { useEffect }  from "react"
import { useSelector, useDispatch } from "react-redux";

import { withRouter } from 'react-router-dom';
import {Row, Col, Card} from 'react-bootstrap';

import {viewAction, initialize, initializeForm} from "../../../../store/modules/question";
import { useUpdateEffect } from "react-use";
import { useSnackbar } from 'notistack';

import Info from "./Info";
import Example from "./Example";
import Map from "./Map";
import Guide from "./Guide";
import Video from "./Video";


const EditContainer = ({ match}) => {

    const {id} = match.params;
    const dispatch = useDispatch();
    const {status, message} = useSelector(s => s.question);
    const { enqueueSnackbar } = useSnackbar();
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


    // component did mount
    useEffect(() => {
        dispatch(viewAction(id))
        return () => {
            dispatch(initialize());
        }
    }, [dispatch, id])

    

    useUpdateEffect(() => {
        if(status === null ) return;
            switch(status){
                case "VIEW_SUCCESS" : 
                    break;
                case "VIEW_FAILURE" :
                    snackBar(message);
                    break;
                default : break;
            }
    
        dispatch(initializeForm("status"));
        dispatch(initializeForm("message"));
    
        return () => { // *OPTIONAL*
          // do something on unmount
        }
      },[status]); 
      
 return(<>
        <Row>
            <Col md={8}>
                <Card>
                    <Card.Body> 
                    <h5 className="card-title">Info</h5>
                    <Info/>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>        
                <Card>
                    <Card.Body> 
                        <h5 className="card-title">Example</h5>
                        <Example/>
                    </Card.Body>
                </Card>
            </Col>     
        </Row>
        <Row>
            <Col md={4}>
                <div className="main-card mb-3 card">
                    <div className="card-body">
                        <h5 className="card-title">Map</h5>
                        <div className="divider"></div>
                        <Map/>
                    </div>
                </div>
            </Col>
            <Col md={4}>
                <div className="main-card mb-3 card">
                    <div className="card-body">
                        <h5 className="card-title">Guide</h5>
                        <div className="divider"></div>
                        <Guide/>
                    </div>
                </div>
            </Col>
            <Col md={4}>
                <div className="main-card mb-3 card">
                    <div className="card-body">
                        <h5 className="card-title">Video</h5>
                        <div className="divider"></div>
                        <Video/>
                    </div>
                </div>
            </Col>
        </Row>
    </>);
}
export default withRouter(EditContainer);