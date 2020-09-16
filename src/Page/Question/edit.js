import React from 'react'
import Title from "../../App/container/Question/Title";
import Edit from "../../App/container/Question/Edit";
import Buttons from "../../App/container/Question/Edit/Buttons";
const ViewPage = () => {

    return(<>
          <div className="animated animate__fadeInUp faster">
                <Title/>
           </div>
          <div className="animated animate__fadeInUp delay-1">
            <Buttons/>
            <Edit/>
          </div>
          
         
    </>);
}
export default ViewPage;