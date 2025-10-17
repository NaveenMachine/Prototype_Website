import {
  AppBar,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  Tabs,
  Tab,
  Box,
  Button,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function NavBar({ links }) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  const [value, setValue] = useState();

  return (
    <AppBar
      sx={{
        backgroundImage:
          'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
      }}
    >
      <Toolbar>
        <Button
          sx={{ background: 'transparent', color: 'white', width: '250px' }}
          component={RouterLink}
          to="/"
        >
          <Typography>HARVEST-Vision 2026</Typography>
        </Button>

        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <Tabs
            value={value}
            onChange={(e, val) => setValue(val)}
            indicatorColor="secondary"
            textColor="inherit"
          >
            {links.map((link, index) => (
              <Tab
                key={index}
                label={link.label}
                component={RouterLink}
                to={link.path}
              />
            ))}
          </Tabs>
          <Button
            sx={{ marginLeft: 5, background: 'rgba(2,0,36,1)' }}
            variant="contained"
            onClick={() => window.open("https://www.computer.org/csdl/proceedings/1000040", "_blank")}
          >
            Apply
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

NavBar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};
