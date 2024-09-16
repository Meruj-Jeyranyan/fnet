import { forwardRef } from "react";
import Select from "react-select";
import { capitalizeFirstLetter, generateOptions } from "utils";
import styled from "styled-components";
import { customStyles, ErrorText, Container } from "./Select.styles";

const CustomSelect = styled(Select)`
  width: 100%;
`;

const CustomSelectComponent = forwardRef(
  (
    {
      error,
      value,
      onChange,
      onInputChange,
      options,
      placeholder,
      noOptionsMessage,
      isMulti,
      isClearable,
      styles = customStyles,
      ...props
    },
    ref
  ) => {
    const selectOptions = generateOptions(options);

    return (
      <Container>
        <CustomSelect
          className={error && "error-border"}
          ref={ref}
          value={value ? capitalizeFirstLetter(value) : null}
          onChange={onChange}
          onInputChange={onInputChange}
          options={selectOptions}
          isMulti={isMulti}
          placeholder={placeholder || "Select value..."}
          styles={styles}
          noOptionsMessage={() => noOptionsMessage || "No options available"}
          isClearable={isClearable}
          {...props}
        />
        {error && <ErrorText>{error}</ErrorText>}
      </Container>
    );
  }
);

export default CustomSelectComponent;
