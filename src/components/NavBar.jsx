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
  Menu,
  MenuItem,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import DrawerComp from './Drawer.jsx'; // ✅ Make sure the path is correct

export default function NavBar({ links }) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  const [value, setValue] = useState();

  // --- Dropdown state for "Past Events" ---
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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

        {isMatch ? (
          // ✅ Drawer on small screens
          <DrawerComp links={links.map((l) => l.label)} />
        ) : (
          // ✅ Tabs on larger screens
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <Tabs
              value={value}
              onChange={(e, val) => setValue(val)}
              indicatorColor="secondary"
              textColor="inherit"
            >
              {links.map((link, index) => {
                // Handle "Past Events" as a dropdown
                if (link.label === 'Past Events') {
                  return (
                    <Tab
                      key={index}
                      label="Past Events ▾"
                      onClick={handleMenuOpen}
                    />
                  );
                }

                // Normal tabs
                return (
                  <Tab
                    key={index}
                    label={link.label}
                    component={RouterLink}
                    to={link.path}
                  />
                );
              })}
            </Tabs>

            {/* --- Dropdown Menu for Past Events --- */}
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              MenuListProps={{ onMouseLeave: handleMenuClose }}
              PaperProps={{
                sx: { backgroundColor: 'rgba(255,255,255,0.95)', mt: 1 },
              }}
            >
              <MenuItem component={RouterLink} to="/past-events/2025" onClick={handleMenuClose}>
                Harvest 2025
              </MenuItem>
            </Menu>

            <Button
              sx={{ marginLeft: 5, background: 'rgba(2,0,36,1)' }}
              variant="contained"
              onClick={() =>
                window.open(
                  'https://www.computer.org/csdl/proceedings/1000040',
                  '_blank'
                )
              }
            >
              Apply
            </Button>
          </Box>
        )}
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
