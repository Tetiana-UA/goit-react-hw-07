import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://65fd388c9fc4425c65316bb6.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contact/addContact",
  async (newContact, thunkApi) => {
    try {
      console.log("addContact");
      const response = await axios.post("/contacts", newContact);
      //бекенд поверне створений обєкт ( id додасть база даних), який ми обробимо в extrareducers
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contact/deleteContact",
  async (contactId, thunkApi) => {
    try {
      //console.log("deleteContact", contactId);
      const response = await axios.delete(`/contacts/${contactId}`);
      //бекенд поверне видалений обєкт, який ми обробимо в extrareducers
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
