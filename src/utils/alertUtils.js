// src/utils/alertUtils.js
import Swal from "sweetalert2";

export const showAlert = (message, icon = "error") => {
  Swal.fire({
    title: "Notice",
    text: message,
    icon: icon,
    confirmButtonText: "Close",
  });
};
