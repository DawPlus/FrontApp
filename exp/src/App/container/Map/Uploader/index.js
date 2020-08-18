import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import Button from '@material-ui/core/Button';
import ImageUploader from "../../../components/imageUploader";
import {chageField, newAction, listAction, initializeForm} from "../../../../store/modules/map";
import {Row, Col} from 'react-bootstrap';
const UploaderContainer = () => {

    const dispatch = useDispatch();
    const {newInfo, status} = useSelector(state => state.map);
    
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


    // const imgCon ={
    //     cursor: "pointer",
    //     width: "100%",
    //     border: "1px #c4c4c4 solid",
    //     padding: "2px",
    //     borderRadius: "5px",
    //     maxWidth:"300px",
    //     margin:"0 auto"
    // }

    // const imgContainer = {
    //     width: "30%",
    //     margin: "5%",
    //     padding: "5px",
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     height: "inherit",
    //     boxShadow: "0 0 8px 2px rgba(0,0,0,.1)",
    //     border: "1px solid #d0dbe4",
    //     position:" relative",
    // }

    return(<>
            <Row>
                <Col >
                    <ImageUploader onChange={onChange} />
                </Col>
                {/* <Col md={6}>
                    <div style={imgCon}>
                        <img src={url} style={{width : "100%", height:"100%"}} alt="img"/>
                    </div>
                </Col> */}
            </Row>
            <Row style={{marginBottom : "15px", textAlign : "right"}}>
                <Col>   
                    <Button variant="contained" color="primary" onClick={fileUpload}>
                        업로드
                    </Button>
                </Col>
            </Row>
    </>);

}
export default UploaderContainer;