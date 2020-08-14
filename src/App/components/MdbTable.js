import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
const MuTableComponent = (props) => {
    const {columns, rows=[] , rowNum } =  props;

    const datas = rowNum === true ? {
        columns : [
            {
              label: 'No',
              field: 'num',
              width: 50,
          },
        ...columns
        ],
        rows : [
          ...rows.map((row, order) => ({
            ...row,
            num: order+1
          })),
        ]
      } :{columns , rows}
    
 
      return      <MDBDataTableV5
                          className="mbdTable"   
                          scrollX
                          searchTop 
                          searchBottom={false} 
                          responsiveMd={true}
                          hover
                          fixed
                          fullPagination
                          noRecordsFoundLabel="조회결과가 없습니다." 
                          // info={false}
                          entriesOptions={[ 50, 100, 150 ]}
                          infoLabel={["", "-", "/", "Total"]}
                          entriesLabel="Page" 
                          entries={5}// 보여줄 게시글 수
                          pagesAmount={5} // 페이징 수 
                          data={datas}
                        />

}
export default MuTableComponent;