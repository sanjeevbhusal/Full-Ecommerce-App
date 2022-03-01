import "./custom-button.styles.scss";
const CustomButton = ({ children, isGoogleButton, ...otherProps }) => {
   return (
      <button
         className={`${isGoogleButton ? "google-btn " : ""}custom-button`}
         {...otherProps}
      >
         {children}
      </button>
   );
};

export default CustomButton;
