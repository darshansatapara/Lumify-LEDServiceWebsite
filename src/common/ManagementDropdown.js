import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";

export default function ManagementDropdown({ onChange }) {
  const [SelectedManagement, setSelectedManagement] = useState(null);
  const managementCategory = [
    { name: "Product Management" },
    { name: "Application Management" },
  ];
  const selectedManagementTemplate = (option, props) => {
    if (option) {
      return <div>{option.name}</div>;
    }

    return <span>{props.placeholder}</span>;
  };
  const handleManagementChange = (e) => {
    const selected = e.value;
    setSelectedManagement(selected);
    onChange(selected);
  };

  return (
    <div className="my-3 flex justify-content-center">
      <Dropdown
        value={SelectedManagement}
        onChange={handleManagementChange}
        options={managementCategory}
        optionLabel="name"
        placeholder="Select Management"
        valueTemplate={selectedManagementTemplate}
        className="w-full md:w-14rem"
      />
    </div>
  );
}
