import React ,{useState} from "react";
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import {Form} from 'react-bootstrap';
import {changeField, hintFileUpload, mapFileUpload} from "../../../modules/question"
import { useSelector, useDispatch } from "react-redux";


const ImagesContainer = () => {


    const dispatch = useDispatch();
    const {mapFile, hintFile } = useSelector(state => state.question);

    const [title , setTitle]= useState({
            mapFile : 'File',
            hintFile  : "File"
    });
    
    const onChangeFile = e =>{
        e.preventDefault();
        setTitle({
            ...title
            ,[e.target.id] : e.target.files[0].name
        });

        dispatch(changeField({
                key : e.target.id
            ,   value : e.target.files[0]
        }));
    }

    const upload = e => {
        if( e ==="hintFile"){
            dispatch(hintFileUpload(hintFile));        
        }else{
            dispatch(mapFileUpload(mapFile));        
        }

    }

    return(<>
    <Form.Group>
        <Form.Label>Map 파일 선택</Form.Label>
        <Form.File 
            id="mapFile"
            label={title.mapFile}
            lang="en"
            custom
            onChange={onChangeFile}
            size="small"
        />
        <Button 
            className="mt-2"
            variant="contained" 
            startIcon={<SaveIcon />} 
            color="primary"
            onClick={(e) =>{upload('mapFile')}}
            size="small">
        Submit
        </Button>
    </Form.Group>
    <Form.Group>
        <Form.Label>Hint 파일 선택</Form.Label>
        <Form.File 
            id="hintFile"
            label={title.hintFile}
            lang="en"
            custom
            onChange={onChangeFile}
        />
         <Button 
            className="mt-2"
            variant="contained" 
            startIcon={<SaveIcon />} 
            color="primary"
            onClick={(e) =>{upload('hintFile')}}
            size="small">
        Submit
        </Button>
    </Form.Group>

    </>);
}
export default ImagesContainer;