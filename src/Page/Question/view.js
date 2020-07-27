import React from "react";

const ViewPage = ({match}) => {
    const {id} = match.params;
    return(<>
            뷰 페이지 ! {id}
    </>);

}
export default ViewPage;