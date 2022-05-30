import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKDatePicker from "components/MKDatePicker";

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
  const timeList = ["00:00", "01:00", "02:00", "03:00", 
                    "04:00", "05:00", "06:00", "07:00", 
                    "08:00", "09:00", "10:00", "11:00", 
                    "12:00", "13:00", "14:00", "15:00", 
                    "16:00", "17:00", "18:00", "19:00", 
                    "20:00", "21:00", "22:00", "23:00"];


  const onChangeBus = (e) => {
    setBus(e.target.value);
  };

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  const onChangeTime = (e) => {
    setTime(e.target.value);
  };

  const onFocusDate = (e) => {
    e.target.type='date';
  };

  const fetchData = async ()=> {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://107.22.134.50:5000/prediction/${bus}/${date.toString()}/${time}`)
          setData(response.data.result);
          console.log(data);
    } catch (e) {
    }
    setLoading(false);
  };


  if (loading) return <div>로딩중..</div>;
  if (!data) return <div>잘못된 검색이거나 제공하지 않는 버스입니다!</div>;
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
             서울 버스 혼잡율 예측 서비스{" "}
            </MKTypography>
              <form>
                <div class="row">
                  <div class="col">
                    <input type="text" class="form-control" onChange={onChangeBus} value={bus} placeholder="노선 입력" />
                  </div>
                  <div class="col">
                    <input type="text" class="form-control" onChange={onChangeDate} value={date} placeholder="날짜 선택" onFocus={onFocusDate} />
                  </div>
                  <div class="col">
                    <select onChange={onChangeTime} value={time} class="form-control">
                    <option>시간 선택</option>
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
              <td class="table-danger" key={item.station+"3station"}>{item.station}</td>
              <td class="table-danger" key={item.station+"3num"}>{item.int_pred}</td>
              <td class="table-danger" key={item.station+"3state"}>혼잡</td>
            </tr>
          );}
          else if (item.complexity ==2) { 
            return (
              <tr>
                <td class="table-warning" key={item.station+"2station"}>{item.station}</td>
                <td class="table-warning" key={item.station+"2num"}>{item.int_pred}</td>
                <td class="table-warning" key={item.station+"2state"}>보통</td>
              </tr>
            );}
            else if (item.complexity ==1) { 
              return (
                <tr>
                  <td class="table-success" key={item.station+"1station"}>{item.station}</td>
                  <td class="table-success" key={item.station+"1num"}>{item.int_pred}</td>
                  <td class="table-success" key={item.station+"1state"}>여유</td>
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
