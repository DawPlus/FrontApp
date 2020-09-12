
  import { Link } from "react-router-dom";
  export default 
    [
        {
            name: " ",
            label: "NO",
            options: {
                customBodyRenderLite: (dataIndex) => {
                    return dataIndex + 1;
               }
            }
        },
        {
            name :"apiId",
            label : "apiId",
            options : {
                display:false

            }

        },
        {
            name: "method",
            label: "Method",
            options: {
                filter: true,
                sort: true,
                customBodyRender : (value, tableMeta, updateValue)=>{
                    console.log()
                    return <Link>{value}</Link>
                }
            
            }
        },
        {
            name: "name",
            label: "Name",
            options: {
                filter: false,
                sort: true,
            }
        },
        {
            name: "url",
            label: "URL",
            options: {
                filter: false,
                sort: true,
            }
        },
        {
            name: "description",
            label: "DESCRIPTION",
            options: {
                filter: false,
                sort: true,
            }
        },
    ]

  