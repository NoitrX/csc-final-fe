import axios from "axios";
import Swal from "sweetalert2";

export async function showSuccessAlert(message: string) {
  return Swal.fire({
    title: "Success!",
    text: message,
    icon: "success",
  });
}

export async function showConfirmDeleteAlert(url: string) {
  return Swal.fire({
    title: "Do you want to Delete?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Save",
    denyButtonText: `Don't save`,
  }).then(async (result) => {
    if (result.isConfirmed) {
      await axios.delete(url);
      Swal.fire("Data Deleted Successfully", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
}
