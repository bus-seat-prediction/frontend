import { useState } from "react";
import { Link } from 'react-router-dom';

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";

import CloseIcon from "@mui/icons-material/Close";

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
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);

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
              서울 버스 혼잡도 예측 서비스{" "}
            </MKTypography>
            <Link to="/prediction">
              <MKButton
                size="large"
                variant="outlined"
                color="white"
                sx={{ color: ({ palette: { white } }) => white.main }}
                >
                바로가기
              </MKButton>
            </Link>
            <br></br>
            <MKButton
              size="small"
              variant="text"
              color="white"
              sx={{ color: ({ palette: { white } }) => white.main }}
              onClick = {toggleModal}
            >
              자세히
            </MKButton>
            <Modal open={show} onClose={toggleModal} sx={{ display: "grid", placeItems: "center" }}>
              <Slide direction="down" in={show} timeout={500}>
                <MKBox
                  position="relative"
                  width="500px"
                  display="flex"
                  flexDirection="column"
                  borderRadius="xl"
                  bgColor="white"
                  shadow="xl"
                >
                  <MKBox display="flex" alginItems="center" justifyContent="space-between" p={2}>
                    <MKTypography variant="h5">편한 버스란?</MKTypography>
                    <CloseIcon fontSize="medium" sx={{ cursor: "pointer" }} onClick={toggleModal} />
                  </MKBox>
                  <Divider sx={{ my: 0 }} />
                  <MKBox p={2}>

                  <MKTypography variant="body2" color="secondary" fontWeight="regular">
                      <br />
                      편한 버스란, 서울시 버스의 혼잡도를 예측해주는 서비스입니다.<br />
                      저희 서비스는 사용자에게 해당 시간에 버스 안이 얼마나 혼잡할 지를 예측하여 제공합니다.
                      <br />
                      <br />
                      버스를 이용할 때 대부분의 사람들은 버스가 혼잡해도 공간이 전혀 없지 않는 이상 탑승에 크게 문제가 되지 않습니다.
                      그러나 &apos;노인, 임산부, 영유아 동반자 등의 교통 약자&apos;는 혼잡한 버스를 이용하는 것이 어렵습니다.
                      이에 저희는 버스 혼잡에 취약한 교통약자가 이동할 때, 출발 시간 선택에 도움을 주기 위해 해당 서비스를 기획하게 되었습니다.
                      <br />
                      <br />
                    </MKTypography>
                  </MKBox>
                  <Divider sx={{ my: 0 }} />
                </MKBox>
              </Slide>
            </Modal>
          </Grid>
        </Container>
      </MKBox>
    </>
  );
}

export default Main;
