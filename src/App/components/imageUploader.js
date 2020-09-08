import React  from "react";
import ImageUploader from "react-images-upload"

const ImageUploaderComponent = (props) => {
    const {onChange} =  props;
return(<>

            <ImageUploader
                withIcon={true}
                buttonText='파일을 선택해 주십시오'
                onChange={onChange}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={10485760}
                singleImage={true}
                withPreview={true}
                fileContainerStyle={{
                    maxWidth: "600px",
                    margin:" 20px auto"}

                }
               
            />


</>);


}
export default ImageUploaderComponent