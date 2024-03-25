"use client";

import { createContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [view, setView] = useState("home");
  const [selectedImage, setSelectedImage] = useState(null);
  const [compressedImageDataURL, setCompressedImageDataURL] = useState(null);
  const [storedFormData, setStoredFormData] = useState(null);
  const [storedIncomeData, setStoredIncomeData] = useState([]);
  const [storedExpenseData, setStoredExpenseData] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    work: "",
    image: null, // Initialize image field to null
  });
  const [income, setInome] = useState({
    incomeData: "",
    amount: "",
    date: "",
    ref: "",
  });
  const [expense, setExpense] = useState({
    expenseData: "",
    amount: "",
    date: "",
    ref: "",
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
  const handleInputChange2 = (event) => {
    const { name, value } = event.target;

    // Check if the input is a valid number greater than 0
    if (name === "amount" && (isNaN(value) || parseFloat(value) <= 0)) {
      alert("Amount is invalid");
    } else {
      // Update the income state with the valid input value
      setInome({
        ...income,
        [name]: value,
      });
    }
  };
  const handleExpense = (event) => {
    const { name, value } = event.target;
    if (name === "amount" && (isNaN(value) || parseFloat(value) <= 0)) {
      alert("Amount is invalid");
    } else {
      setExpense({
        ...expense,
        [name]: value,
      });
    }
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

  // Login form data

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

  // Income data

  const handleSubmitIncome = (event) => {
    event.preventDefault();

    // Store the data in localStorage
    const currentIncomeData =
      JSON.parse(localStorage.getItem("incomeData")) || []; // Get current data or initialize as empty array
    const newIncomeData = [...currentIncomeData, income]; // Add new income data to the array
    localStorage.setItem("incomeData", JSON.stringify(newIncomeData));

    setStoredIncomeData(newIncomeData);

    // Clear the form fields
    setInome({
      incomeData: "",
      amount: "",
      date: "",
      ref: "",
    });

    const notify = () => toast.success("Income Saved Successfully");
    notify();
  };

  useEffect(() => {
    const storedIncomeData = JSON.parse(localStorage.getItem("incomeData"));
    if (storedIncomeData) {
      setStoredIncomeData(storedIncomeData);
    }
  }, [compressedImageDataURL]);

  const deleteIncomeItem = (index) => {
    // Create a copy of the stored income data array
    const updatedIncomeData = [...storedIncomeData];
    // Remove the income item at the specified index
    const deletedItem = updatedIncomeData.splice(index, 1)[0];
    // Update the state with the modified array
    setStoredIncomeData(updatedIncomeData);

    // Update localStorage to remove the deleted item
    const updatedLocalStorageData = JSON.parse(
      localStorage.getItem("incomeData")
    );
    updatedLocalStorageData.splice(index, 1);
    localStorage.setItem("incomeData", JSON.stringify(updatedLocalStorageData));
  };

  // Expense data

  const handleSubmitExpense = (event) => {
    event.preventDefault();

    const currentExpense =
      JSON.parse(localStorage.getItem("expenseData")) || [];
    const setNewExpense = [...currentExpense, expense];
    localStorage.setItem("expenseData", JSON.stringify(setNewExpense));

    setStoredExpenseData(setNewExpense);

    // Clear the form fields
    setExpense({
      expenseData: "",
      amount: "",
      date: "",
      ref: "",
    });

    const notify = () => toast.success("Expense Saved Successfully");
    notify();
  };

  useEffect(() => {
    const storedExpenseData = JSON.parse(localStorage.getItem("expenseData"));
    if (storedExpenseData) {
      setStoredExpenseData(storedExpenseData);
    }
  }, [compressedImageDataURL]);

  const deleteExpense = (index) => {
    // Create a copy of the stored income data array
    const updateExpense = [...storedExpenseData];
    // Remove the income item at the specified index
    const deletedItem = updateExpense.splice(index, 1)[0];
    // Update the state with the modified array
    setStoredExpenseData(updateExpense);

    // Update localStorage to remove the deleted item
    const updatedLocalStorageData = JSON.parse(
      localStorage.getItem("expenseData")
    );
    updatedLocalStorageData.splice(index, 1);
    localStorage.setItem(
      "expenseData",
      JSON.stringify(updatedLocalStorageData)
    );
  };
  const signoutData = () => {
    localStorage.removeItem("formData");
    localStorage.removeItem("compressedImage");
    window.location.reload();
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
        income,
        setInome,
        handleSubmitIncome,
        handleInputChange2,
        storedIncomeData,
        deleteIncomeItem,
        expense,
        handleExpense,
        handleSubmitExpense,
        storedExpenseData,
        deleteExpense,
        signoutData,
      }}
    >
      {children}
      <Toaster />
    </GlobalContext.Provider>
  );
}
