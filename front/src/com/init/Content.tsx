import React from 'react';
import Box from '@mui/material/Box';
import Footer from './Footer';

interface ContentProps {
  mobileBreakPoint: boolean;
  drawerWidth: number;
  children?: React.ReactNode;
}

function Content(props: ContentProps) {
  return (
    <Box 
      sx={{
        ml: `${!props.mobileBreakPoint?props.drawerWidth:0}px`, width: { sm: `calc(100% - ${props.drawerWidth}px)` },
        mt: 10, mb: 4
      }}
    >
      <Box sx={{px: 3}}>{props.children}</Box>
      <Footer />
    </Box>
  );
}

export default Content;