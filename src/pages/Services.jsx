import { Container, Typography, Card, CardContent, Grid, Box, Divider } from '@mui/material'
import PageHeader from '../components/PageHeader'

function Services() {
  const breadcrumbs = [
    { label: 'MUI Layout', href: '/' },
    { label: 'Services' }
  ]

  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern frameworks like React, Vue, and Angular. We focus on performance, accessibility, and user experience to deliver solutions that meet your business needs."
    },
    {
      title: "Mobile Development", 
      description: "Native and cross-platform mobile applications for iOS and Android. Using React Native, Flutter, and native development tools to create engaging mobile experiences."
    },
    {
      title: "UI/UX Design",
      description: "User-centered design processes that create intuitive and beautiful interfaces. From wireframes to high-fidelity prototypes, we ensure your users have the best possible experience."
    },
    {
      title: "Cloud Services",
      description: "Scalable cloud infrastructure solutions using AWS, Azure, and Google Cloud Platform. Migration, optimization, and maintenance of cloud-based systems."
    },
    {
      title: "Database Design",
      description: "Efficient database architecture and optimization for both SQL and NoSQL databases. Performance tuning, migration, and data modeling services."
    },
    {
      title: "API Development",
      description: "RESTful and GraphQL API development with proper documentation, authentication, and rate limiting. Integration with third-party services and microservices architecture."
    }
  ]

  return (
    <>
      <PageHeader breadcrumbs={breadcrumbs} title="Services" />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        
        <Typography variant="h5" gutterBottom>
          Our Complete Service Offerings
        </Typography>
        
        <Typography variant="body1" paragraph sx={{ mb: 4 }}>
          We provide comprehensive technology solutions to help your business grow and succeed in the digital landscape. 
          Our experienced team combines technical expertise with creative problem-solving to deliver exceptional results.
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 6 }} />

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Why Choose Us?
          </Typography>
          
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Experience
              </Typography>
              <Typography variant="body2" paragraph>
                Over 10 years of experience in delivering high-quality software solutions across various industries. 
                We've worked with startups, enterprises, and everything in between.
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Technology
              </Typography>
              <Typography variant="body2" paragraph>
                We stay current with the latest technologies and best practices. From modern JavaScript frameworks 
                to cloud-native architectures, we use the right tools for each project.
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Support
              </Typography>
              <Typography variant="body2" paragraph>
                Our relationship doesn't end at delivery. We provide ongoing support, maintenance, and updates 
                to ensure your applications continue to perform optimally.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 6 }} />

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Our Process
          </Typography>
          
          <Typography variant="body1" paragraph>
            We follow a structured approach to ensure project success and client satisfaction:
          </Typography>

          <Box sx={{ mt: 3 }}>
            {[
              {
                step: "1. Discovery & Planning",
                description: "We start by understanding your business goals, target audience, and technical requirements. This phase includes stakeholder interviews, market research, and technical feasibility analysis."
              },
              {
                step: "2. Design & Prototyping", 
                description: "Our design team creates wireframes, mockups, and interactive prototypes. We iterate based on your feedback to ensure the design meets your vision and user needs."
              },
              {
                step: "3. Development & Testing",
                description: "Our developers build your application using best practices and modern tools. We implement comprehensive testing strategies including unit tests, integration tests, and user acceptance testing."
              },
              {
                step: "4. Deployment & Launch",
                description: "We handle the deployment process, including server setup, domain configuration, and performance optimization. We ensure a smooth launch with minimal downtime."
              },
              {
                step: "5. Maintenance & Support",
                description: "Post-launch, we provide ongoing maintenance, security updates, and feature enhancements. Our support team is available to address any issues that may arise."
              }
            ].map((phase, index) => (
              <Box key={index} sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                  {phase.step}
                </Typography>
                <Typography variant="body2" paragraph>
                  {phase.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Divider sx={{ my: 6 }} />

        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography variant="h5" gutterBottom>
            Ready to Get Started?
          </Typography>
          <Typography variant="body1" paragraph>
            Contact us today to discuss your project requirements and learn how we can help bring your ideas to life.
            We offer free consultations and project estimates.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is a long page to demonstrate scrolling behavior with the sticky footer and AppBar navigation.
            You can scroll through all this content and see how the layout maintains its structure.
          </Typography>
        </Box>

      </Container>
    </>
  )
}

export default Services