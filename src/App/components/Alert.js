import React from 'react';
import { useSnackbar } from 'notistack';


const AlertComponent = () => {
 


    const { enqueueSnackbar } = useSnackbar();


    const handleClickVariant = () => () => {
        
        // variant could be success, error, warning, info, or default
        enqueueSnackbar('조회가 완료되었습니다.',
                    {
                        variant: 'info',
                        anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'right',
                        },
                        autoHideDuration : 1800
                        
                    }
                 
                 );
        
      };
    return (<>
        <button onClick={handleClickVariant('success')}>눌러봐</button>
    </>);
}
export default AlertComponent;