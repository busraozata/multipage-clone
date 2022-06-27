import React, { useState } from "react";

export default function ContactForm() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [allValue, setAllValue] = useState([]);
  const formSubmit = (e) => {
    const newValue = { fname };
    setAllValue([...allValue, newValue]);
    e.preventDefault();
  };
  return (
    <>
      <section className="contact mtop">
        <div className="container">
          <div className="main-content">
            <h2>Contact Form</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
              nihil, aperiam consequuntur doloribus inventore beatae?
            </p>
            <form onSubmit={formSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="input">
                    <span>
                      Firt Name <label>*</label>
                    </span>
                    <input
                      type="text"
                      name="fname"
                      id=""
                      className="form-control"
                      value={fname}
                      onChange={(e) => setFname(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input">
                    <span>
                      Last Name <label>*</label>
                    </span>
                    <input
                      type="text"
                      name="lname"
                      id=""
                      className="form-control"
                      value={lname}
                      onChange={(e) => setLname(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <button className="primary-btn">Submit Now</button>
            </form>
          </div>
        </div>
      </section>
      <section className="show-data">
        {allValue.map((currentValue) => {
          const { fname } = currentValue;
          return (
            <div className="sing-box">
              <h1>Send Succesfully</h1>
              <h3 className="d-flex">
                First Name : <p> {fname} </p>
              </h3>
              <h3 className="d-flex">
                Last  Name : <p> {lname} </p>
              </h3>
            </div>
          );
        })}
      </section>
    </>
  );
}
