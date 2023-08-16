import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, FormLabel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

const ShippingScreen = () => {
  const cart = useSelector(state => state.cart)
  const { shippingAddress } = cart


    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submitHandler = (e) =>{
      e.preventDefault()
      dispatch(saveShippingAddress({address,city,postalCode,country}))
      navigate('/payment')
      }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address">
          <FormLabel>Address</FormLabel>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="city">
          <FormLabel>City</FormLabel>
          <Form.Control
            type="text"
            placeholder="Enter City"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="postalCode">
          <FormLabel>Postal Code</FormLabel>
          <Form.Control
            type="text"
            placeholder="Enter postal code"
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="country">
          <FormLabel>Country</FormLabel>
          <Form.Control
            type="text"
            placeholder="Enter country"
            value={country}
            required
            onChange={(e) => setCountry (e.target.value)}
          />
        </Form.Group>

    <Button type="submit" variant="primary">
        Continue
    </Button>

      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
