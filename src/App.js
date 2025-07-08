import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import TerminalIcon from '@mui/icons-material/Terminal';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import InstagramIcon from '@mui/icons-material/Instagram';
import Fade from '@mui/material/Fade';
import Grow from '@mui/material/Grow';
import Slide from '@mui/material/Slide';
import Zoom from '@mui/material/Zoom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Sidebar';
import backgroundImage from './assets/blue_background.gif';

const email = 'borisry@icloud.com';
const githubUrl = 'https://github.com/notoriskin';
const linkedinUrl = 'https://www.linkedin.com/in/boris-ryavkin/';
const twitterUrl = 'https://x.com/notbor1ous';
const leetcodeUrl = 'https://leetcode.com/u/notoriskin/';

const drawerWidth = 280;

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [displayedRole, setDisplayedRole] = useState('');
  const fullRole = t.hero.animatedRole;

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullRole.length) {
        setDisplayedRole(fullRole.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 70);

    return () => clearInterval(typingInterval);
  }, [language, fullRole]);

  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
    } else {
      // On desktop, sidebar is permanent, state doesn't control visibility
    }
  }, [isMobile]);

  const handleDrawerToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Function to render text with highlights
  const renderDescriptionSuffix = (text) => {
    const parts = text.split(/(passion|technology|aid your company|smiles|технологий|помочь вашей компании|улыбки)/g);
    return parts.map((part, index) => {
      // Highlight English words
      if (['passion', 'technology', 'aid your company', 'smiles'].includes(part)) {
        return <Box component="span" key={index} sx={{ backgroundColor: 'rgba(202, 255, 191, 0.5)' }}>{part}</Box>;
      }
      // Highlight Russian words
      if (['технологий', 'помочь вашей компании', 'улыбки'].includes(part)) {
         return <Box component="span" key={index} sx={{ backgroundColor: 'rgba(202, 255, 191, 0.5)' }}>{part}</Box>;
      }
      return part;
    });
  };

  return (
    <Box sx={{ display: 'flex', position: 'relative', minHeight: '100vh' }}>
      <Box 
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          minHeight: '100vh',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          zIndex: -1,
          filter: 'blur(10px)',
        }}
      >
        <style>
            {`
            `}
         </style>
      </Box>

      <AppBar 
        position="fixed" 
        sx={{
          bgcolor: 'rgba(255, 255, 255, 0.1)',
          color: '#fff',
          boxShadow: 1,
          zIndex: theme.zIndex.drawer + 1,
          width: isMobile ? '100%' : `calc(100% - ${drawerWidth}px)`,
          ml: isMobile ? 0 : `${drawerWidth}px`,
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Toolbar>
           {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, ...(sidebarOpen && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography 
            variant={isMobile ? "subtitle1" : "h6"} 
            sx={{ 
              flexGrow: 1, 
              fontWeight: 800,
              fontSize: isMobile ? '1rem' : '1.25rem',
              color: 'inherit'
            }}
          >
            {t.nav.title}
          </Typography>
          <IconButton
            color="inherit"
            onClick={toggleLanguage}
            size={isMobile ? "small" : "medium"}
            sx={{
              transition: 'transform 0.2s, color 0.2s',
              '&:hover': { transform: 'scale(1.2)', color: '#6ee7b7' }
            }}
          >
            <LanguageIcon fontSize={isMobile ? "small" : "medium"} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Sidebar open={sidebarOpen} onClose={handleDrawerToggle} isMobile={isMobile} drawerWidth={drawerWidth} />

      <Box 
        component="main"
        sx={{
          flexGrow: 1,
          ml: isMobile ? 0 : `${drawerWidth}px`,
          mt: { xs: '56px', sm: '64px' },
          transition: theme.transitions.create(['margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          p: 3,
          color: '#111',
        }}
      >
        <Grow in={true} timeout={1000}>
          <Container id="hero" maxWidth="md" sx={{ mb: isMobile ? 2 : 4, px: isMobile ? 0 : 3 }}>
            <Paper elevation={3} sx={{ p: isMobile ? 2 : 4, borderRadius: 4, bgcolor: 'rgba(255, 255, 255, 0.95)' }}>
              <Typography 
                variant={isMobile ? "subtitle1" : "h6"} 
                color="text.secondary" 
                gutterBottom 
                align="left"
              >
                {t.hero.greeting}
              </Typography>
              <Typography 
                variant={isMobile ? "h5" : "h4"} 
                fontWeight={800} 
                gutterBottom 
                align="left"
              >
                {t.hero.name}
              </Typography>
              {/* Main Description with Typing Animation and Highlights */}
              <Typography 
                variant={isMobile ? "body1" : "h6"} 
                color="text.secondary" 
                gutterBottom 
                align="left"
                sx={{ fontSize: isMobile ? '0.9rem' : '1.25rem' }}
              >
                {t.hero.descriptionStatic}
                <Box component="span" sx={{ color: 'primary.main' }}>
                   {displayedRole}
                </Box>
                {renderDescriptionSuffix(t.hero.descriptionSuffix)}
              </Typography>
              
              {/* "Seeking a new role" phrase with dashed border */}
              <Typography
                variant={isMobile ? "body1" : "h6"} 
                color="text.secondary" 
                align="left"
                sx={{
                  fontSize: isMobile ? '0.9rem' : '1.25rem',
                  borderBottom: '1px dashed #a0a0a0',
                  paddingBottom: '2px',
                  display: 'inline-block', // Use inline-block to make border wrap content
                  mt: isMobile ? 1 : 2, // Add some margin top
                }}
              >
                {t.hero.seekingRole}
              </Typography>

              <Button
                variant="contained"
                color="success"
                size={isMobile ? "medium" : "large"}
                href={`mailto:${email}`}
                sx={{
                  borderRadius: 8,
                  fontWeight: 700,
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'scale(1.07)', boxShadow: 6 },
                  width: isMobile ? '100%' : 'auto'
                }}
              >
                {t.hero.emailButton}
              </Button>
            </Paper>
          </Container>
        </Grow>

        <Fade in={true} timeout={1200}>
          <Container id="resume" maxWidth="md" sx={{ mb: isMobile ? 2 : 4, px: isMobile ? 0 : 3 }}>
            <Typography 
              variant={isMobile ? "h6" : "h5"} 
              fontWeight={800} 
              align="center" 
              gutterBottom
              color="#fff"
            >
              {t.resume.title}
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              flexDirection: 'column',
              position: 'relative',
              width: '100%',
              height: isMobile ? 'calc(100vh - 300px)' : '900px',
              overflow: 'hidden',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <iframe
                src="/resume_full 2024.pdf#view=FitH"
                width="100%"
                height="100%"
                style={{ 
                  border: 'none', 
                  borderRadius: '8px',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  transform: isMobile ? 'scale(0.9)' : 'none',
                  transformOrigin: 'top left'
                }}
                title="Resume PDF"
              />
            </Box>
          </Container>
        </Fade>

        <Zoom in={true} timeout={1600}>
          <Container id="contact" maxWidth="md" sx={{ mb: isMobile ? 4 : 6, px: isMobile ? 0 : 3 }}>
            <Paper elevation={1} sx={{ p: isMobile ? 2 : 3, borderRadius: 3, textAlign: 'center', bgcolor: 'rgba(255, 255, 255, 0.95)' }}>
              <Typography 
                variant={isMobile ? "subtitle1" : "h6"} 
                fontWeight={700} 
                gutterBottom
                color="#111"
              >
                {t.contact.title}
              </Typography>
              <Button
                variant="contained"
                color="success"
                size={isMobile ? "medium" : "large"}
                href={`mailto:${email}`}
                sx={{
                  borderRadius: 8,
                  fontWeight: 700,
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'scale(1.07)', boxShadow: 6 },
                  width: isMobile ? '100%' : 'auto'
                }}
              >
                {t.contact.emailButton}
              </Button>
            </Paper>
          </Container>
        </Zoom>
      </Box>
    </Box>
  );
}

export default App;
