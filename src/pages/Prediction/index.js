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
import axios from 'axios';
import { useState, useEffect } from 'react';


function Prediction() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [bus, setBus] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  //시간 list
  const timeList = ["00", "01", "02", "03", "04","05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"];


  const onChangeBus = (e) => {
    setBus(e.target.value);
  };

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  const onChangeTime = (e) => {
    setTime(e.target.value);
  };


  const fetchData = async ()=> {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost/prediction/${bus}/${date.toString()}/${time}`)
          setData(response.data.result);
          console.log(data);
    } catch (e) {
    }
    setLoading(false);
  };


  if (loading) return <div>로딩중..</div>;
  if (!data) return <div>잘못된 검색입니다</div>;
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
             버스 혼잡율 예측 서비스{" "}
            </MKTypography>
              <form>
                <div class="row">
                  <div class="col">
                    <input type="text" class="form-control" onChange={onChangeBus} value={bus} placeholder="노선" />
                  </div>
                  <div class="col">
                    <input type="date" class="form-control" onChange={onChangeDate} value={date} placeholder="날짜" />
                  </div>
                  <div class="col">
                    <select onChange={onChangeTime} value={time} class="form-control">
                    <option>시간</option>
                      {timeList.map((item) => (
                        <option value={item} key={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div class="col">
                  <button type="submit" class="btn btn-light" onClick={fetchData}>검색</button>
                  </div>
                </div>
              </form>
            </Grid>
          </Container>
        </MKBox>
      </MKBox>
      <div class="alert alert-light" role="alert">
        <h4>{bus}버스의 혼잡도 예측 결과</h4>
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
          {data.station_info_data && data.station_info_data.map((item) => {
            if(item.complexity ==3) { 
          return (
            <tr>
              <td class="table-danger" key={item.station}>{item.station}</td>
              <td class="table-danger" key={item.station}>{item.int_pred}</td>
              <td class="table-danger" key={item.station}>{item.complexity}</td>
            </tr>
          );}
          else if (item.complexity ==2) { 
            return (
              <tr>
                <td class="table-warning" key={item.station}>{item.station}</td>
                <td class="table-warning" key={item.station}>{item.int_pred}</td>
                <td class="table-warning" key={item.station}>{item.complexity}</td>
              </tr>
            );}
            else if (item.complexity ==1) { 
              return (
                <tr>
                  <td class="table-success" key={item.station}>{item.station}</td>
                  <td class="table-success" key={item.station}>{item.int_pred}</td>
                  <td class="table-success" key={item.station}>{item.complexity}</td>
                </tr>
              );}
        })}
            
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Prediction;
