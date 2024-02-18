import React, { useState, useEffect } from 'react';
import '../css/WantService.css'; // Import your CSS file

const WantService = () => {
  const [service, setService] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]); // Default to today's date
  const [time, setTime] = useState('');
  const [product, setProduct] = useState('');
  const [productDetails, setProductDetails] = useState('');
  const [designDetails, setDesignDetails] = useState('');
  const [repairDetails, setRepairDetails] = useState('');
  const [repairProductId, setRepairProductId] = useState('');
  const [repairProductDetails, setRepairProductDetails] = useState('');
  const [serviceDetails, setServiceDetails] = useState([]); // Store available service details
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state
  const [submissionError, setSubmissionError] = useState(null); // Store any submission errors

  // Fetch available service details (replace with your API call or data source)
  useEffect(() => {
    const fetchServiceDetails = async () => {
      // Mock service details
      const data = [
        { id: 1, name: 'Installation', defaultProduct: '', defaultProductDetails: '' },
        { id: 2, name: 'Repair', defaultProduct: '', defaultProductDetails: '' },
        { id: 3, name: 'Custom Design', defaultProduct: '', defaultProductDetails: '' },
      ];
      setServiceDetails(data);
    };

    fetchServiceDetails();
  }, []);

  const handleServiceChange = (event) => {
    setService(event.target.value);
    // Reset other fields based on the selected service

    setProduct('');
    setProductDetails('');
    setDesignDetails('');
    setRepairDetails('');
    setRepairProductId('');
    setRepairProductDetails('');

    const selectedService = serviceDetails.find((s) => s.id === parseInt(event.target.value));
    if (selectedService) {
      // Pre-populate fields based on service details (modify based on your data structure)
      setProduct(selectedService.defaultProduct || '');
      setProductDetails(selectedService.defaultProductDetails || '');
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'date':
        setDate(value);
        break;
      case 'time':
        setTime(value);
        break;
      case 'product':
        setProduct(value);
        break;
      case 'productDetails':
        setProductDetails(value);
        break;
      case 'designDetails':
        setDesignDetails(value);
        break;
      case 'repairDetails':
        setRepairDetails(value);
        break;
      case 'repairProductId':
        setRepairProductId(value);
        break;
      case 'repairProductDetails':
        setRepairProductDetails(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      // Implement form validation (add your validation logic here)

      // Submit booking data to your backend (replace with your API call or logic)
      const response = await fetch('https://api.example.com/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service,
          date,
          time,
          product,
          productDetails,
          designDetails,
          repairDetails,
          repairProductId,
          repairProductDetails,
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const bookingData = await response.json();

      // Handle successful booking (clear form, show confirmation, etc.)
      console.log('Booking created successfully:', bookingData);
      clearForm(); // Add function to clear form fields

    } catch (error) {
      setSubmissionError(error.message);
    } finally {
      setIsSubmitting(true);
    }
  };

  const clearForm = () => {
    setService('');
    setDate(new Date().toISOString().split('T')[0]);
    setTime('');
    setProduct('');
    setProductDetails('');
    setDesignDetails('');
    setRepairDetails('');
    setRepairProductId('');
    setRepairProductDetails('');
  };

  return (
    <div className="want-service">
      <h1>Want Service</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="service">Service:</label>
        <select id="service" name="service" value={service} onChange={handleServiceChange}>
          <option value="">Select Service</option>
          {serviceDetails.map((s) => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </select>

        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" value={date} onChange={handleInputChange} />

        <label htmlFor="time">Time:</label>
        <input type="time" id="time" name="time" value={time} onChange={handleInputChange} />

        {service === 'Installation' && (
          <>
            <label htmlFor="product">Product:</label>
            <input type="text" id="product" name="product" value={product} onChange={handleInputChange} />

            <label htmlFor="productDetails">Product Details:</label>
            <textarea id="productDetails" name="productDetails" value={productDetails} onChange={handleInputChange} />
          </>
        )}

        {service === 'Custom Design' && (
          <>
            <label htmlFor="designDetails">Design Details:</label>
            <textarea id="designDetails" name="designDetails" value={designDetails} onChange={handleInputChange} />
          </>
        )}

        {service === 'Repair' && (
          <>
            <label htmlFor="repairDetails">Repair Details:</label>
            <textarea id="repairDetails" name="repairDetails" value={repairDetails} onChange={handleInputChange} />

            <label htmlFor="repairProductId">Repair Product ID:</label>
            <input type="text" id="repairProductId" name="repairProductId" value={repairProductId} onChange={handleInputChange} />

            <label htmlFor="repairProductDetails">Repair Product Details:</label>
            <textarea id="repairProductDetails" name="repairProductDetails" value={repairProductDetails} onChange={handleInputChange} />
          </>
        )}

        <button type="submit" disabled={isSubmitting}>Submit</button>
        {submissionError && <p className="error">{submissionError}</p>}
      </form>
    </div>
  );
};

export default WantService;
