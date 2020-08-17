import React from 'react'
import { useHistory } from 'react-router-dom';



const TitleContainer = () => {
    const history = useHistory();
    
    const onClick = () => {
        history.push(`/init/new`);
    }

    return(<>
    
         <div className="app-page-title">
            <div className="page-title-wrapper">
                <div className="page-title-heading">
                    <div className="page-title-icon">
                        <i className="pe-7s-car icon-gradient bg-mean-fruit">
                        </i>
                    </div>
                    <div>지도 관리 
                        <div className="page-title-subheading">지도 목록을 조회하고 관리합니다. 
                        </div>
                    </div>
                </div>
            </div>
        </div>


    
    </>);



}
export default TitleContainer;