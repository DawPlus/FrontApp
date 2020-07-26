import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import { Card, Form} from 'react-bootstrap';
import Images from "../../../components/ImageViewer";
import { useSelector, useDispatch } from "react-redux";
import SaveIcon from '@material-ui/icons/Save';
import {changeField, mapFileUpload, hintFileUpload} from "../../../../store/modules/question"
const ImageContainer = () => {


    const dispatch = useDispatch();
    const {mapFile, hintFile, mapImage, hintImage} = useSelector(state => state.question);

    const [title , setTitle]= useState({
            mapFile  : "File",
            hintFile : "File",
    })
    
    const onChangeFile = e =>{
        e.preventDefault();
        setTitle({
            ...title,
            [e.target.id] : e.target.files[0].name
        });
        console.log(e.target.files[0])
        dispatch(changeField({
                key : e.target.id
            ,   value : e.target.files[0]
        }));
    }
    const upload = e => {
        if(e ==="mapFile"){
            dispatch(mapFileUpload(mapFile));
        }else{
            dispatch(hintFileUpload(hintFile));
        }
        
    }
    return(<>
       <Card>
            <Card.Header>
                <Card.Title as="h5">Map</Card.Title>
            </Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group>
                        <Form.File 
                            id="mapFile"
                            label={title.mapFile}
                            lang="en"
                            custom
                            onChange={onChangeFile}
                        />
                    </Form.Group>
                    <Form.Group>
                    <Button 
                        variant="contained" 
                        startIcon={<SaveIcon />} 
                        color="primary" 
                        size="small" 
                        onClick={e=> {upload('mapFile')}}>

                            Submit
                    </Button>
                    {mapImage &&
                        <Images src={mapImage} alt="map"/>
                        }
                    </Form.Group>
                 </Form>
            </Card.Body>
        </Card>
        <Card>
            <Card.Header>
                <Card.Title as="h5">Hint</Card.Title>
            </Card.Header>
            <Card.Body>
                 <Form>
                    <Form.Group>
                        <Form.File 
                            id="hintFile"
                            label={title.hintFile}
                            lang="en"
                            custom
                            onChange={onChangeFile}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Button 
                            variant="contained" 
                            color="primary"  
                            size="small" 
                            startIcon={<SaveIcon />} 
                            onClick={e=> {upload('hintFile')}}>
                            Submit
                        </Button>
                        {hintImage &&
                            <Images src={hintImage} alt="map"/>
                        }
                    </Form.Group>
                 </Form>
            </Card.Body>
        </Card>
    
    
    
    </>);
}
export default ImageContainer;