import {createTheme, MantineProvider} from '@mantine/core';
import "@mantine/core/styles.css";
import {MantineTheme} from '@/theme/themeProvider.js';
import Home from '@/pages/home/Home.jsx';
import AppRoutes from '@/AppRoutes.jsx';


function App() {
  const theme = createTheme({});

  return (
    <MantineProvider theme={theme}>
      <AppRoutes/>
    </MantineProvider>
  )
}

export default App
