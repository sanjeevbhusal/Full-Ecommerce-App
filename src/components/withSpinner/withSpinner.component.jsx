import { SpinnerContainer, SpinnerOverlay } from "./withSpinner.styles";

const WithSpinner = (Component) => {
  const ComponentwithSpinner = (props) => {
    const { isLoading, ...otherProps } = props;

    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <Component {...otherProps} />
    );
  };

  return ComponentwithSpinner;
};

export default WithSpinner;
