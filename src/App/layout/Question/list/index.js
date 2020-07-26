import React from "react"

import Table from "../../../components/Table"
const ListContainer = () => { 


    const columns = [
        { title: "제목" , field: "title"},
        { title: "내용" , field: "content"},
        { title: "타입" , field: "type"},
        { title: "작성자", field: "saveuser"},
        ];

    const data = [
        {title : "Hello World" , content : "Hello World Hello World Hello World Hello World " , type : true, saveuser : "admin"}
    ]

    return(<>
        <Table
            columns={columns}
            data={data}
        />
    </>); 


}
export default ListContainer;