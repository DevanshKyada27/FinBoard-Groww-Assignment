import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme, ThemeProvider } from '@mui/material';
import Grid from '../Grid';
import "./styles.css"
import List from '../List';

export default function TabsComponent( {coins} ) {
  const [value, setValue] = useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
        primary: {
            main: "#08f1b9"
        }
    }
  })

  const style = {
    color: "var(--white)",
    fontSize: "1.2rem",
    fontFamily: "Inter",
    textTransform: "capitalize",
  };

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
          <TabList onChange={handleChange} variant='fullWidth'>
            <Tab label="Grid View" value="grid" sx={style} />
            <Tab label="List View" value="list" sx={style} />
          </TabList>
            <TabPanel value="grid">
                <div className='grid-flex'>
                    {coins.map((coin, i) => {
                        return <Grid coin={coin} key={i} />
                    })}
                </div>
            </TabPanel>
            <TabPanel value="list">
                <table className='list-table'>
                    {coins.map((item, i) => {
                        return (
                            <List coin={item} key={i} />
                        )
                    })}
                </table>
            </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}