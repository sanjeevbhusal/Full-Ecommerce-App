import "./custom-button.styles.scss";
const CustomButton = ({
   children,
   inverted,
   isGoogleButton,
   ...otherProps
}) => {
   return (
      <button
         className={` ${inverted ? "inverted" : ""}${
            isGoogleButton ? "google-btn " : ""
         } custom-button`}
         {...otherProps}
      >
         {children}
      </button>
   );
};

export default CustomButton;
