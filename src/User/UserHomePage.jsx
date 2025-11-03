import React from 'react';
import { Box, Container, Typography, Button, Card, CardContent, Grid } from '@mui/material';
import UserHeader from '../components/UserHeader';
import BookListing from '../components/BookListing';
import UserFooter from '../components/UserFooter';

const Stat = ({ label, value }) => (
  <Box
    sx={{
      minWidth: 86,
      bgcolor: 'background.paper',
      borderRadius: 2,
      p: 1.5,
      boxShadow: 1,
      textAlign: 'center',
    }}
  >
    <Typography variant="h6" sx={{ fontWeight: 700 }}>
      {value}
    </Typography>
    <Typography variant="caption" color="text.secondary">
      {label}
    </Typography>
  </Box>
);

export default function UserHomePage() {

  return (

  <>
      <UserHeader/>  

        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
          {/* Welcome Section */}
          <Box
            sx={{
              bgcolor:" #ead0d088"
,
              py: { xs: 6, md: 12 },
              textAlign: 'center',
            }}
          >
            <Container maxWidth="md">
              {/* <Box
                sx={{
                  width: 120,
                  height: 120,
                  mx: 'auto',
                  mb: 3,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle at 30% 30%, rgba(2,136,209,0.15), rgba(63,81,181,0.08))',
                  boxShadow: 3,
                }}
              />
     */}
              <Typography variant="h2" component="h1" sx={{ fontWeight: 800, mb: 2 }}>
                Welcome to Library Hub
              </Typography>
    
              <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                A compact, elegant library management system made for small libraries — simple, beautiful, and easy to use.
              </Typography>
    
              
            </Container>
          </Box>
    
          {/* About Section */}
         <Container id="about-section" maxWidth="md" sx={{ mt: -6, bgcolor: '#c96565ff', py: 6, borderRadius: 3 }}>
      <Card elevation={6} sx={{ borderRadius: 3, overflow: 'visible', bgcolor: 'white' }}>
              <CardContent>
                <Grid container spacing={3} alignItems="center">
                  <Grid item xs={12} md={6}>
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                      About Library Hub
                    </Typography>
    
                    <Typography variant="body1" color="text.secondary" paragraph>
                      Library Hub is built for small collections and local libraries. It focuses on core tasks — cataloging, lending,
                      and quick lookups — while keeping the interface clean and pleasant for users and staff.
                    </Typography>
    
                    <Typography variant="body2" color="text.secondary">
                      Designed with clarity in mind: large readable type, minimal screens, and a calm color palette that reduces visual noise.
                    </Typography>
                  </Grid>
    
                  <Grid item xs={12} md={6}>
                    <Box sx={{ p: 2 }}>
                      <Box sx={{ mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
                        <Stat label="Books" value="3,120" />
                        <Stat label="Members" value="412" />
                        <Stat label="Loans" value="88" />
                      </Box>
    
                      <Box sx={{ mt: 2, textAlign: 'center' }}>
                       
                        
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Container>
        </Box>
        <BookListing/>
        <UserFooter/>
  </>
  );
}
