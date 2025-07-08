import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import TerminalIcon from '@mui/icons-material/Terminal';
import { Link as ScrollLink } from 'react-scroll';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';
import { styled } from '@mui/material/styles';

const email = 'borisry@icloud.com';
const githubUrl = 'https://github.com/notoriskin';
const linkedinUrl = 'https://www.linkedin.com/in/boris-ryavkin/';
const twitterUrl = 'https://x.com/notbor1ous';
const leetcodeUrl = 'https://leetcode.com/u/notoriskin/';

const AnimatedListItem = styled(ListItem)(({ theme }) => ({
  opacity: 0,
  transform: 'translateX(-20px)',
  animation: 'slideIn 0.5s ease-out forwards',
  '@keyframes slideIn': {
    '0%': { opacity: 0, transform: 'translateX(-20px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
  },
}));

function Sidebar({ open, onClose, isMobile, drawerWidth }) {
  const { language } = useLanguage();
  const t = translations[language];

  const sections = [
    { id: 'hero', text: t.nav.home || 'Home' },
    { id: 'resume', text: t.resume.title || 'Resume' },
    { id: 'contact', text: t.contact.title || 'Contact' },
  ];

  return (
    <Drawer
      anchor="left"
      variant={isMobile ? "temporary" : "permanent"}
      open={isMobile ? open : true}
      onClose={onClose}
      ModalProps={{
        keepMounted: true,
      }}
      PaperProps={{
        sx: { width: drawerWidth },
      }}
      sx={{
        display: { xs: 'block', sm: 'block' },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          background: 'linear-gradient(180deg, #333 0%, #111 100%)',
          color: '#fff',
          boxShadow: 3,
          display: 'flex',
          flexDirection: 'column',
          position: isMobile ? 'fixed' : 'static',
          height: isMobile ? '100%' : 'calc(100vh - 64px)',
          marginTop: isMobile ? 0 : '64px',
        },
      }}
    >
      <Box sx={{ flexGrow: 1, overflow: 'auto', mt: isMobile ? 8 : 2 }}>
        <List>
          {sections.map((section, index) => (
            <AnimatedListItem key={section.id} disablePadding sx={{ animationDelay: `${index * 0.1}s` }}>
              <ScrollLink
                to={section.id}
                smooth={true}
                duration={500}
                onClick={onClose}
                style={{ width: '100%', textDecoration: 'none' }}
              >
                <ListItemButton sx={{ 
                  py: 1.5,
                  px: 3,
                  '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' },
                }}>
                  <ListItemText primary={
                    <Typography variant="h5" fontWeight={700} color="inherit">
                      {section.text}
                    </Typography>
                  } />
                </ListItemButton>
              </ScrollLink>
            </AnimatedListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ p: 3, borderTop: '1px solid rgba(255, 255, 255, 0.1)', textAlign: 'center' }}>
        <Stack direction="row" spacing={2} justifyContent="center">
          <IconButton color="inherit" href={githubUrl} target="_blank" aria-label="GitHub" sx={{ '&:hover': { color: '#6ee7b7' } }}>
            <GitHubIcon />
          </IconButton>
          <IconButton color="inherit" href={leetcodeUrl} target="_blank" aria-label="LeetCode" sx={{ '&:hover': { color: '#6ee7b7' } }}>
            <TerminalIcon />
          </IconButton>
          <IconButton color="inherit" href={linkedinUrl} target="_blank" aria-label="LinkedIn" sx={{ '&:hover': { color: '#6ee7b6' } }}>
            <LinkedInIcon />
          </IconButton>
          <IconButton color="inherit" href={twitterUrl} target="_blank" aria-label="Twitter" sx={{ '&:hover': { color: '#6ee7b7' } }}>
            <TwitterIcon />
          </IconButton>
          <IconButton color="inherit" href={`mailto:${email}`} aria-label="Email" sx={{ '&:hover': { color: '#6ee7b7' } }}>
            <EmailIcon />
          </IconButton>
        </Stack>
      </Box>
    </Drawer>
  );
}

export default Sidebar; 