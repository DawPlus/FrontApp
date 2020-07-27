import React from "react"
import { withRouter , Link} from 'react-router-dom';
import Table from "../../../components/Table"
const ListContainer = ({match}) => { 


    const columns = [
        { title: "제목" , field: "title",
            render: rowData => <Link to={`${match.path}/1`}>{rowData.title}</Link>
        },
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
export default withRouter(ListContainer);