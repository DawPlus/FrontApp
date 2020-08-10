import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import ImageUploader from "../../../components/imageUploader";
import {chageField, newAction, listAction, initializeForm} from "../../../modules/map";
import Button from '@material-ui/core/Button';
import {Row, Col} from 'react-bootstrap';
import { useEffectOnce , useUpdateEffect} from "react-use";
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

    useEffectOnce(() => {
        console.log('Running effect once on mount')
        const imgURL = 'https://img.hankyung.com/photo/201911/03.20725204.1.jpg';

        setUrl(imgURL);
        return () => {
          console.log('Running clean-up of effect on unmount')
        }
    });
    const imgCon ={
        cursor: "pointer",
        width: "100%",
        border: "1px #c4c4c4 solid",
        padding: "2px",
        borderRadius: "5px",
        maxWidth:"300px",
        margin:"0 auto"
    }

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
 useUpdateEffect(() => {
    console.log("update!!!!") // will only show 1 and beyond
    
    return () => { // *OPTIONAL*
      // do something on unmount
    }
  }) // you can include deps array if necessary

    return(<>
    
                <Row>
                    <Col md={6}>
                        <ImageUploader onChange={onChange} />
                    </Col>
                    <Col md={6}>
                        <div style={imgCon}>
                          <img src={url} style={{width : "100%", height:"100%"}} alt="img"/>
                        </div>
                    </Col>
                </Row>
                <Row style={{marginTop : "10px", textAlign : "right"}}>
                    <Col>   
                        <Button variant="contained" color="primary" onClick={fileUpload}>
                            업로드
                        </Button>
                    </Col>
                </Row>
    </>);

}
export default UploaderContainer