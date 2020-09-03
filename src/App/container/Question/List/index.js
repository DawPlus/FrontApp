import React, {  useCallback }  from "react"
import {useLifecycles, useUpdateEffect} from 'react-use';
import {listAction
        , initialize
        , initializeForm
        , deleteAction} from "../../../../store/modules/map";
import { useSelector, useDispatch } from "react-redux";
import ImageList from "../../../components/ImageList";
import { useSnackbar } from "notistack";


const ListContainer = () => {
    
    // Dispatch
    const dispatch = useDispatch();
    const {fileList, status, message} = useSelector(state => state.map);
    const { enqueueSnackbar } = useSnackbar();
    
    
    const snackBar = useCallback( (text, variant='info') =>{
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
    },[enqueueSnackbar]);

    
    useUpdateEffect(() => {
        if(status === null ) return;
            switch(status){
                case "LIST_SUCCESS" : 
                        break;
                case "LIST_FAILURE" : 
                      snackBar(message);
                        break;
                case "DELETE_SUCCESS" : 
                    window.$('.close_1x3s325').trigger("click");
                    snackBar(message);
                    dispatch(listAction());
                    console.log("delete")
                    break;
                case "DELETE_FAILURE" : 
                    snackBar(message);
                    break;
                    
                default : break;
            }
    
        dispatch(initializeForm("status"));
        dispatch(initializeForm("message"));
    
        return () => { // *OPTIONAL*
          // do something on unmount
        }
      },[status]) // you can include deps array if necessary

      

    // Page Mount Event 
    useLifecycles(
        ()=>{
            dispatch(listAction());
        },
        () =>{
            dispatch(initialize());
            console.log("뒷정리");
        }
      );

     

      const onDelete = (info) =>{
          if(window.confirm("삭제 하시겠습니까?")){
              dispatch(deleteAction(info));
          }
      }
    
    return(<>
        
            <ImageList images={fileList} onDelete={onDelete}/>
            {/* <Gallery photos={fileList} onClick={onClicks} renderImage={rerender} />
            <Viewer activeIndex={imageIdx}
                noImgDetails={true}
                noNavbar={true}
                visible={visible}
                onClose={()=>{setVisible(false)} }
                images={fileList}
            /> */}
    </>);




}
export default ListContainer;