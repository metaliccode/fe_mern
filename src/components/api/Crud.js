import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { api } from "../../utils/Api";
import TableData from "./TableData";
import ListItem from "./ListItem";

const Crud = () => {
  // constructor untuk variabel untuk menampung data
  const [contacts, setContacts] = useState([]);
  //   set variable api
  const [name, setName] = useState("");
  const [nohp, setNohp] = useState("");
  const [address, setAddress] = useState("");
  //   var
  const [selectContact, setSelectContact] = useState({});
  const [isUpdate, setIsUpdate] = useState(false);

  //   buat fungsi select by id
  const selectItem = (item) => {
    console.log(item);
    setSelectContact(item);
    setName(item.name);
    setNohp(item.nohp);
    setAddress(item.address);
    setIsUpdate(true);
  };

  //   lifecycle component saat component pertama kali di akses
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get(api).then((res) => {
      console.log(res.data.data);
      setContacts(res.data.data);
    });
  };

  const postData = (e) => {
    e.preventDefault();
    // masukkan data ke dalam variable data
    const data = {
      // name: name,
      name,
      nohp,
      address,
    };
    // cek tombol update
    if (isUpdate) {
      axios.put(`${api}/${selectContact.id}`, data).then((res) => {
        console.log(res);
        getData();
        setName("");
        setNohp("");
        setAddress("");
        setIsUpdate(false);
      });
    } else {
      // methode post api
      axios.post(api, data).then((res) => {
        console.log(res);
        // kosongkan state variable
        setName("");
        setNohp("");
        setAddress("");
        getData();
      });
    }
  };

  const deleteData = (id) => {
    axios.delete(`${api}/${id}`).then((res) => {
      console.log(res);
      getData();
    });
  };

  return (
    <Container>
      <Row>
        {/* form */}
        <Col className="mt-4 mb-4 col-md-4">
          <h5>Form data Kontak</h5>
          <hr />
          <form onSubmit={postData}>
            <div className="form-group">
              <label htmlFor="name">Nama Lengkap</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="nohp">No Hp</label>
              <input
                type="number"
                className="form-control"
                value={nohp}
                onChange={(e) => setNohp(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Alamat</label>
              <input
                type="text"
                className="form-control"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <button className="btn btn-outline-primary mt-4 mb-5">
              {isUpdate ? "Update" : "Simpan"}
            </button>
          </form>
        </Col>
        {/* table */}
        <Col className="mt-4 mb-4 col-md-8">
          {/* dari Table Data */}
          <TableData>
            {contacts.map((item) => {
              return (
                <ListItem
                  data={item}
                  key={item.id}
                  onUpdate={selectItem}
                  onDelete={deleteData}
                />
              );
            })}
          </TableData>
        </Col>
      </Row>
    </Container>
  );
};

export default Crud;
