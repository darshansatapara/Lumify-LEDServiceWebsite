import React, { useState } from 'react';
import '../css/Payment.css'; // Import your CSS file
import Navbar from './Navbar';

const PaymentPage = ({ bookingData, onPaymentSuccess }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
    bank: '',
    paymentApp: '',
    qrCode: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handlePaymentSubmit = () => {
    // Handle payment submission based on the selected method
    switch (paymentMethod) {
      case 'card':
        // Submit card payment details
        console.log('Submitting card payment details:', paymentDetails);
        break;
      case 'bank':
        // Submit bank payment details
        console.log('Submitting bank payment details:', paymentDetails);
        break;
      case 'paymentApp':
        // Submit payment app payment details
        console.log('Submitting payment app payment details:', paymentDetails);
        break;
      case 'qrCode':
        // Submit QR code payment details
        console.log('Submitting QR code payment details:', paymentDetails);
        break;
      default:
        break;
    }
  };

  return (
    <>
    <Navbar/>
    <div className="payment-page-container">
      <h1>Make Payment</h1>
      <div className="payment-options">
        <button className="payment-option" onClick={() => setPaymentMethod('card')}>
          Pay with Card
        </button>
        <button className="payment-option" onClick={() => setPaymentMethod('bank')}>
          Pay with Bank
        </button>
        <button className="payment-option" onClick={() => setPaymentMethod('paymentApp')}>
          Pay with Payment App
        </button>
        <button className="payment-option" onClick={() => setPaymentMethod('qrCode')}>
          Pay with QR Code
        </button>
      </div>
      {paymentMethod && (
        <div className="payment-details">
          <h2>{paymentMethod === 'card' ? 'Card Details' : paymentMethod === 'bank' ? 'Bank Details' : paymentMethod === 'paymentApp' ? 'Payment App Details' : 'QR Code Details'}</h2>
          <form onSubmit={handlePaymentSubmit}>
            {paymentMethod === 'card' && (
              <>
                <input type="text" name="cardNumber" placeholder="Card Number" onChange={handleInputChange} required />
                <input type="text" name="expiryDate" placeholder="Expiry Date" onChange={handleInputChange} required />
                <input type="text" name="cvv" placeholder="CVV" onChange={handleInputChange} required />
                <input type="text" name="nameOnCard" placeholder="Name on Card" onChange={handleInputChange} required />
              </>
            )}
            {paymentMethod === 'bank' && (
              <>
                <input type="text" name="bank" placeholder="Bank Name" onChange={handleInputChange} required />
                {/* Add more bank-related inputs as needed */}
              </>
            )}
            {paymentMethod === 'paymentApp' && (
              <>
                <input type="text" name="paymentApp" placeholder="Payment App" onChange={handleInputChange} required />
                {/* Add more payment app-related inputs as needed */}
              </>
            )}
            {paymentMethod === 'qrCode' && (
              <>
                <input type="text" name="qrCode" placeholder="QR Code" onChange={handleInputChange} required />
                {/* Add more QR code-related inputs as needed */}
              </>
            )}
            <button type="submit">Submit Payment</button>
          </form>
        </div>
      )}
    </div>
    </>
  );
};

export default PaymentPage;
