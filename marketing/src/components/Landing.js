// @ts-check
import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import MaterialLink from "@mui/material/Link";
import { Link } from "react-router";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const PREFIX = "Landing";
const classes = {
  root: `${PREFIX}-root`,
  cta: `${PREFIX}-cta`,
  content: `${PREFIX}-content`,
  heroContent: `${PREFIX}-hero-content`,
  heroButtons: `${PREFIX}-hero-buttons`,
  card: `${PREFIX}-card`,
  cardContent: `${PREFIX}-card-content`,
  cardGrid: `${PREFIX}-card-grid`,
  cardMedia: `${PREFIX}-card-media`,
  footer: `${PREFIX}-footer`,
};

const RootComponent = styled("main")((props) => {
  const { theme } = props;
  const { spacing } = theme;
  return {
    [`& .${classes.heroContent}`]: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
      [`& .${classes.heroButtons}`]: {
        marginTop: theme.spacing(4),
      },
    },
    [`& .${classes.cardGrid}`]: {
      paddingBottom: theme.spacing(8),
      paddingTop: spacing(8),
      [`& .${classes.card}`]: {
        display: "flex",
        height: "100%",
        flexDirection: "column",
      },
      [`& .${classes.cardContent}`]: {
        flexGrow: 1,
      },
      [`& .${classes.cardMedia}`]: {
        paddingTop: "56.25%", // 16:9
      },
    },
  };
});
const FooterComponent = styled("footer")((props) => {
  const { theme } = props;
  const { palette, spacing } = theme;
  return {
    [`&.${classes.footer}`]: {
      backgroundColor: palette.background.paper,
      padding: spacing(6),
    },
  };
});
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <MaterialLink component={Link} to="/" color="inherit">
        Your Website
      </MaterialLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
export default function Album() {
  return (
    <React.Fragment>
      <RootComponent>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Home Page
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Link to="/pricing">
                    <Button variant="contained" color="primary">
                      Pricing
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/pricing">
                    <Button variant="outlined" color="primary">
                      Pricing
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </RootComponent>
      {/* Footer */}
      <FooterComponent className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </FooterComponent>
      {/* End footer */}
    </React.Fragment>
  );
}
