import React from "react";

import config from "../../../../../config";
import { Player, BigPlayButton  } from 'video-react';
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";
const VideoContainer = () => {
    const {video} = useSelector(s => s.question.view);
    return(<>
      <Card>
            <Card.Body className="questionViewer">
                <h5 class="card-title">Video</h5>
                    <Player src={config.baseURL+ video}>
                    <BigPlayButton position="center" />
            </Player>
            </Card.Body>
        </Card>
               
    </>);
}
export default VideoContainer;