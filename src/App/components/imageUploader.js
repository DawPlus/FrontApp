import React, {useState, useCallback} from "react";
import ImageUploader from "react-images-upload"

const ImageUploaderComponent = () => {

    const [pictures, setPicktures] = useState([]);
    
    const onDrop = () => {
        
    }
    // const onDrop = useCallback((event, { pictureFiles, pictureDataURLs }) => {
    //     console.log(pictureDataURLs);
    //         setPicktures(pictureFiles);
    //    }, []);




return(<>

            <ImageUploader
                withIcon={true}
                buttonText='파일을 선택해 주십시오'
                onChange={onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />


</>);


}
export default ImageUploaderComponent