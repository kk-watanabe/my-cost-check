export default interface SelectOption {
  label: string;
  value: string | number;
}

export interface SelectBoxProps {
  modelValue: string;
  options: SelectOption[];
  disabled: boolean;
}
