import React from "react";

const Select = ({
  options,
  onChange,
  defaultValue,
  optionLabel,
  valueLabel,
}) => {
  const handleOnchange = (selected_value) => {
    const option_value =
      options[selected_value][valueLabel] || options[selected_value];
    onChange(option_value);
  };

  return (
    <select
      onChange={({ target: { value } }) => handleOnchange(+value)}
      defaultValue={defaultValue}
    >
      {options.map((option, index) => (
        <option key={index} value={index}>
          {option[optionLabel]}
        </option>
      ))}
    </select>
  );
};

export default Select;
