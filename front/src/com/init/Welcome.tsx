import * as React from 'react';
import Typography from '@mui/material/Typography';

function Welcome(props: any) {
  return (
    <Typography variant="h4" color="text.principal" align="center" sx={{pt:7, pb:7}}>
      Bienvenidos a SP
    </Typography>
  );
}

export default Welcome;