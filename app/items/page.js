"use client";
import React, { useEffect, useState } from "react";
import {
  AnalyticalTable,
  // FlexBox,
  // Input,
  // Button,
  // DatePicker,
  // Option,
  // Select,
  // Label,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import RenderRowSubComponent from "../compnents/RenderRowSubComponent"; //r
import axios from "axios";
import SecNavBox from "../compnents/SecNavBox";

const Items = () => {
  const [expandedRowIds, setExpandedRowIds] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const mainColumns = [
    { Header: "ID", accessor: "id" },
    { Header: "BA", accessor: "ba" },
    { Header: "Qt", accessor: "qt" },
    { Header: "In", accessor: "in" },
    { Header: "BEG", accessor: "beg" },
    { Header: "PQT", accessor: "pqt" },
    { Header: "%", accessor: "percent" },
    { Header: "FRI 10 Jun 2024", accessor: "fri.fri1" },
    { Header: "FRI 10 Jun 2024", accessor: "fri.fri2" },
    { Header: "FRI 10 Jun 2024", accessor: "fri.fri3" },
    { Header: "FRI 10 Jun 2024", accessor: "fri.fri4" },
    { Header: "FRI 10 Jun 2024", accessor: "fri.fri5" },
    { Header: "FRI 10 Jun 2024", accessor: "fri.fri6" },
    { Header: "FRI 10 Jun 2024", accessor: "fri.fri7" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://13nour11.github.io/eco-data/data.json"
        );
        setData(response.data);
      } catch (error) {
        setError("Failed to fetch data.");
        console.log("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      {/* <h1>Items Tree Table</h1> */}
      {loading ? (
        <p style={{ textAlign: "center" }}>Loading data...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <SecNavBox />
          <div style={{ background: "#f3f3f3", padding: "20px" }}>
            <AnalyticalTable
              data={data}
              columns={mainColumns}
              renderRowSubComponent={(row) => (
                <RenderRowSubComponent
                  row={row}
                  expandedRowIds={expandedRowIds}
                  setExpandedRowIds={setExpandedRowIds}
                  mainColumns={mainColumns}
                />
              )}
              subComponentsBehavior="None"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Items;
