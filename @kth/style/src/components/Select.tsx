import React from "react";

const SelectContext = React.createContext<string>("");

interface SelectProps {
  /** HTML form `name` */
  name: string;

  /** Label for the select */
  label: string;

  /** Select description */
  description?: string;

  /** Current value of the select field */
  value: string;

  /** Called when the select value changes */
  onChange(value: string): void;

  /** Options */
  children: React.ReactNode;
}

interface OptionProps {
  /** The value for the option */
  value: string;

  /** Human-readable label for the option */
  children: string;
}

interface OptionGroupProps {
  label: string;
  children: React.ReactNode;
}

export function Select({
  name,
  label,
  description,
  value,
  onChange,
  children,
}: SelectProps) {
  const id = `select-${name}`;
  return (
    <SelectContext.Provider value={value}>
      <div className="kth-select">
        <label htmlFor={id}>{label}</label>
        {description && <p id={`${id}-description`}>{description}</p>}
        <select
          id={id}
          aria-describedby={description && `${id}-description`}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          {children}
        </select>
      </div>
    </SelectContext.Provider>
  );
}

export function OptionGroup({ label, children }: OptionGroupProps) {
  return <optgroup label={label}>{children}</optgroup>;
}

export function Option({ value, children }: OptionProps) {
  const selectedValue = React.useContext(SelectContext);

  return (
    <option value={value} selected={value === selectedValue}>
      {children}
    </option>
  );
}
