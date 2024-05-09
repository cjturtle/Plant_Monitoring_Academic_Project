import React, { useState, useEffect } from "react";
import { CCard, CCardBody, CCol, CRow } from "@coreui/react";
import moment from "moment";
import WidgetsDropdown from "../widgets/WidgetsDropdown";
import MainChart from "./MainChart";
import app from "../../API/firebase/FirebaseConfig";
import {
  getDatabase,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

const Dashboard = () => {
  const [sensorValuesList, setSensorValuesList] = useState([]);
  const [labelsList, setLabelsList] = useState([]);

  useEffect(() => {
    const db = getDatabase(app);
    const commentsRef = ref(db, "Todo");
    onValue(commentsRef, (data) => {
      const ser = data.val();
      const temp = [];
      const labels = [];
      Object.keys(ser).map((key, index) => {
        temp.push(ser[key]);
        let d = new Date(0);
        let epochDate = moment(d.setUTCSeconds(parseInt(key))).format("LT");
        labels.push(epochDate);
      });
      setLabelsList(labels);
      setSensorValuesList(temp);
    });
  }, []);

  return (
    <>
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0 mt-2 ms-2 ">
                Monitoring
              </h4>
              <div className="small text-body-secondary ms-2 mt-2">
                {moment().format("LL")}
              </div>
            </CCol>
          </CRow>
          <MainChart
            sensorValuesList={sensorValuesList}
            labelsList={labelsList}
          />
        </CCardBody>
      </CCard>
      <WidgetsDropdown
        sensorValuesList={sensorValuesList}
        labelsList={labelsList}
        className="mb-4"
      />
    </>
  );
};

export default Dashboard;
