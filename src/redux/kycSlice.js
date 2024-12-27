import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../services/api";

// Async Thunks for KYC API Requests

// Step 1: Submit Personal Details
export const submitPersonalDetails = createAsyncThunk(
  "kyc/submitPersonalDetails",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await API.post("/kyc/personal-details", formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Step 2: Submit Document Upload
export const submitDocumentUpload = createAsyncThunk(
  "kyc/submitDocumentUpload",
  async (fileData, { rejectWithValue }) => {
    try {
      const response = await API.post("/kyc/document-upload", fileData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Fetch KYC Status
export const fetchKYCStatus = createAsyncThunk(
  "kyc/fetchKYCStatus",
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get("/kyc/status");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const kycSlice = createSlice({
  name: "kyc",
  initialState: {
    personalDetails: null,
    documentDetails: null,
    kycStatus: "Pending",
    isLoading: false,
    error: null,
  },

  reducers: {
    resetKYC: (state) => {
      state.personalDetails = null;
      state.documentDetails = null;
      state.kycStatus = "Pending";
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      // Submit Personal Details
      .addCase(submitPersonalDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(submitPersonalDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.personalDetails = action.payload;
      })
      .addCase(submitPersonalDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || "Failed to submit personal details.";
      })

      // Submit Document Upload
      .addCase(submitDocumentUpload.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(submitDocumentUpload.fulfilled, (state, action) => {
        state.isLoading = false;
        state.documentDetails = action.payload;
      })
      .addCase(submitDocumentUpload.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || "Failed to upload documents.";
      })

      // Fetch KYC Status
      .addCase(fetchKYCStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchKYCStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.kycStatus = action.payload.status;
      })
      .addCase(fetchKYCStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || "Failed to fetch KYC status.";
      });
  },
});

export const { resetKYC } = kycSlice.actions;
export default kycSlice.reducer;
