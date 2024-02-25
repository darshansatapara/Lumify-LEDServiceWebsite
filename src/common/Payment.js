import React, { useState } from "react";
import "../css/Payment.css"; // Import your CSS file

const PaymentPage = ({ bookingData, onPaymentSuccess }) => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePayment = (method) => {
    // Handle payment logic for the selected method
    // For example, redirect to the respective payment gateway or show QR code
    switch (method) {
      case "onlineBanking":
        // Redirect to online banking payment gateway
        window.location.href = "https://example.com/online-banking-payment";
        break;
      case "paytm":
        // Redirect to Paytm payment gateway
        window.location.href = "https://example.com/paytm-payment";
        break;
      case "googlePay":
        // Redirect to Google Pay payment gateway
        window.location.href = "https://example.com/google-pay-payment";
        break;
      case "qrPayment":
        // Show QR code for payment
        alert("Show QR code for payment");
        break;
      default:
        break;
    }
  };
  const handleCardPayment = (cardType) => {
    // Handle card payment logic
    alert(`Processing card payment with ${cardType}`);
  };

  return (
    <div className="payment-page-container">
      <h1>Make Payment</h1>
      <div className="payment-options">
        <button
          className="payment-button"
          onClick={() => handlePayment("onlineBanking")}
        >
          Online Banking
        </button>
        <button
          className="payment-button"
          onClick={() => handlePayment("paytm")}
        >
          Paytm
        </button>
        <button
          className="payment-button"
          onClick={() => handlePayment("googlePay")}
        >
          Google Pay
        </button>
        <button
          className="payment-button"
          onClick={() => handlePayment("qrPayment")}
        >
          QR Payment
        </button>
      </div>
      <div className="card-payment">
        <h2>Pay with Card</h2>
        <div className="card-types">
          <button
            className="card-type"
            onClick={() => handleCardPayment("Visa")}
          >
            Visa
          </button>
          <button
            className="card-type"
            onClick={() => handleCardPayment("Mastercard")}
          >
            Mastercard
          </button>
          <button
            className="card-type"
            onClick={() => handleCardPayment("American Express")}
          >
            American Express
          </button>
          {/* Add more card types as needed */}
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
