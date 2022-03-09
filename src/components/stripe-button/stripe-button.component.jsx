import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
   //stripe needs amount in cents
   const amountInCents = price * 100;
   const publishableKey =
      "pk_test_51KbQqZB493goCcvpbOWAjzagknTg2pprfW9sRtzXusoFVnMzjcP8xSDEZhwK9SaQ6LnzXudqeawPESz45vqZuKBJ00Bu2vn6Kq";

   //Runs if payment is succesful
   const onToken = (token) => {
      console.log(token);
      alert("Payment Succesfull");
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
