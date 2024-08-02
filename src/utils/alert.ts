import Swal from "sweetalert2";

export async function showSuccessAlert(message: string) {
  return Swal.fire({
    title: "Success!",
    text: message,
    icon: "success",
  });
}
