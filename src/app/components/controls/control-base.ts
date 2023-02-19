export interface ControlBase {
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  type: string;
  options: { key: string; value: string }[];
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  accessLevel: string;
  class?:string;
  name?:string| null;
}
