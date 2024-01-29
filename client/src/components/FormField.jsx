import React from "react";

const FormField = ({
  labelName,
  type,
  name,
  placeHolder,
  value,
  handleChange,
  isSupriseMe,
  handleSupriseMe,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor="name"
          className="block text-sm text-gray-900 font-medium"
        >
          {labelName}
        </label>
      </div>
    </div>
  );
};

export default FormField;
