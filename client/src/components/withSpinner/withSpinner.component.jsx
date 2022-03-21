import { SpinnerContainer, SpinnerOverlay } from "./withSpinner.styles";

const WithSpinner = (Component) => {
  const ComponentwithSpinner = ({ isLoading, productId }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <Component productId={productId} />
    );
  };

  return ComponentwithSpinner;
};

export default WithSpinner;
