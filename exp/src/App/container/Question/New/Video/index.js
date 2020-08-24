import React, { useEffect, useState } from 'react'
import {listAction} from "../../../../../store/modules/video";
import {Row, Col} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Player, BigPlayButton  } from 'video-react';
import config from "../../../../../config";
const VideoContainer = () => {

    const dispatch = useDispatch();
    const {fileList} = useSelector(state => state.video);
    const [play , setPlay] = useState(null)
    

    useEffect(()=>{
        
        dispatch(listAction());

    },[dispatch])

    const onChange = e => {
        setPlay(config.baseURL+"/static/video/"+e.target.value);
    }

    return(<>
        <Row>
            <Col>   
                <div class="position-relative form-group">
                    <select name="select" id="exampleSelect" class="form-control"
                            onChange={onChange}
                    >
                        <option>선택</option>
                        {fileList.map(item=><option>{item}</option>)}
                    </select>
                </div> 
            </Col>
        </Row>
        <Row>
            <Col>
            <Player src={play}>
                <BigPlayButton position="center" />
                </Player>
            </Col>
        </Row>
    
    
    
    
    </>);
}
export default VideoContainer