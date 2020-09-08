import React, { useEffect }  from "react"
import { useSelector, useDispatch } from "react-redux";
import Button from '@material-ui/core/Button';
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
const ViewContainer = ({history, match}) => {

    const {id} = match.params;
    const dispatch = useDispatch();
 
    const {status, message} = useSelector(s => s.question);
 
    const { enqueueSnackbar } = useSnackbar();
    // SmacBar    
    const snackBar = (text, variant='info') =>{
        enqueueSnackbar(text,
            {
                variant  : variant,
                anchorOrigin: {
                    vertical: 'bottom',
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
                    snackBar(message);
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
      
 
      const backBtn = () => {

        history.push("/question")
      }
 
 return(<>
    
        <Row>
            <Col>
                 <Card.Body style={{textAlign:"right"}}>
                 <Button variant="contained" color="primary" onClick={backBtn}>
                        뒤로
                </Button>
                </Card.Body>
            </Col>


        </Row>


        <Row>
            <Col md={8}>
                <Info/>
            </Col>
            <Col md={4}>
                <Example/>
            </Col>
        </Row>
    
        <Row>
            <Col md={4}>
                <Map/>
            </Col>
            <Col md={4}>
                <Guide/>
            </Col>
            <Col md={4}>
                <Video/>
            </Col>
            
        </Row>
    
    
    </>);


}
export default withRouter(ViewContainer);