import React from "react";

const TableData = (props) => {
  return (
    <>
      <h5>Data Kontak</h5>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nama Lengkap</th>
            <th scope="col">No Hp</th>
            <th scope="col">Alamat</th>
            <th scope="col">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {/* props component from list Item (props.children) */}
          {props.children}
        </tbody>
      </table>
    </>
  );
};

export default TableData;
