// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/city-profile.jpg";

import React from "react";


function Prediction() {
  return (
    <>
      <DefaultNavbar routes={routes} transparent light />
      <MKBox bgColor="white">
        <MKBox
          minHeight="15rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
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
              variant="h5"
              color="white"
              mt={5}
              mb={5}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              버스 혼잡율 예측 서비스는 예측을 원하는 날짜로부터 7일 후까지의 버스 혼잡율을 예측해주는 서비스 입니다.{" "}
            </MKTypography>
              <form>
                <div class="row">
                  <div class="col">
                    <input type="text" class="form-control" placeholder="노선" />
                  </div>
                  <div class="col">
                    <input type="text" class="form-control" placeholder="날짜" />
                  </div>
                  <div class="col">
                  <button type="submit" class="btn btn-light">검색</button>
                  </div>
                </div>
              </form>
            </Grid>
          </Container>
        </MKBox>
      </MKBox>
      <div class="alert alert-light" role="alert">
        <h4>7612버스의 혼잡도 예측 결과</h4>
      </div>
      <div class="container-fluid">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">정류장명</th>
              <th scope="col">예상 인원 수</th>
              <th scope="col">혼잡도</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">세브란스병원</th>
              <td>42</td>
              <td class="table-danger">혼잡</td>
            </tr>
            <tr>
              <th scope="row">신촌역</th>
              <td>22</td>
              <td class="table-warning">보통</td>
            </tr>
            <tr>
              <th scope="row">연희동</th>
              <td>25</td>
              <td class="table-warning">보통</td>
            </tr>
            <tr>
              <th scope="row">명지대</th>
              <td>17</td>
              <td class="table-success">여유</td>
            </tr>
            <tr>
              <th scope="row">명지대후문</th>
              <td>26</td>
              <td class="table-warning">보통</td>
            </tr>
            <tr>
              <th scope="row">홍제역</th>
              <td>12</td>
              <td class="table-success">여유</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Prediction;
