import React ,{useState, useCallback } from "react"
import Gallery from "react-photo-gallery";
import Viewer from "react-viewer";
import {useLifecycles} from 'react-use';
import {listAction} from "../../../modules/map";
import { useSelector, useDispatch } from "react-redux";


import RenderComponent from "../../../components/ImageRender";

const ListContainer = () => {
    // Dispatch
    const dispatch = useDispatch();
    // 뷰어 
    const [visible , setVisible] = useState(false);
    // 현재 선택 이미지 번호 
    const [imageIdx, setImageIdx] = useState(0);
    // 뷰어 파일 목록 
    const {fileList} = useSelector(state => state.map);

    // 버튼 추가 Image Render
    const imageRenderer = useCallback(
        ({ index, left, top, key, photo , onClick}) => (
          <RenderComponent
            key={key}
            margin={"2px"}
            index={index}
            photo={photo}
            left={left}
            top={top}
            onClick={onClick}
          />
        )
      ,[]);

    // 이미지 클릭 이벤트 
    const onClicks= useCallback((event, {photo, index} ) => {
        setVisible(true);
        setImageIdx(index);
    },[]);

    

    // Page Mount Event 
    useLifecycles(
        ()=>{
            dispatch(listAction());
        },
        () =>{
            console.log("뒷정리");
        }
      );
    
    return(<>

            <Gallery photos={fileList} onClick={onClicks} renderImage={imageRenderer} />
            <Viewer activeIndex={imageIdx}
                noImgDetails={true}
                noNavbar={true}
                visible={visible}
                onClose={()=>{setVisible(false)} }
                images={fileList}
            />
    </>);




}
export default ListContainer;