import React, {useState, useCallback} from "react";
import ImageUploader from "react-images-upload"

const ImageUploaderComponent = (props) => {

    const {onChange} =  props;
    
    
   
    // const onDrop = useCallback( (e) => {
    //     console.log(e[0]);
    //         //setPicktures(pictureFiles);
    //    }, []);


return(<>

            <ImageUploader
                withIcon={true}
                buttonText='파일을 선택해 주십시오'
                onChange={onChange}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                singleImage={true}
                fileContainerStyle={{
                    maxWidth: "500px",
                    margin:" 20px auto"}

                }
               
            />


</>);


}
export default ImageUploaderComponent