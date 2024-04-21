import React, { useState, useEffect } from "react";
import "../css/WantService.css"; // Import your CSS file
import { useNavigate } from "react-router-dom";
import Navbar from "../common/Navbar";

const WantService = () => {
  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year].join(" ");
  };

  const [service, setService] = useState("");
  const [date, setDate] = useState(formatDate(new Date())); // Default to today's date
  const [time, setTime] = useState("");
  const [numberOfRooms, setNumberOfRooms] = useState(1);
  const [roomSize, setRoomSize] = useState("");
  const [ledProducts, setLedProducts] = useState("");
  const [location, setLocation] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [serviceDetails, setServiceDetails] = useState([]); // Store available service details
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state
  const [submissionError, setSubmissionError] = useState(null); // Store any submission errors
  const navigate = useNavigate(); // Navigation hook

  // Fetch available service details (replace with your API call or data source)
  useEffect(() => {
    const fetchServiceDetails = async () => {
      // Mock service details
      const data = [
        {
          id: 1,
          name: "Installation",
          details: "Installation of LED products",
        },
        { id: 2, name: "Repair", details: "Repair of LED products" },
        {
          id: 3,
          name: "Custom Design",
          details: "Custom design of LED products",
        },
      ];
      setServiceDetails(data);
    };

    fetchServiceDetails();
  }, []);

  const handleServiceChange = (event) => {
    const value = event.target.value;
    setService(value);
    if (value === "3") {
      // If custom design is selected, reset custom design details
      setLedProducts("");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "date":
        setDate(value);
        break;
      case "time":
        setTime(value);
        break;
      case "numberOfRooms":
        setNumberOfRooms(Math.max(parseInt(value), 1)); // Ensure minimum value is 1
        break;
      case "roomSize":
        setRoomSize(value);
        break;
      case "ledProducts":
        setLedProducts(value);
        break;
      case "location":
        setLocation(value);
        break;
      case "pinCode":
        setPinCode(value);
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
      const response = await fetch("https://api.example.com/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service,
          date,
          time,
          numberOfRooms,
          roomSize,
          ledProducts,
          location,
          pinCode,
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const bookingData = await response.json();

      // Handle successful booking (clear form, show confirmation, etc.)
      console.log("Booking created successfully:", bookingData);
      clearForm(); // Add function to clear form fields
    } catch (error) {
      setSubmissionError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearForm = () => {
    setService("");
    setDate(formatDate(new Date()));
    setTime("");
    setNumberOfRooms(1);
    setRoomSize("");
    setLedProducts("");
    setLocation("");
    setPinCode("");
  };

  const goForPayment = () => {
    navigate("/payment");
  };

  return (
    <><Navbar/>
    <div className="want-service">
      <h1>Want Service</h1>
      <form onSubmit={handleSubmit}>
        {serviceDetails.length > 0 && (
          <>
            <label htmlFor="service">Service:</label>
            <select
              id="service"
              name="service"
              value={service}
              onChange={handleServiceChange}
            >
              <option value="">Select Service</option>
              {serviceDetails.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
            {service === "3" && ( // Show custom design details for custom design service
              <>
                <label htmlFor="ledProducts">Custom Design Details:</label>
                <input
                  type="text"
                  id="ledProducts"
                  name="ledProducts"
                  value={ledProducts}
                  onChange={handleInputChange}
                />
              </>
            )}
          </>
        )}

        {service === "2" && (
          <>
            <label htmlFor="repairDetails">Repair Details:</label>
            <input
              type="text"
              id="repairDetails"
              name="repairDetails"
              value={ledProducts}
              onChange={handleInputChange}
            />
          </>
        )}

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={handleInputChange}
        />

        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          name="time"
          value={time}
          onChange={handleInputChange}
        />

        <label htmlFor="numberOfRooms">Number of Rooms:</label>
        <input
          type="number"
          id="numberOfRooms"
          name="numberOfRooms"
          value={numberOfRooms}
          min="1"
          onChange={handleInputChange}
        />

        <label htmlFor="roomSize">Room Size:</label>
        <input
          type="text"
          id="roomSize"
          name="roomSize"
          value={roomSize}
          onChange={handleInputChange}
        />

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={location}
          onChange={handleInputChange}
        />

        <label htmlFor="pinCode">Pin Code:</label>
        <input
          type="text"
          id="pinCode"
          name="pinCode"
          value={pinCode}
          onChange={handleInputChange}
        />

        <button type="submit" disabled={isSubmitting} onClick={goForPayment}>
          Book Now
        </button>
        {submissionError && <p className="error">{submissionError}</p>}
      </form>
    </div>
    </>
  );
};

export default WantService;
