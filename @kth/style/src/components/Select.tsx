import React from "react";

interface SelectProps {
  /** Equivalent to HTML `name` */
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

  /**
   * Error message if the field has errors. `undefined` here means the field
   * contains no error.
   */
  error?: string;
}

interface OptionProps {
  /** The value for the option */
  value: string;

  /** Human-readable label for the option */
  children: string;

  /** True if the option should be disabled */
  disabled: boolean;
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
  error,
}: SelectProps) {
  const id = `select-${name}`;
  return (
    <div className="kth-select">
      <label htmlFor={id}>{label}</label>
      {description && <p id={`${id}-description`}>{description}</p>}
      <select
        id={id}
        aria-describedby={description && `${id}-description`}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={error !== undefined ? "true" : "false"}
      >
        {children}
      </select>
      {error && (
        <p className="kth-select__error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export function OptionGroup({ label, children }: OptionGroupProps) {
  return <optgroup label={label}>{children}</optgroup>;
}

export function Option({ value, children, disabled }: OptionProps) {
  return (
    <option value={value} disabled={disabled}>
      {children}
    </option>
  );
}
