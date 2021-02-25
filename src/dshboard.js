import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Scatter } from "react-chartjs-2";
import { readRemoteFile } from "react-papaparse";
import { chartOptions, metricsOptions } from "./constants";
import { CgMenuGridO, CgMathPlus } from "react-icons/cg";
import { DashboardStyleWrapper } from "./dashboard-styled";
import { toTitle } from "./constants/utils";

export const DashboardPage = () => {
  const [statistics, setStatistics] = useState([]);
  const [region, setRegion] = useState("");
  const [sector, setSector] = useState("");
  const [colorFilter, setColorFilter] = useState(
    chartOptions.CUSTOMER_LIFETIME_VALUE
  );
  const [sizeFilter, setSizeFilter] = useState(chartOptions.CUSTOMER_CHURN);

  const { EBIDTA, DEBT_TO_EQUITY, REGION } = chartOptions;

  const handleFile = React.useCallback(() => {
    return readRemoteFile(
      "https://res.cloudinary.com/bolajahmad/raw/upload/v1614200114/test_data_ozh6nz.csv",
      {
        download: true,
        header: true,
        complete: (results) => {
          setStatistics(results.data);
        }
      }
    );
  }, []);

  const filterBy = useCallback(
    (option) => {
      const filterSet = new Set(statistics.map((stat) => stat[option]));
      return Array.from(filterSet);
    },
    [statistics]
  );

  const metricsFilter = useMemo(() => Object.keys(metricsOptions), []);

  const plotChart = useCallback(
    (xAxis, yAxis) => {
      const data = statistics.map((stat) => ({
        x: stat[xAxis],
        y: stat[yAxis]
      }));

      return data;
    },
    [statistics]
  );

  useEffect(() => {
    handleFile();
    plotChart(DEBT_TO_EQUITY, EBIDTA);
  }, [plotChart, handleFile]);

  return (
    <DashboardStyleWrapper>
      <div className="container">
        <div className="header">
          <h1>Comparative Landscape</h1>
        </div>

        <div className="main__content">
          <div className="chart__container">
            <div className="chart">
              <Scatter
                data={{
                  datasets: [
                    {
                      label: "",
                      data: plotChart(DEBT_TO_EQUITY, EBIDTA)
                    }
                  ]
                }}
                options={{
                  legend: false,
                  title: false
                }}
              />
            </div>

            <div className="show-as-box">
              <div>
                <p className="bold">Color</p>
              </div>

              <div className="color__container">
                <div>{toTitle(colorFilter)}</div>
                <div className="color__box" />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%"
                  }}
                >
                  <span>Low</span>
                  <span>High</span>
                </div>
              </div>
            </div>

            <div className="show-as-box">
              <div>
                <p className="bold">Size</p>
              </div>

              <div className="size__container">
                <div>{toTitle(sizeFilter)}</div>
                <ul className="sizes__list">
                  {["250", "500", "750", "1000", "1250"].map((size, i) => (
                    <li key={`${size}-${i}`}>
                      <span className={`circle ${size}`} />
                      <span>{size}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="filter__container">
            <div className="select__wrapper">
              <div className="input__body">
                <label htmlFor="region">Choose a Sector</label>
                <select id="region" onChange={(e) => setRegion(e.target.value)}>
                  <option value={null} disabled>
                    Choose a sector
                  </option>
                  {filterBy(REGION).map((stat, i) => (
                    <option key={`${stat}-${i}`} value={region}>
                      {stat}
                    </option>
                  ))}
                </select>
              </div>

              <div className="input__body">
                <label htmlFor="region">Choose a Region</label>
                <select id="region" onChange={(e) => setSector(e.target.value)}>
                  <option value={null} disabled>
                    Choose a region
                  </option>
                  {filterBy(chartOptions.SECTOR).map((stat, i) => (
                    <option key={`${stat}-${i}`} value={sector}>
                      {stat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="metrics__wrapper">
              <h3 className="heading">METRICS</h3>
              <div>
                <p>Drag and Drop metrics onto x-axis, y-axis, size or color</p>
              </div>

              <ul className="metrics__list">
                {metricsFilter.map((metric) => (
                  <li className="list__item">
                    <div>
                      <CgMenuGridO size="16" />
                    </div>
                    <div>{toTitle(chartOptions[metric])}</div>
                    <div className="dd-icon">
                      <CgMathPlus size="16" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DashboardStyleWrapper>
  );
};
