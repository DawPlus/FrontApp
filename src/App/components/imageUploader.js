import React, {useState, useCallback} from "react";


const ImageUploader = () => {

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
                buttonText='Choose images'
                onChange={onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />


</>);


}
export default ImageUploader