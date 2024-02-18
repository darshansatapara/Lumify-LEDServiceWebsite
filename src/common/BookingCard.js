import React, { useState } from 'react';
import '../css/BookingCard.css'; // Assuming `BookingCard.css` exists and styles the card elements

const BookingCard = ({ booking, onCancel, cancellationPolicy }) => {
  const {
    id, // Required for cancellation logic
    service,
    date,
    time,
    product,
    productDetails,
    designDetails,
    repairDetails,
    repairProductId,
    repairProductDetails,
    amount,
    gst,
    extraFees,
  } = booking;

  const [isCancelling, setIsCancelling] = useState(false); // Track cancellation state
  const [cancellationReason, setCancellationReason] = useState(''); // Store cancellation reason

  const calculateCancellationCharge = () => {
    // Implement your cancellation policy logic here
    // This example demonstrates a flat 20% cancellation fee
    // Adjust based on your actual policy and data structure
    if (date > new Date().toISOString().split('T')[0]) {
      // No charge if cancelled before booking date
      return 0;
    } else {
      return amount * 0.2;
    }
  };

  const handleCancel = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setIsCancelling(true);
  };

  const handleCancelConfirmation = () => {
    // Perform actual cancellation logic here (API call, etc.)
    // Notify the user of cancellation success/failure

    // Assuming successful cancellation, call the provided onCancel function
    onCancel(id);
  };

  const handleCancelReasonChange = (event) => {
    setCancellationReason(event.target.value);
  };

  return (
    <div className="booking-card">
      <div className="booking-header">
        <h3>Service: {service}</h3>
        <p>Date: {date}</p>
        <p>Time: {time}</p>
      </div>

      {/* {renderProductDetails()} */}

      {designDetails && (
        <div className="booking-details">
          <h4>Design Details:</h4>
          <p>{designDetails}</p>
        </div>
      )}

      {repairDetails && (
        <div className="booking-details">
          <h4>Repair Details:</h4>
          <p>{repairDetails}</p>
        </div>
      )}

      <div className="booking-footer">
        <p>Amount: {amount.toFixed(2)} (currency symbol here)</p>
        {gst && <p>GST: {gst.toFixed(2)} (currency symbol here)</p>}
        {extraFees && <p>Extra Fees: {extraFees.toFixed(2)} (currency symbol here)</p>}
        <p className="total">
          Total: {
            (amount + (gst || 0) + (extraFees || 0)).toFixed(2)
          }
          (currency symbol here)
        </p>

        {isCancelling ? (
          <div className="cancellation-form">
            <h4>Cancellation Confirmation</h4>
            <p>
              Are you sure you want to cancel this booking? Please provide a reason.
            </p>
            <form onSubmit={handleCancelConfirmation}>
              <textarea
                value={cancellationReason}
                onChange={handleCancelReasonChange}
                placeholder="Reason for cancellation..."
                required
              />
              <div className="cancellation-buttons">
                <button type="submit">Confirm Cancellation</button>
                <button type="button" onClick={() => setIsCancelling(false)}>
                  Cancel Cancellation
                </button>
              </div>
            </form>
            <p>
              A cancellation fee of
              {calculateCancellationCharge().toFixed(2)}
              (currency symbol here) will apply.
            </p>
          </div>
        ) : (
          <button onClick={handleCancel}>Cancel Booking</button>
        )}
      </div>

      {cancellationPolicy && (
        <p className="cancellation-policy">
          Cancellation Policy: {cancellationPolicy}
        </p>
      )}
    </div>
  );
};

export default BookingCard;
