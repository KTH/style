/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";

/** Context for Radio buttons */
const RadioContext = React.createContext<{
  /** Value of the selected option */
  value: string;

  /** Triggered when the selected option changes */
  onChange: (value: string) => void;
}>({
  value: "",
  onChange: () => {},
});

interface RadioGroupProps {
  /** Options */
  children: React.ReactElement<RadioProps> | React.ReactElement<RadioProps>[];

  /** The value of the selected radio button */
  value: string;

  /** The callback function when a different choice is made by the user */
  onChange: (value: string) => void;
}

interface RadioProps {
  /** The value of the radio button */
  value: string;

  /** The label of the radio button */
  label: string;
}

/** Implemented as fancy radio buttons */
export function FilterTabs({ children, value, onChange }: RadioGroupProps) {
  return (
    <RadioContext.Provider value={{ value, onChange }}>
      <fieldset className="kth-filter-tabs">
        {React.Children.map(children, (child) => {
          return child;
        })}
      </fieldset>
    </RadioContext.Provider>
  );
}

/** A single radio button */
export function Radio({ value, label }: RadioProps) {
  const name = "radio";
  const { value: selectedValue, onChange } = React.useContext(RadioContext);
  const checked = selectedValue === value;

  return (
    <div className="kth-radio">
      <input
        onChange={() => onChange(value)}
        type="radio"
        id={value}
        name={name}
        value={value}
        checked={checked}
      />
      <label htmlFor={value}>{label}</label>
    </div>
  );
}
