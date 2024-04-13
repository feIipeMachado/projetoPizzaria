import React, { useEffect, useState } from 'react';
import { MyNavbar } from '../Home/Home';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { SliderMark } from '@mui/material';


export const Menu = () => {
  const [pizzaToppings, setPizzaToppings] = useState([])

  useEffect(() => {
    const fetchAllPizzaToppings = async () => {
      try {
        const res = await axios.get("http://localhost:8080/pizzaria-api/v1/pizzaToppings")
        setPizzaToppings(res.data)
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    }
    fetchAllPizzaToppings()
  }, [])

  return (
    <div>
      <h1>Sabores</h1>
      <div className="pizzaToppings">
        {pizzaToppings.map(pizzaTopping => (
          <div className="pizzaToping">
            <img src={pizzaTopping.imageUrl} />
            <h2>{pizzaTopping.name}</h2>
            <p>{pizzaTopping.description}</p>


          </div>
        ))}
      </div>
      <Example></Example>
    </div>
  )

}

function Example() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [pizzaTopping, setPizzaTopping] = useState({
    name:"",
    description:"",
    imageUrl:""
  })

  const handleChange = (e) =>{
    setPizzaTopping((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async e => {
    location.reload()
    try {
      await axios.post("http://localhost:8080/pizzaria-api/v1/pizzaToppings", pizzaTopping)
    } catch(err){
      console.log(err)
    }
  }

  console.log(pizzaTopping)

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Adicionar sabor
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Informações do sabor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nome do sabor</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Ex: Calabresa"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descrição do sabor</Form.Label>
              <Form.Control
                name="description"
                as="textarea"
                rows={3}
                placeholder="Ex: Molho, mussarela e calabresa"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Imagem do sabor</Form.Label>
              <Form.Control 
              type="file" 
              name="imageUrl"
              onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Salvar sabor
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}



