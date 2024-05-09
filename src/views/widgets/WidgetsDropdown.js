import React from 'react'

import { CRow, CCol, CWidgetStatsA } from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartLine, CChartBar, CChart } from '@coreui/react-chartjs'

const WidgetsDropdown = ({ sensorValuesList, labelsList }) => {
  const labels = labelsList.map((i) => i)

  const data1 = sensorValuesList.map((i) => i.temp)[sensorValuesList.length - 1]
  const data2 = sensorValuesList.map((i) => i.hum)[sensorValuesList.length - 1]
  const data3 = sensorValuesList.map((i) => i.co2)[sensorValuesList.length - 1]
  const data4 = sensorValuesList.map((i) => i.TDS)[sensorValuesList.length - 1]
  const data5 = sensorValuesList.map((i) => i.PAR)[sensorValuesList.length - 1]
  const data6 = sensorValuesList.map((i) => i.PH)[sensorValuesList.length - 1]

  const datas1 = sensorValuesList
    .slice(labelsList.length - 36, labelsList.length)
    .map((i) => i.temp)
  const datas2 = sensorValuesList.slice(labelsList.length - 36, labelsList.length).map((i) => i.hum)
  const datas3 = sensorValuesList.slice(labelsList.length - 36, labelsList.length).map((i) => i.co2)
  const datas4 = sensorValuesList.slice(labelsList.length - 36, labelsList.length).map((i) => i.TDS)
  const datas5 = sensorValuesList.slice(labelsList.length - 36, labelsList.length).map((i) => i.PAR)
  const datas6 = sensorValuesList.slice(labelsList.length - 36, labelsList.length).map((i) => i.PH)

  const defaultOption = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawTicks: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        border: {
          display: false,
        },
        grid: {
          display: false,
          drawBorder: false,
          drawTicks: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    elements: {
      line: {
        borderWidth: 1,
        tension: 0.4,
      },
      point: {
        radius: 3,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
  }

  return (
    <CRow xs={{ gutter: 4 }}>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsA
          color="danger"
          value={
            <>
              {data1} <span>°</span>
              <span className="fs-6 fw-normal ms-2">Temperature</span>
            </>
          }
          chart={
            <CChartLine
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: labels,
                datasets: [
                  {
                    label: 'Temperature',
                    backgroundColor: 'rgba(255,255,255,.55)',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: datas1,
                    barPercentage: 0.6,
                  },
                ],
              }}
              options={defaultOption}
            />
          }
        />
      </CCol>

      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsA
          style={{ backgroundColor: '#2563eb' }}
          value={
            <>
              {data2} <span>%</span>
              <span className="fs-6 fw-normal ms-2">Humidity</span>
            </>
          }
          chart={
            <CChartLine
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: labels,
                datasets: [
                  {
                    label: 'Relative Humidity',
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointBackgroundColor: getStyle('--cui-light'),
                    data: datas2,
                  },
                ],
              }}
              options={defaultOption}
            />
          }
        />
      </CCol>

      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsA
          style={{ backgroundColor: '#059669', color: 'white' }}
          value={
            <>
              {data6}
              <span className="fs-6 fw-normal ms-2">Potential Hydrogen</span>
            </>
          }
          chart={
            <CChartLine
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: labels,
                datasets: [
                  {
                    label: 'Potential Hydrogen',
                    backgroundColor: 'rgba(255,255,255,.55)',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointBackgroundColor: getStyle('--cui-light'),
                    data: datas6,
                  },
                ],
              }}
              options={defaultOption}
            />
          }
        />
      </CCol>

      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsA
          color="warning"
          value={
            <>
              {data4} <span className="fs-6 fw-normal ">ppm</span>
              <span className="fs-6 fw-normal ms-2">Total Dissolved Solids</span>
            </>
          }
          chart={
            <CChartLine
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: labels,
                datasets: [
                  {
                    label: 'Total Dissolved Solids',
                    backgroundColor: 'rgba(255,255,255,.55)',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: datas4,
                    barPercentage: 0.6,
                  },
                ],
              }}
              options={defaultOption}
            />
          }
        />
      </CCol>

      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsA
          style={{ backgroundColor: '#be123c', color: 'white' }}
          value={
            <>
              {data5} <span className="fs-6 fw-normal ">(nm)</span>
              <span className=" fw-normal ms-2" style={{ fontSize: '.7rem' }}>
                Photosynthetic Active Radiation
              </span>
            </>
          }
          chart={
            <CChartLine
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: labels,
                datasets: [
                  {
                    label: 'Photosynthetic Active Radiation',
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointBackgroundColor: getStyle('--cui-light'),
                    data: datas5,
                  },
                ],
              }}
              options={defaultOption}
            />
          }
        />
      </CCol>

      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsA
          style={{ backgroundColor: '#374151', color: 'white' }}
          value={
            <>
              {data3} <span className="fs-6 fw-normal ">ppm</span>
              <span className="fs-6 fw-normal ms-2">Carbon Dioxide</span>
            </>
          }
          chart={
            <CChartLine
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: labels,
                datasets: [
                  {
                    label: 'Carbon Dioxide',
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointBackgroundColor: getStyle('--cui-light'),
                    data: datas3,
                  },
                ],
              }}
              options={defaultOption}
            />
          }
        />
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
