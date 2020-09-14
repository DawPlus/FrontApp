export default {

   
        body: {
          noMatch: "검색결과가 없습니다.",
          toolTip: "Sort",
          columnHeaderTooltip: column => `Sort for ${column.label}`
        },
        pagination: {
          next: "다음페이지",
          previous: "이전페이지",
          rowsPerPage: "표시:",
          displayRows: "/",
        },
        toolbar: {
          search: "Search",
          downloadCsv: "Download CSV",
          print: "Print",
          viewColumns: "View Columns",
          filterTable: "Filter Table",
        },
        filter: {
          all: "All",
          title: "필터",
          reset: "Reset",
        },
        viewColumns: {
          title: "Show Columns",
          titleAria: "Show/Hide Table Columns",
        },
        selectedRows: {
          text: "row(s) selected",
          delete: "Delete",
          deleteAria: "Delete Selected Rows",
        },
      
}