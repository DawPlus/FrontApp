import React, { useCallback, useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import ImageUploader from "../../../components/imageUploader";
import {chageField, newAction, listAction, initializeForm} from "../../../modules/map";
import Button from '@material-ui/core/Button';
import {Row, Col} from 'react-bootstrap';
const UploaderContainer = () => {

    const dispatch = useDispatch();
    const {newInfo, status} = useSelector(state => state.map);
    const [url , setUrl] = useState(null)
      
   
    const onChange = (pictureFiles, url ) =>{
        dispatch(chageField({
            form : "newInfo",
            key : "fileInfo",
            value :pictureFiles[0]
        }));

        setUrl(url);
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
                             setUrl(null)
                             dispatch(listAction());
                             break;

                default : break;
            }
            
            dispatch(initializeForm("status"));

    },[dispatch, status])



    const imgContainer = {
        width: "30%",
        margin: "5%",
        padding: "5px",
        display: "-ms-flexbox",
        display: "flex",
        
        alignItems: "center",
        
        justifyContent: "center",
        height: "inherit",
        boxShadow: "0 0 8px 2px rgba(0,0,0,.1)",
        border: "1px solid #d0dbe4",
        position:" relative",
    }

    return(<>
    
                <Row>
                    <Col md={8}>
                        <ImageUploader onChange={onChange} />
                    </Col>
                    <Col md={4}>
                        <div style={imgContainer}>
                        <img src={url} style={{width : "100%"}}/>
                        </div>
                        <Button variant="contained" color="primary" onClick={fileUpload}>
                            업로드
                        </Button>
                    </Col>
                </Row>
    </>);

}
export default UploaderContainer