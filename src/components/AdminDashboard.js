// Frontend: ProductUpload.js

import React, { useState } from "react";
import client from "../axios/axiosFile";

const ProductUpload = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("image", image);

    // Convert image file to base64 string
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
      formData.append("image", reader.result);

      client
        .post("/api/manageproduct/upload/product", formData)
        .then(() => {
          console.log("Product uploaded successfully!");
        })
        .catch((error) => {
          console.error("Error uploading product: ", error);
        });
    };
    reader.onerror = (error) => {
      console.error("Error converting image to base64: ", error);
    };
  };

  return (
    <div>
      <h2>Product Upload</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label>Image:</label>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default ProductUpload;
