import AsyncSelect from "react-select/async";
import { capitalizeFirstLetter } from "utils";
import styled from "styled-components";
import { customStyles } from "./Select.styles";

const CustomAsyncSelect = styled(AsyncSelect)`
  width: 100%;
`;

const CustomAsyncSelectComponent = ({
  value,
  defaultValue,
  defaultOptions,
  onChange,
  onInputChange,
  loadOptions,
  loadingMessage = "loading...",
  isMulti,
  isLoading,
  isClearable,
  placeholder,
  styles = customStyles,
  ...props
}) => {
  return (
    <CustomAsyncSelect
      // inputValue={inputValue}
      value={capitalizeFirstLetter(value?.label)}
      defaultValue={defaultValue}
      defaultOptions={defaultOptions}
      onChange={onChange}
      onInputChange={onInputChange}
      loadOptions={loadOptions}
      loadingMessage={() => loadingMessage}
      isMulti={isMulti}
      isLoading={isLoading}
      isClearable={isClearable}
      placeholder={placeholder || "Select value ..."}
      styles={styles}
      {...props}
    />
  );
};

export default CustomAsyncSelectComponent;
