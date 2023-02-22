import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Outlet } from "react-router-dom";
import Header from './com/init/Header';
import Menu from './com/init/Menu';
import Content from './com/init/Content';
import './App.css';

const queryClient = new QueryClient();

const drawerWidth = 240;

function App() {
  const theme = useTheme();
  const mobileBreakPoint = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = React.useState(true);
  const handleToggleDrawer = (e: React.MouseEvent<HTMLElement>): void => {
      setOpen(!open);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header handleMenuClick={handleToggleDrawer} drawerWidth={drawerWidth} mobileBreakPoint={mobileBreakPoint} />
        <Menu handleMenuClick={handleToggleDrawer} drawerWidth={drawerWidth} mobileBreakPoint={mobileBreakPoint} open={open} />
        <Content drawerWidth={drawerWidth} mobileBreakPoint={mobileBreakPoint}>
          <Outlet />
        </Content>
      </div>
    </QueryClientProvider>
  );
}

export default App;
