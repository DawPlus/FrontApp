import React, {  useCallback, useState }  from "react"
import {useLifecycles, useUpdateEffect} from 'react-use';
import {listAction, initialize, initializeForm, deleteAction} from "../../../../store/modules/guide";
import { useSelector, useDispatch } from "react-redux";
import ImageList from "../../../components/ImageList";
import { useSnackbar } from "notistack";
import Confirm from "../../../components/Confirm";

const ListContainer = () => {
    
    // Dispatch
    const dispatch = useDispatch();
    const {fileList, status, message} = useSelector(state => state.guide);
    const { enqueueSnackbar } = useSnackbar();
    const [deleteFile , setDeleteFile] = useState(null);
    const [isOpen, setIsOpen]   = useState(false);
    
    const snackBar = useCallback( (text, variant='info') =>{
      enqueueSnackbar(text,
            {
                variant  : variant,
                anchorOrigin: {
                    vertical: 'top',
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
                    setIsOpen(false); 
                    window.$('.close_1x3s325').trigger("click");
                    snackBar(message);
                    dispatch(listAction());
                
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

     

     
      const onDeleteHandler= (info) => {
        setDeleteFile(info);
        setIsOpen(true);
        }
        const onCancleHandler = ()=>{
            setIsOpen(false);
            setDeleteFile(null);
        }
        const onDelete = () =>{
            dispatch(deleteAction(deleteFile));
        }
    
        const onClose = ()=>{
            setDeleteFile(null);
        }
    
    
    return(<>
        
            <ImageList images={fileList} onDelete={onDeleteHandler} onClose={onClose}/>
            <Confirm 
                isOpen={isOpen}
                title="삭제"
                message = "삭제 하시겠습니까?"
                confirmBtn="삭제"
                onAccept = {onDelete}
                onCancle = {onCancleHandler}
            
            />
    </>);




}
export default ListContainer;