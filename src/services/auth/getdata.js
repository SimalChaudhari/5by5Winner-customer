import axiosInstance from "../../config/config";

export const fetchLinkedInData = async (authorizationCode) => {
    try {
        console.log("Starting LinkedIn data fetch process...");

        const response = await axiosInstance.get("/auth/linkedin-combined", {
            params: {
                authorization_code: authorizationCode, // Pass authorization code as query param
            },
        });

        //   console.log("Received LinkedIn Data:", response.data);

        return response.data;

    } catch (error) {
        console.error("Error during LinkedIn data fetch process:", error.response?.data || error.message);
        throw new Error(error.response?.data?.error || "Unable to fetch LinkedIn data");
    }
};