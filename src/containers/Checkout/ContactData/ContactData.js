import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import axios from "../../../axios-order";
import Spinner from "../../../components/UI/Spinner/Spinner";

import classes from "./ContactData.module.css";

export class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: +this.props.price,
      customer: {
        name: "Muhamed Musa",
        address: {
          street: "TestStreet 1",
          zipCode: "72192",
          country: "Bosnia"
        },
        email: "test@test.com"
      },
      deliveryMethod: "fastes"
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error => this.setState({ loading: false }));
  };
  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          name="name"
          type="text"
          placeholder="Your Name"
        />
        <input
          className={classes.Input}
          name="email"
          type="email"
          placeholder="Your Mail"
        />
        <input
          className={classes.Input}
          name="street"
          type="text"
          placeholder="Your Street"
        />
        <input
          className={classes.Input}
          name="postal"
          type="text"
          placeholder="Postal Code"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
