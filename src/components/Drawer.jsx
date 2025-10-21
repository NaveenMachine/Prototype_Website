import { useState } from 'react';
import {
  Drawer,
  IconButton,
  Typography,
  Box,
  List,
  ListItemButton,
  ListItemText,
  Button,
  Collapse,
} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom'; // ✅ Works with HashRouter

export default function DrawerComp({ links }) {
  const [open, setOpen] = useState(false);
  const [openPastEvents, setOpenPastEvents] = useState(false); // ✅ Dropdown state

  // Smoothly close Drawer after navigation
  const handleCloseAfterNav = () => {
    setTimeout(() => setOpen(false), 200);
  };

  return (
    <>
      {/* Drawer Panel */}
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(9,9,121,1)',
            zIndex: 1301, // ensure above AppBar
          },
        }}
        anchor="top"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 2,
          }}
        >
          <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
            Harvest 2026
          </Typography>

          <List>
            {/* Internal Route Links */}
            {links.map((link, index) => {
              if (link.label === 'Past Events') {
                return (
                  <Box key={index}>
                    <ListItemButton onClick={() => setOpenPastEvents(!openPastEvents)}>
                      <ListItemText
                        sx={{ color: 'white', textAlign: 'center' }}
                        primary="Past Events"
                      />
                      {openPastEvents ? (
                        <ExpandLess sx={{ color: 'white' }} />
                      ) : (
                        <ExpandMore sx={{ color: 'white' }} />
                      )}
                    </ListItemButton>

                    {/* Dropdown for past Harvest events */}
                    <Collapse in={openPastEvents} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItemButton
                          sx={{ pl: 4 }}
                          component={RouterLink}
                          to="/past-events/2025"
                          onClick={handleCloseAfterNav}
                        >
                          <ListItemText
                            primary="Harvest 2025"
                            sx={{ color: 'white', textAlign: 'center' }}
                          />
                        </ListItemButton>

                        {/* Add more years here as needed */}
                        {/* 
                        <ListItemButton
                          sx={{ pl: 4 }}
                          component={RouterLink}
                          to="/past-events/2024"
                          onClick={handleCloseAfterNav}
                        >
                          <ListItemText
                            primary="Harvest 2024"
                            sx={{ color: 'white', textAlign: 'center' }}
                          />
                        </ListItemButton>
                        */}
                      </List>
                    </Collapse>
                  </Box>
                );
              }

              // Normal links
              return (
                <ListItemButton
                  key={index}
                  component={RouterLink}
                  to={link.path}
                  onClick={handleCloseAfterNav}
                >
                  <ListItemText
                    sx={{ color: 'white', textAlign: 'center' }}
                    primary={link.label}
                  />
                </ListItemButton>
              );
            })}

            {/* External Submit button */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <Button
                onClick={() => {
                  window.open(
                    'https://www.computer.org/csdl/proceedings/1000040',
                    '_blank'
                  );
                  setOpen(false);
                }}
                sx={{
                  background: 'white',
                  color: 'black',
                  '&:hover': {
                    background: 'rgba(2,0,36,0.8)',
                    color: 'white',
                  },
                }}
                variant="contained"
              >
                Submit
              </Button>
            </Box>
          </List>
        </Box>
      </Drawer>

      {/* Menu Icon Button */}
      <IconButton
        onClick={() => setOpen(!open)}
        sx={{
          marginLeft: 'auto',
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.2)' },
        }}
      >
        <MenuRoundedIcon />
      </IconButton>
    </>
  );
}

DrawerComp.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};
