import React from "react";
import BookingCard from "../common/BookingCard"; // Correct import
import Navbar from "../common/Navbar";

const bookingData = [
    // LED Light Installation (2 variations)
    {
      id: 1,
      service: "Residential LED Installation",
      date: "2024-02-18",
      time: "10:00 AM",
      product: "LED Strip Lights - 5m",
      productDetails: "Warm white color, dimmable control included",
      designDetails: "Living room - Undercabinet lighting",
      amount: 350,
      gst: 63,
      extraFees: 15, // Travel charge
    },
    {
      id: 2,
      service: "Commercial LED Installation",
      date: "2024-02-20",
      time: "09:00 AM",
      product: "LED Panel Lights",
      productDetails: "Cool white color, 60W equivalent",
      amount: 500,
      gst: 90,
      extraFees: 30, // Installation material costs
    },
  
    // LED Light Repair (2 variations)
    {
      id: 3,
      service: "LED Repair and Maintenance",
      date: "2024-02-19",
      time: "02:00 PM",
      repairDetails: "Replace faulty LED driver",
      repairProductId: "ABC123", // ID of the repairing product
      repairProductDetails: "Kitchen ceiling light - Flickering issue",
      amount: 120,
      extraFees: 20, // Travel charge
    },
    {
      id: 4,
      service: "LED Troubleshooting",
      date: "2024-02-21",
      time: "11:00 AM",
      repairDetails: "Diagnose flickering issue",
      amount: 80,
    },
  
    // Custom LED Design (2 variations)
    {
      id: 5,
      service: "Residential LED Design Consultation",
      date: "2024-02-20",
      time: "11:30 AM",
      designDetails: "Living room - Accent lighting with smart control",
      amount: 250,
    },
    {
      id: 6,
      service: "Commercial LED Design Proposal",
      date: "2024-02-23",
      time: "03:00 PM",
      designDetails: "Office space - Energy-efficient lighting solution",
      amount: 750,
      gst: 135,
    },
  
    // No installation or repair details
    {
      id: 7,
      service: "LED Product Consultation",
      date: "2024-02-22",
      time: "04:00 PM",
      amount: 30,
    },
  ];
  

const Bookings = () => {
  return (
    <>
    <Navbar />
    <div className="my-bookings">
      <h1>My Bookings</h1>
      <ul className="bookings-list">
        
        {bookingData.map((booking) => (
          <BookingCard key={booking.id} booking={booking} />
        ))}
      </ul>
      {bookingData.length === 0 && <p>No bookings found.</p>}
    </div>
    </>
  );
};

export default Bookings;
