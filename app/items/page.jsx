"use client";
import React, { useEffect, useState } from "react";
import { AnalyticalTable, FlexBox, Input, Button } from "@ui5/webcomponents-react";
import RenderRowSubComponent from "../compnents/renderRowSubComponent";
import axios from "axios";

const Items = () => {
  const [expandedRowIds, setExpandedRowIds] = useState([]);
  const [data, setData] = useState([]);

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
      try {
        const response = await axios.get(
          "https://13nour11.github.io/eco-data/data.json"
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Items Tree Table</h1>
      <div style={{ marginBottom: "20px" }}>
        <FlexBox
          justifyContent="SpaceBetween"
          alignItems="Center"
          style={{ gap: "10px", flexWrap: "wrap" }}
        >
          <Input placeholder="Input 1" />
          <Input placeholder="Input 2" />
          <Input placeholder="Input 3" />
          <Input placeholder="Input 4" />
          <Button design="Emphasized">Search</Button>
        </FlexBox>
      </div>
      {/* Table */}
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
  );
};

export default Items;
