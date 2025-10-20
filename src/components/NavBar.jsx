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
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function NavBar({ links }) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  const [value, setValue] = useState();
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <AppBar
      sx={{
        backgroundImage:
          'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* --- Left Side Logo --- */}
        <Button
          sx={{ background: 'transparent', color: 'white', width: '250px' }}
          component={RouterLink}
          to="/"
        >
          <Typography>HARVEST-Vision 2026</Typography>
        </Button>

        {/* --- Desktop Layout --- */}
        {!isMatch ? (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Tabs
              value={value}
              onChange={(e, val) => setValue(val)}
              indicatorColor="secondary"
              textColor="inherit"
            >
              {links.map((link, index) => {
                if (link.label === 'Past Events') {
                  return (
                    <Tab
                      key={index}
                      label="Past Events ▾"
                      onClick={handleMenuOpen}
                    />
                  );
                }
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

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              PaperProps={{
                sx: { backgroundColor: 'rgba(255,255,255,0.95)', mt: 1 },
              }}
            >
              {[
                2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015,
              ].map((year) => (
                <MenuItem
                  key={year}
                  component={RouterLink}
                  to={`/past-events/${year}`}
                  onClick={handleMenuClose}
                >
                  ExaComm {year}
                </MenuItem>
              ))}
            </Menu>

            <Button
              sx={{ ml: 3, background: 'rgba(2,0,36,1)' }}
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
        ) : (
          /* --- Mobile Drawer Layout --- */
          <>
            <IconButton
              sx={{ color: 'white' }}
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={() => setDrawerOpen(false)}
              >
                <List>
                  {links.map((link, index) => (
                    <ListItemButton
                      key={index}
                      component={RouterLink}
                      to={link.path}
                    >
                      <ListItemText primary={link.label} />
                    </ListItemButton>
                  ))}
                  <ListItemButton
                    onClick={() =>
                      window.open(
                        'https://www.computer.org/csdl/proceedings/1000040',
                        '_blank'
                      )
                    }
                  >
                    <ListItemText primary="Apply" />
                  </ListItemButton>
                </List>
              </Box>
            </Drawer>
          </>
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
