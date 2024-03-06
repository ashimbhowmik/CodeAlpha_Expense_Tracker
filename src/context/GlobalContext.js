"use client";

import { createContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [view, setView] = useState("home");
  const [selectedImage, setSelectedImage] = useState(null);
  const [compressedImageDataURL, setCompressedImageDataURL] = useState(null);
  const [storedFormData, setStoredFormData] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    work: "",
    image: null, // Initialize image field to null
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const compressAndStoreImage = async () => {
    if (!selectedImage) {
      alert("Please select an image first.");
      return;
    }

    let reader = new FileReader();
    reader.readAsDataURL(selectedImage);

    reader.onload = (event) => {
      let image_url = event.target.result;
      let image = new Image();
      image.src = image_url;

      image.onload = (e) => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        // Set maximum width for resizing
        const maxWidth = 800;
        const ratio = maxWidth / e.target.width;
        canvas.width = maxWidth;
        canvas.height = e.target.height * ratio;

        // Draw the image onto the canvas
        context.drawImage(image, 0, 0, canvas.width, canvas.height);

        // Convert the canvas to a data URL with JPEG format and quality 0.9
        const new_image_url = canvas.toDataURL("image/jpeg", 0.9);

        // Create new Image object for storing compressed image
        const new_image = new Image();
        new_image.src = new_image_url;

        new_image.onload = () => {
          // Update state with the compressed image data URL
          setCompressedImageDataURL(new_image_url);

          // Update form data with the compressed image data URL
          setFormData({
            ...formData,
            image: new_image_url,
          });

          // Store the compressed image data URL in localStorage
          localStorage.setItem("compressedImage", new_image_url);
        };
      };
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Store the data in localStorage
    localStorage.setItem("formData", JSON.stringify(formData));

    // Clear the form fields
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      work: "",
      image: null,
    });

    const notify = () => toast.success("Data Save Sucsefully");
    notify();

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  useEffect(() => {
    // Retrieve stored compressed image data URL from localStorage

    const storedCompressedImageDataURL =
      localStorage.getItem("compressedImage");

    if (storedCompressedImageDataURL) {
      setCompressedImageDataURL(storedCompressedImageDataURL);
    }

    // Retrieve stored form data from localStorage
    const storedFormData = JSON.parse(localStorage.getItem("formData"));
    if (storedFormData) {
      setStoredFormData(storedFormData);
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        view,
        setView,
        selectedImage,
        setSelectedImage,
        compressedImageDataURL,
        setCompressedImageDataURL,
        storedFormData,
        setStoredFormData,
        formData,
        setFormData,
        handleSubmit,
        compressAndStoreImage,
        handleInputChange,
        handleFileChange,
      }}
    >
      {children}
      <Toaster />
    </GlobalContext.Provider>
  );
}
