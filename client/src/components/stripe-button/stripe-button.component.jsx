import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeButton = ({ price }) => {
  //stripe needs amount in cents
  const amountInCents = price * 100;
  const publishableKey =
    "pk_test_51KbQqZB493goCcvpbOWAjzagknTg2pprfW9sRtzXusoFVnMzjcP8xSDEZhwK9SaQ6LnzXudqeawPESz45vqZuKBJ00Bu2vn6Kq";

  //Runs when we submit the payment
  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: amountInCents,
        token: token,
      },
    })
      .then((response) => {
        alert("succesful payment");
      })
      .catch((error) => {
        console.log("Payment Error: ", error);
        alert(
          "There was an issue with your payment! Please make sure you use the provided credit card."
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="ABC Clothing Pvt.Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your Total is ${price} $`}
      amount={amountInCents}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
