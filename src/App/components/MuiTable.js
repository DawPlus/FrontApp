import React from "react";
 
import MUIDataTable from "mui-datatables";
 

const MuiTable = (props) => {
    const {columns , data} = props;
   
       
    const options = {

        print : false,
        download : false,
        filterType : "dropdown",
        selectableRows:"none",
        tableId : "ID",
        jumpToPage: true,
        rowsPerPage : 4
        //onRowClick : rowData => console.log(rowData)
    }



    return(<>
    
            
        <MUIDataTable
            title="API LIST"
            data={data}
            columns={columns}
            options ={options}
            
        />
    
    </>);

}
export default MuiTable;