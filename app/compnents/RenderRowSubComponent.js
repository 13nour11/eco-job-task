import React from "react";

const RenderRowSubComponent = ({
  row,
  expandedRowIds,
  setExpandedRowIds,
  mainColumns,
}) => {
  const { original } = row;
  const isRowExpanded = expandedRowIds.includes(original.id);

  const toggleRowExpand = () => {
    setExpandedRowIds((prev) =>
      prev.includes(original.id)
        ? prev.filter((id) => id !== original.id)
        : [...prev, original.id]
    );
  };

  return (
    <tr onClick={toggleRowExpand}>
      <td colSpan={mainColumns.length}>
        {isRowExpanded && original.subRows && (
          <div style={{ padding: "10px", backgroundColor: "#f1f1f1" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ backgroundColor: "blue", color: "white", padding: "8px" }}>
                    Item
                  </th>
                  <th style={{ backgroundColor: "blue", color: "white", padding: "8px" }}>
                    Type
                  </th>
                  <th style={{ backgroundColor: "blue", color: "white", padding: "8px" }}>
                    Desc
                  </th>
                  <th style={{ backgroundColor: "blue", color: "white", padding: "8px" }}>
                    M
                  </th>
                  <th style={{ backgroundColor: "blue", color: "white", padding: "8px" }}>
                    Qth
                  </th>
                </tr>
              </thead>
              <tbody>
                {original.subRows.map((subRow, index) => (
                  <tr key={index}>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      {subRow.id}
                    </td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      {subRow.ba}
                    </td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      {subRow.qt}
                    </td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      {subRow.m}
                    </td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      {subRow.beg}
                    </td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      {subRow.percent}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </td>
    </tr>
  );
};

export default RenderRowSubComponent;
