import styled from "styled-components";

export const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#194866" : "#FFFFFF",
    color: state.isSelected ? "#FFFFFF" : "#4D4D4D",
    padding: "8px",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "#f8f8f8",
      color: "#FFFFFF",
    },
  }),
  control: (provided) => ({
    ...provided,
    borderRadius: "12px",
    borderColor: "#194866CC",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#194866CC",
      maxWidth: "100%",
    },
    minHeight: "48px",
    marginBottom: "16px",
  }),
  input: (provided) => ({
    ...provided,
    color: "#4D4D4D",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#A0A0A0",
    fontSize: "13.5px",
  }),
  menu: (provided, state) => ({
    ...provided,
    backgroundColor: "#FFFFFF",
    borderRadius: "12px",
    marginTop: "0px",
    zIndex: 3,
  }),
  clearIndicator: (provided) => ({
    ...provided,
    cursor: "pointer",
  }),
};

export const ErrorText = styled.legend`
  color: red;
  font-size: 14px;
  font-weight: 300;
  margin-top: 4px;
  padding: 3px;
  background-color: #fff;
  position: absolute;
  top: -15px !important;
  left: 10px !important;
`;

export const Container = styled.div`
  position: relative;
`;
