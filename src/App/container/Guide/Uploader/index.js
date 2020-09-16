import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import Button from '@material-ui/core/Button';
import ImageUploader from "../../../components/imageUploader";
import {chageField, 
        newAction, 
        listAction, 
        initializeForm} from "../../../../store/modules/guide";
import {Row, Col} from 'react-bootstrap';

const UploaderContainer = () => {

    const dispatch = useDispatch();
    const {newInfo, status} = useSelector(state => state.guide);
    
    const onChange = (pictureFiles, url ) =>{
        dispatch(chageField({
            form : "newInfo",
            key : "fileInfo",
            value :pictureFiles[0]
        }));
    }
        
    const fileUpload = ()=>{
        if(newInfo.fileInfo === null){
            alert("파일을 선택해 주십시오");
            return;
        }        
        dispatch(newAction(newInfo.fileInfo));
    }
    

    useEffect(()=>{
            if(status === null) return;
            switch(status) {
                case "NEW_SUCCESS" :
                        alert("등록이 완료 되었습니다.");
                        window.$('.deleteImage').trigger("click");
                        dispatch(listAction());
                        break;

                default : break;
            }
            
            dispatch(initializeForm("status"));

    },[dispatch, status])

    return(<>
            <Row>
                <Col >
                    <ImageUploader onChange={onChange} />
                </Col>
            </Row>
            <Row style={{ textAlign : "right"}}>
                <Col>   
                    <Button variant="contained" color="primary" onClick={fileUpload}>
                        업로드
                    </Button>
                </Col>
            </Row>
    </>);

}
export default UploaderContainer;