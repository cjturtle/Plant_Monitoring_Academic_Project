import React, { useState, useEffect } from 'react'

import { CChartLine } from '@coreui/react-chartjs'

const MainChart = ({ sensorValuesList, labelsList }) => {
  const [maximums, setMaximums] = useState({
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
  })
  useEffect(() => {
    if (labelsList && labelsList.length && sensorValuesList.length) {
    }
    let temp = sensorValuesList
      .slice(labelsList.length - 18, labelsList.length)
      .map((i) => parseFloat(i.Temperature))
    let hum = sensorValuesList
      .slice(labelsList.length - 18, labelsList.length)
      .map((i) => parseFloat(i.Humidity))
    let co2 = sensorValuesList
      .slice(labelsList.length - 18, labelsList.length)
      .map((i) => parseFloat(i.Co2))
    let PAR = sensorValuesList
      .slice(labelsList.length - 18, labelsList.length)
      .map((i) => parseFloat(i.PAR))
    let TDS = sensorValuesList
      .slice(labelsList.length - 18, labelsList.length)
      .map((i) => parseFloat(i.TDS))
    let PH = sensorValuesList
      .slice(labelsList.length - 18, labelsList.length)
      .map((i) => parseFloat(i.PH))

    let maxTemp = temp[0]
    let maxHum = hum[0]
    let maxCo2 = co2[0]
    let maxPAR = PAR[0]
    let maxTDS = TDS[0]
    let maxPH = PH[0]
    for (let i = 1; i !== 18; i++) {
      if (temp[i] >= maxTemp) {
        maxTemp = temp[i]
      }

      if (hum[i] >= maxHum) {
        maxHum = hum[i]
      }

      if (co2[i] >= maxCo2) {
        maxCo2 = co2[i]
      }

      if (PAR[i] >= maxPAR) {
        maxPAR = PAR[i]
      }
      if (TDS[i] >= maxTDS) {
        maxTDS = TDS[i]
      }
      if (PH[i] >= maxPH) {
        maxPH = PH[i]
      }
    }

    setMaximums({
      a: maxTemp,
      b: maxHum,
      c: maxCo2,
      d: maxPAR,
      e: maxTDS,
      f: maxPH,
    })
  }, [labelsList, sensorValuesList])
  const defaultDatasets = (() => {
    const data2 = sensorValuesList.length
      ? sensorValuesList.slice(labelsList.length - 7, labelsList.length).map((i) => i.hum)
      : []

    const data5 = sensorValuesList.length
      ? sensorValuesList.slice(labelsList.length - 7, labelsList.length).map((i) => i.TDS)
      : []
    const data6 = sensorValuesList.length
      ? sensorValuesList.slice(labelsList.length - 7, labelsList.length).map((i) => i.PH)
      : []

    return [
      {
        label: 'Humidity',
        yAxisID: 'B',
        backgroundColor: 'transparent',
        borderColor: '#2563eb',
        pointHoverBackgroundColor: '#2563eb',
        borderWidth: 2,
        data: data2,
      },

      {
        label: 'TDS',
        yAxisID: 'E',
        backgroundColor: 'transparent',
        borderColor: '#f0ad4e',
        pointHoverBackgroundColor: '#f0ad4e',
        borderWidth: 2,
        data: data5,
      },
      {
        label: 'PH',
        yAxisID: 'F',
        backgroundColor: 'transparent',
        borderColor: '#059669',
        pointHoverBackgroundColor: '#059669',
        borderWidth: 2,
        data: data6,
      },
    ]
  })()

  const defaultOptions = (() => {
    return {
      maintainAspectRatio: false,

      legend: {
        display: false,
      },
      scales: {
        x: {
          gridLines: {
            drawOnChartArea: false,
          },
          ticks: { fontSize: 10 },
        },
        y: [
          {
            id: 'B',
            position: 'left',
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 5,
              stepSize: Math.ceil((maximums.b + 30) / 5),
              max: maximums.b + 30,
              fontColor: '#20a8d8',
            },
            gridLines: {
              display: true,
            },
          },

          {
            id: 'E',
            position: 'left',
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 5,
              stepSize: Math.ceil((maximums.e + 100) / 5),
              max: maximums.d + 100,
              fontColor: '#f86c6b',
            },
            gridLines: {
              display: true,
            },
          },
          {
            id: 'F',
            position: 'left',
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 5,
              stepSize: Math.ceil((maximums.f + 100) / 5),
              max: maximums.d + 100,
              fontColor: '#f86c6b',
            },
            gridLines: {
              display: true,
            },
          },
        ],
      },
      elements: {
        line: {
          borderWidth: 1,
          tension: 0.4,
        },
        point: {
          radius: 1.5,
          hitRadius: 10,
          hoverRadius: 4,
        },
      },
    }
  })()

  return (
    <>
      <CChartLine
        style={{ height: '300px', marginTop: '10px' }}
        data={{
          labels:
            labelsList && labelsList.length
              ? labelsList.slice(labelsList.length - 25, labelsList.length)
              : [],
          datasets: defaultDatasets,
        }}
        options={defaultOptions}
      />
    </>
  )
}

export default MainChart
