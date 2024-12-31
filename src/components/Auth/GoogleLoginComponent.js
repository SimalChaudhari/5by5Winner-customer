import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { showAlert } from "../../utils/alertUtils";

const GoogleLoginComponent = ({ onSuccessCallback }) => {
    const handleSuccess = (credentialResponse) => {
        const jwtToken = credentialResponse.credential;
        const decodedToken = jwtDecode(jwtToken);
        onSuccessCallback(decodedToken); // Pass the decoded token to the parent component
        console.log("Decoded JWT Token:", decodedToken);
        showAlert(`Welcome ${decodedToken.name}`, "success");
    };

    const handleError = () => {
        console.error("Google Sign-In Error");
        showAlert("Google Sign-In Failed", "error");
    };

    return (
        <GoogleLogin
            onSuccess={handleSuccess}
            onError={handleError}
        />
    );
};

export default GoogleLoginComponent;
