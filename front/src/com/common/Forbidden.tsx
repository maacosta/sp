import * as React from 'react';
import Typography from '@mui/material/Typography';

interface ForbiddenProps {
}

function Forbidden(props: ForbiddenProps) {
  return (
    <Typography variant="h4" color="text.principal" align="center" sx={{pt:7, pb:7}}>
      Acceso Denegado
    </Typography>
  );
}

export default Forbidden;