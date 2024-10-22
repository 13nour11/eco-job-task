
import {
    FlexBox,
    Input,
    Button,
    DatePicker,
    Option,
    Select,
    Label,
  } from "@ui5/webcomponents-react";
  
  const inputData = [
    { label: "Input 1", value: "123456789", placeholder: "Input 1" },
    { label: "Input 2", value: "123456789", placeholder: "Input 2" },
    { label: "Input 3", value: "Dec 22, 2021", placeholder: "Input 3" },
    { label: "Input 4", value: "123456789", placeholder: "Input 4" },
  ];
  
  const additionalInputs = [
    { label: "Contract Number", placeholder: "Placeholder text" }, // Contract Number input
    { label: "Created On", value: "Dec 22, 2021", type: "DatePicker" },
    { label: "Created By", type: "Select", options: ["List item 1", "List item 2", "List item 3"] },
    { label: "Customer Reference", placeholder: "Placeholder text" },
  ];
  
  const InputGroup = ({ label, value, placeholder, type, options }) => (
    <div style={{ gap:"3px",display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <Label>{label}</Label>
      {type === "DatePicker" ? (
        <DatePicker
          value={value}
          primaryCalendarType="Gregorian"
          valueState="None"
        />
      ) : type === "Select" ? (
        <Select valueState="None">
          {options.map((option, index) => (
            <Option key={index}>{option}</Option>
          ))}
        </Select>
      ) : (
        <Input 
          placeholder={placeholder} 
          value={value || ""} // Ensure value is empty for placeholders
        //   readOnly 
          style={{ background: "#fff", border: '1px solid #f2f2f2' }} 
        />
      )}
    </div>
  );
  
  const SecNavBox = () => {
    return (
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
          border:"2px solid #f3f3f3",
          padding:"20px"
        }}
      >
        <FlexBox style={{ gap: "10px", flexDirection: "column" }} alignItems="center" justifyContent="center">
          {/* First Set of Inputs */}
          <FlexBox justifyContent="space-between" alignItems="center" style={{ gap: "10px", flexWrap: "wrap" }}>
            {inputData.map((input, index) => (
              <InputGroup key={index} {...input} />
            ))}
          </FlexBox>
  
          {/* Second Set of Inputs */}
          <FlexBox justifyContent="space-between" alignItems="center" style={{ gap: "10px", flexWrap: "wrap" }}>
            {additionalInputs.map((input, index) => (
              <InputGroup key={index} {...input} />
            ))}
          </FlexBox>
        </FlexBox>
  
        <Button design="Emphasized">Search</Button>
      </div>
    );
  };
  
  export default SecNavBox;
  