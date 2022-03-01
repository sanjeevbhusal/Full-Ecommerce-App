import "./form-input.styles.scss";
const FormInput = ({ handleChange, label, ...otherProps }) => {
   return (
      <div className="group">
         <input
            className="form-input"
            onChange={handleChange}
            id={otherProps.name}
            {...otherProps}
         />
         {label ? (
            <label
               className={`${
                  otherProps.value.length ? "shrink " : ""
               }form-input-label`}
               htmlFor={otherProps.name}
            >
               {label}
            </label>
         ) : null}
      </div>
   );
};

export default FormInput;
