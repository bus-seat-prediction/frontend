// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/bg-main.jpg";

function Main() {
  return (
    <>
      <DefaultNavbar routes={routes} transparent light />
      <MKBox
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={18}
            lg={9}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              mt={40}
              mb={10}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              버스 혼잡율 예측 서비스{" "}
            </MKTypography>
            <MKButton
              size="large"
              variant="outlined"
              color="white"
              sx={{ color: ({ palette: { white } }) => white.main }}
            >
              바로가기
            </MKButton>
            <br></br>
            <MKButton
              size="small"
              variant="text"
              color="white"
              sx={{ color: ({ palette: { white } }) => white.main }}
            >
              자세히
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
    </>
  );
}

export default Main;
