
  
  export default 
    [
        {
            name: "method",
            label: "Method",
            options: {
                filter: true,
                sort: true,
                customBodyRenderLite: (dataIndex) => {
                    let val =dataIndex;
                    return val;
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

  