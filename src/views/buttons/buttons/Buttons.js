import React, { useState, useEffect } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormSelect,
  CForm,
  CRow,
  CFormLabel,
  CFormSwitch,
} from "@coreui/react";
import app from "../../../API/firebase/FirebaseConfig";
import {
  getDatabase,
  ref,
  update,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

const Buttons = () => {
  const [humiValue, setHumiValue] = useState("");
  const [fromphValue, setFromPhValue] = useState("");
  const [tophValue, setToPhValue] = useState("");
  const [tdsValue, setTdsValue] = useState("");

  const [isOn, setIsOn] = useState(false);
  const [humiControl, setHumiControl] = useState("");
  const [fromphControl, setFromPhControl] = useState("");
  const [tophControl, setToPhControl] = useState("");
  const [tdsControl, setTdsControl] = useState("");
  const [addwaterControl, setAddwaterControl] = useState("");

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const db = getDatabase(app);
  const refValues = ref(db, "Parameter Values");
  const refControls = ref(db, "Controls");

  const handleSubmitValues = (e) => {
    e.preventDefault();
    update(refValues, {
      humiValue: humiValue,
      fromphValue: fromphValue,
      tophValue: tophValue,
      tdsValue: tdsValue,
    })
      .then((result) => {
        console.log("Success", result);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  const handleSubmitControls = (e) => {
    e.preventDefault();
    update(refControls, {
      humiControl: isOn,
      fromphControl: fromphControl,
      tophControl: tophControl,
      tdsControl: tdsControl,
      addwaterControl: addwaterControl,
    })
      .then((result) => {
        console.log("Success", result);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  useEffect(() => {
    const db = getDatabase(app);
    const commentsRef = ref(db, "Parameter Values");
    onValue(commentsRef, (data) => {
      setHumiValue(data.val().humiValue);
      setFromPhValue(data.val().fromphValue);
      setToPhValue(data.val().tophValue);
      setTdsValue(data.val().tdsValue);
    });
  }, []);

  useEffect(() => {
    const db = getDatabase(app);
    const commentsRef = ref(db, "Controls");
    onValue(commentsRef, (data) => {
      setHumiControl(data.val().humiControl);
    });
  });

  return (
    <CRow>
      <CCol xs={12}>
        <CForm onSubmit={handleSubmitValues}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Device Parameters Value</strong>
            </CCardHeader>
            <CCardBody className="text-center py-4  ">
              <CRow>
                <CFormLabel className="col-sm-6 col-form-label">
                  Humidity
                </CFormLabel>
                <CCol xs={5}>
                  <CFormSelect
                    onChange={(e) => setHumiValue(e.target.value)}
                    value={humiValue}
                    size="sm"
                    aria-label="Default select example"
                    options={[
                      "Humidifier Time Duration",
                      { label: "05:00 minutes", value: "05:00" },
                      { label: "10:00 minutes", value: "10:00" },
                      { label: "15:00 minutes", value: "15:00" },
                      { label: "20:00 minutes", value: "20:00" },
                      { label: "25:00 minutes", value: "25:00" },
                      { label: "30:00 minutes", value: "30:00" },
                    ]}
                  />
                </CCol>
              </CRow>

              <CRow>
                <CFormLabel className="col-sm-6 col-form-label">
                  Potential Hydrogen{" "}
                </CFormLabel>
                <CCol xs={5}>
                  <div className="d-flex gap-2">
                    <CFormSelect
                      onChange={(e) => setFromPhValue(e.target.value)}
                      value={fromphValue}
                      label="From: "
                      size="sm"
                      aria-label="Default select example"
                      options={[
                        "Acidity",
                        { label: "5.50 ", value: "5.50" },
                        { label: "5.60 ", value: "5.60" },
                        { label: "5.70 ", value: "5.70" },
                        { label: "5.80 ", value: "5.80" },
                        { label: "5.90 ", value: "5.90" },
                        { label: "6.00 ", value: "6.00" },
                        { label: "6.10 ", value: "6.10" },
                        { label: "6.20 ", value: "6.20" },
                        { label: "6.30 ", value: "6.30" },
                        { label: "6.40 ", value: "6.40" },
                        { label: "6.50 ", value: "6.50" },
                      ]}
                    />

                    <CFormSelect
                      onChange={(e) => setToPhValue(e.target.value)}
                      value={tophValue}
                      label="To:"
                      size="sm"
                      aria-label="Default select example"
                      options={[
                        "Alkalinity",
                        { label: "5.50 ", value: "5.50" },
                        { label: "5.60 ", value: "5.60" },
                        { label: "5.70 ", value: "5.70" },
                        { label: "5.80 ", value: "5.80" },
                        { label: "5.90 ", value: "5.90" },
                        { label: "6.00 ", value: "6.00" },
                        { label: "6.10 ", value: "6.10" },
                        { label: "6.20 ", value: "6.20" },
                        { label: "6.30 ", value: "6.30" },
                        { label: "6.40 ", value: "6.40" },
                        { label: "6.50 ", value: "6.50" },
                      ]}
                    />
                  </div>
                </CCol>
              </CRow>

              <CRow>
                <CFormLabel className="col-sm-6 col-form-label">
                  Total Dissolved Solids
                </CFormLabel>
                <CCol xs={5}>
                  <CFormSelect
                    onChange={(e) => setTdsValue(e.target.value)}
                    value={tdsValue}
                    size="sm"
                    aria-label="Default select example"
                    options={[
                      "Nutrients",
                      { label: "05:00", value: "05:00" },
                      { label: "10:00", value: "10:00" },
                      { label: "15:00", value: "15:00" },
                      { label: "20:00", value: "20:00" },
                      { label: "25:00", value: "25:00" },
                      { label: "30:00", value: "30:00" },
                    ]}
                  />
                </CCol>
              </CRow>
            </CCardBody>
            <div className="me-5 mb-3 d-flex justify-content-end  border-danger">
              <CButton color="primary" type="submit">
                Submit form
              </CButton>
            </div>
          </CCard>
        </CForm>
      </CCol>

      <CCol xs={12}>
        <CForm onSubmit={handleSubmitControls}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Device Controls</strong>
            </CCardHeader>
            <CCardBody className="text-center py-4 ">
              <CRow>
                <CFormLabel className="col-sm-6 col-form-label">
                  Humidifier:{" "}
                  <span>
                    {humiControl ? (
                      <span className="btn btn-success ">ON</span>
                    ) : (
                      <span className="btn btn-danger ">OFF</span>
                    )}
                  </span>
                </CFormLabel>
                <CCol xs={5}>
                  <CFormSwitch
                    checked={isOn}
                    onChange={toggleSwitch}
                    id="formSwitchCheckChecked"
                  />
                </CCol>
              </CRow>

              <CRow>
                <CFormLabel className="col-sm-6 col-form-label">
                  Potential Hydrogen Motors: <span>{fromphControl} - </span>
                  <span>{tophControl}</span>
                </CFormLabel>
                <CCol xs={5}>
                  <div className="d-flex gap-2">
                    <CFormSelect
                      onChange={(e) => setFromPhControl(e.target.value)}
                      value={fromphControl}
                      label="Acid:  "
                      size="sm"
                      aria-label="Default select example"
                      options={[
                        "Open for a seconds",
                        { label: "00:05", value: "00:05" },
                        { label: "00:10", value: "00:10" },
                        { label: "00:15", value: "00:15" },
                        { label: "00:20", value: "00:20" },
                        { label: "00:25", value: "00:25" },
                        { label: "00:30", value: "00:30" },
                      ]}
                    />

                    <CFormSelect
                      onChange={(e) => setToPhControl(e.target.value)}
                      value={tophControl}
                      label="Alkaline: "
                      size="sm"
                      aria-label="Default select example"
                      options={[
                        "Open for a seconds ",
                        { label: "00:05", value: "00:05" },
                        { label: "00:10", value: "00:10" },
                        { label: "00:15", value: "00:15" },
                        { label: "00:20", value: "00:20" },
                        { label: "00:25", value: "00:25" },
                        { label: "00:30", value: "00:30" },
                      ]}
                    />
                  </div>
                </CCol>
              </CRow>

              <CRow>
                <CFormLabel className="col-sm-6 col-form-label">
                  Total Dissolved Solids Motors
                </CFormLabel>
                <CCol xs={5}>
                  <div className="d-flex gap-2">
                    <CFormSelect
                      onChange={(e) => setTdsControl(e.target.value)}
                      value={tdsControl}
                      label="Nutrients:  "
                      size="sm"
                      aria-label="Default select example"
                      options={[
                        "Open for a seconds",
                        { label: "00:05", value: "00:05" },
                        { label: "00:10", value: "00:10" },
                        { label: "00:15", value: "00:15" },
                        { label: "00:20", value: "00:20" },
                        { label: "00:25", value: "00:25" },
                        { label: "00:30", value: "00:30" },
                      ]}
                    />

                    <CFormSelect
                      onChange={(e) => setAddwaterControl(e.target.value)}
                      value={addwaterControl}
                      label="Water: "
                      size="sm"
                      aria-label="Default select example"
                      options={[
                        "Liters ",
                        { label: "2 Liters", value: "2" },
                        { label: "4 Liters", value: "4" },
                        { label: "6 Liters", value: "6" },
                        { label: "8 Liters", value: "8" },
                        { label: "10 Liters", value: "10" },
                        { label: "12 Liters", value: "12" },
                      ]}
                    />
                  </div>
                </CCol>
              </CRow>
            </CCardBody>
            <div className="me-5 mb-3 d-flex justify-content-end  border-danger">
              <CButton color="primary" type="submit">
                Submit form
              </CButton>
            </div>
          </CCard>
        </CForm>
      </CCol>
    </CRow>
  );
};

export default Buttons;
