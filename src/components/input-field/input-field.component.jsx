import { Group, Label, Input } from "./input-field.styles";

const InputField = ({ handleChange, label, ...otherProps }) => {
   return (
      <Group>
         <Input onChange={handleChange} {...otherProps} />
         {label ? <Label {...otherProps}>{label}</Label> : null}
      </Group>
   );
};

export default InputField;
