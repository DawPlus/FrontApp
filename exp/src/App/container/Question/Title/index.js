import React from 'react'
import { useHistory } from 'react-router-dom';

const TitleContainer = () => {
    const history = useHistory();
    
    const onClick = () => {
        history.push(`/question/new`);
    }
    
    return(<>
         <div className="app-page-title">
            <div className="page-title-wrapper">
                <div className="page-title-heading">
                    <div className="page-title-icon">
                        <i className="pe-7s-car icon-gradient bg-mean-fruit">
                        </i>
                    </div>
                    <div>문제관리 
                        <div className="page-title-subheading">문제목록을 조회하고 관리합니다. 
                        </div>
                    </div>
                </div>
                <div className="page-title-actions">       
                    <button type="button" className="btn-shadow btn btn-info" onClick={onClick}>
                        <span className="btn-icon-wrapper pr-2 opacity-7">
                            <i className="fa fa-business-time fa-w-20"></i>
                        </span>
                        신규등록
                    </button>
                </div>    
            </div>
        </div>
    </>);
}
export default TitleContainer;