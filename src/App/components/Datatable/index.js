import React  from "react";
import MUIDataTable from "mui-datatables";
import textLabels from "./localize";
    
  
const MuiTable = (props) => {
    const {columns , data, title , rowNum = true} = props;

    if(rowNum){
        columns.unshift(  {
            name: " ",
            label: "No",
            options: {
                customBodyRenderLite: (dataIndex) => {
                    return <div>{dataIndex + 1}</div>
            },
            filter : false,
            sort : false
            
            }
        });
    }

    const options = {
        print : false,
        download : false,
        filterType : "dropdown",
        selectableRows:"none",
        tableId : "ID",
        //jumpToPage: true,
        rowsPerPage : 10,
        responsive: 'vertical',
        textLabels : textLabels,
        elevation : 0,
        tableBodyMaxHeight: "500px",
        rowsPerPageOptions : [10, 20 , 50],
        filter : false, 
        viewColumns : false
        //onRowClick : rowData => console.log(rowData)
    }
    return(<>       
        <MUIDataTable
            title={title}
            data={data}
            columns={columns}
            options ={options}
            filter={false}
            viewColumns={false}
            
        />
    
    </>);

}
export default MuiTable;