import * as React from 'react';
import Typography from '@mui/material/Typography';
import preval from 'preval.macro';

function Footer(props: any) {
  return (
    <>
      <Typography variant="body2" color="text.secondary" align="center" sx={{ pt: 4 }}>
        JST.Admin
        {preval`
        let dh=new Intl.DateTimeFormat('es-AR',{year:"numeric", month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).format(new Date());
        let d = dh.split("/");
        let yh = d[2].split(" ");
        let h = yh[1].split(":");
        module.exports = ' v'+yh[0].substring(0,4)+d[1]+d[0]+'.'+h[0]+h[1]
        `}
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center" sx={{ pt: 0 }}>
        API = <strong>{process.env.REACT_APP_API}</strong>
      </Typography>
    </>
  );
}

export default Footer;