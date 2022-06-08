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
  const timeList = ["00:00", "01:00", "02:00", "03:00", 
                    "04:00", "05:00", "06:00", "07:00", 
                    "08:00", "09:00", "10:00", "11:00", 
                    "12:00", "13:00", "14:00", "15:00", 
                    "16:00", "17:00", "18:00", "19:00", 
                    "20:00", "21:00", "22:00", "23:00"];

  const busList = ['100', '101', '102', '103', '104', '105', '106', '107', '109', '110A', '110B', '111', '120', '121', '130', '140', '141', '142', '143', '144', '145', '146', '147', '148', '150', '151', '152', '153', '160', '162', '171', '172', '173', '201', '202', '240', '241', '242', '260', '261', '262', '270', '271', '272', '273', '301', '302', '303', '320', '333', '340', '341', '342', '343', '350', '360', '362', '370', '400', '401', '402', '405', '406', '420', '421', '440', '441', '452', '461', '463', '470', '472', '500', '501', '502', '503', '504', '505', '506', '507', '540', '541', '542', '571', '600', '601', '602', '603', '604', '605', '606', '640', '641', '643', '650', '651', '652', '653', '654', '660', '661', '662', '672', '673', '674', '700', '701', '702A', '702B', '704', '705', '707', '708', '710', '720', '721', '740', '741', '742', '750A', '750B', '752', '753', '761', '771', '773', '774', '1014', '1017', '1020', '1111', '1113', '1114', '1115', '1116', '1119', '1120', '1122', '1124', '1126', '1127', '1128', '1129', '1130', '1131', '1132', '1133', '1135', '1136', '1137', '1138', '1139', '1140', '1141', '1142', '1143', '1144', '1154', '1155', '1156', '1162', '1164', '1165', '1167', '1213', '1218', '1221', '1222', '1224', '1226', '1227', '1711', '2012', '2013', '2014', '2015', '2016', '2112', '2113', '2114', '2115', '2211', '2221', '2222', '2224', 
  '2227', '2230', '2233', '2234', '2235', '2311', '2312', '2412', '2413', '2415', '2416', '3011', '3012', '3212', '3214', '3216', '3217', '3220', '3313', '3314', '3315', '3316', '3317', '3318', '3319', '3321', '3322', '3323', '3411', '3412', '3413', '3414', '3416', '3417', '3422', '3425', '3426', '4211', '4212', '4312', '4318', '4319', '4419', '4432', '5012', '5413', '5511', '5513', '5515', '5516', '5517', '5519', '5522A', '5522B', '5523', '5524', '5525', '5528', '5530', '5531', '5535', '5536', '5537', '5615', '5616', '5617', '5618', '5619', '5620', '5621', '5712', '6211', '6411', '6511', '6512', '6513', '6514', '6515', '6516', '6611', '6613', '6615', '6617', '6620', '6623', '6624', '6625', '6627', '6628', '6629', '6630', '6631', '6632', '6640A', '6640B', '6642', '6645', '6647', '6648', '6649', '6654', '6657', '6712', '6714', '6715', '6716', '7011', '7013A', '7013B', '7016', '7017', '7018', '7019', '7021', '7022', '7024', '7025', '7211', '7212', '7611', '7612', '7613', '7711', '7713', '7715', '7719', '7720', '7722', '7723', '7726', '7730', '7734', '7737', '7738', '7739', '8003', '8541', '8774']


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
    if(busList.includes(String(bus))){
      try {
        setLoading(true);
        setData([]);
        const response = await axios.get(
          `http://localhost:5000/prediction/${bus}/${date.toString()}/${time}`)
          //`http://107.22.134.50:5000/prediction/${bus}/${date.toString()}/${time}`)
            setData(response.data.result);
            console.log(data);
      } catch (e) {
      }
      setLoading(false);
    }
    else{
      alert("제공하지 않는 버스입니다!")
    }
  };

  if (loading) return <div>로딩중..</div>;
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
             서울 버스 혼잡도 예측 서비스{" "}
            </MKTypography>
              <form>
                <div class="row">
                  <div class="col">
                    <input type="text" class="form-control" onChange={onChangeBus} value={bus} placeholder="노선 입력" />
                  </div>
                  <div class="col">
                    <input type="date" class="form-control" onChange={onChangeDate} value={date} placeholder="날짜 선택" />
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
