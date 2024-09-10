import React from "react";
import axios from "axios";

const Payment = ({ amount }) => {
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const scriptLoaded = await loadRazorpayScript();

    if (!scriptLoaded) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    try {
      const orderResponse = await axios.post("http://127.0.0.1:8000/website/create-order/", {
        amount: amount,
        cart_id: "12345", // example cart_id, replace with actual
      });

      const { order_id, amount: orderAmount, currency } = orderResponse.data;

      const options = {
        key: "rzp_test_sYDXizFjDxb4Vw", // Enter your Razorpay key ID
        amount: orderAmount,
        currency: currency,
        name: "Your Company Name",
        description: "Test Transaction",
        order_id: order_id,
        handler: async (response) => {
          try {
            const paymentVerificationResponse = await axios.post("http://127.0.0.1:8000/website/verify-payment/", {
              order_id: response.razorpay_order_id,
              payment_id: response.razorpay_payment_id,
              signature: response.razorpay_signature,
            });

            alert("Payment successful");
          } catch (error) {
            console.error("Payment verification failed", error);
            alert("Payment verification failed");
          }
        },
        prefill: {
          name: "John Doe",
          email: "john.doe@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzpay = new window.Razorpay(options);
      rzpay.open();
    } catch (error) {
      console.error("Payment initiation failed", error);
      alert("Payment initiation failed");
    }
  };

  return (
    <div>
      <button onClick={handlePayment}>Enroll {amount}</button>
    </div>
  );
};

export default Payment;
