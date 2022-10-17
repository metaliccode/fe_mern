import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { Zoom } from "react-reveal";
import { globalapi } from "../utils/Api";

const Teams = () => {
  // react Hook : useState, useEffect (lifecycle component)
  const [data, setData] = useState([]);
  // pemanggilan data dari API ketika pertamakali web di akses
  useEffect(() => {
    // get api vanila javascript
    // fetch(globalapi)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data.data);
    //     setData(data.data);
    //   });

    // get using axios
    axios.get(globalapi).then((res) => {
      console.log(res.data.data);
      setData(res.data.data);
    });
  }, []);

  return (
    <section>
      <Container>
        <h1 className="text-center mt-4">Our Teams</h1>
        <hr />
        <Row>
          {/* ini looping menggunkan map */}

          {data.map((item) => {
            return (
              <Zoom key={item.id} right delay={item.id * 10}>
                <div className="col-md-4 mb-4 text-center">
                  <Card className="mb-4">
                    <Card.Body>
                      <Card.Img variant="top" src={item.avatar} />
                      <Card.Title>
                        {item.first_name} {item.last_name}
                      </Card.Title>
                      <Card.Text>{item.email}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Zoom>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Teams;
