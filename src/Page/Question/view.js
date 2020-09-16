import React from 'react'
import Title from "../../App/container/Question/Title";
import View from "../../App/container/Question/View";

const ViewPage = () => {

    return(<>
            <div div className="animated animate__fadeInUp faster">
                <Title/>
            </div>
            <div className="animated animate__fadeInUp delay-1">
                <View/>
            </div>
         
            
    </>);
}
export default ViewPage;