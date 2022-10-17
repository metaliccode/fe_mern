import React from "react";
import Swal from "sweetalert2";

const ListItem = ({ data, onUpdate, onDelete }) => {
  // buat sweet alert
  const deleteData = () => {
    Swal.fire({
      title: "apakah anda yakin?",
      text: "Data yang dihapus tidak bisa dikembalikan",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "blue",
      cancelButtonColor: "red",
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete(data.id);
        Swal.fire("Terhapus!", "Data berhasil dihapus.", "success");
      }
    });
  };

  return (
    <tr>
      <th scope="row">{data.id}</th>
      <td>{data.name}</td>
      <td>{data.nohp}</td>
      <td>{data.address}</td>
      <td>
        <button className="btn btn-warning" onClick={() => onUpdate(data)}>
          Edit
        </button>{" "}
        <button className="btn btn-danger" onClick={deleteData}>
          Hapus
        </button>
      </td>
    </tr>
  );
};

export default ListItem;
