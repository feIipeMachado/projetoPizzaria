import React, { useEffect, useState } from 'react';
import { MyNavbar } from '../MyNavBar/MyNavBar';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './Menu.css'

export const Menu = () => {
  const [pizzaToppings, setPizzaToppings] = useState([])

  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const handleMouseEnter = () => {
    setShowDeleteButton(true);
  };

  const handleMouseLeave = () => {
    setShowDeleteButton(false);
  };

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

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8080/pizzaria-api/v1/pizzaToppings/delete/" + id)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <MyNavbar></MyNavbar>
      <h1 className="titleSection">Sabores</h1>
      <div className="pizzaToppings">
        {pizzaToppings.map(pizzaTopping => (
          <div className="pizzaToping" key={pizzaTopping.id}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={pizzaTopping.imageUrl}
              
            />

            {showDeleteButton && (
              <Button
                className="removeButton"
                variant="outlined"
                onClick={() => handleDelete(pizzaTopping.id)}
                >
                  Remover 
              </Button>
            )}
            <h2>{pizzaTopping.name}</h2>
            <p>{pizzaTopping.description}</p>


          </div>
        ))}
      </div>
      <AddPizzaToppingModal></AddPizzaToppingModal>
    </div>
  )

}

function AddPizzaToppingModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [pizzaTopping, setPizzaTopping] = useState({
    name: "",
    description: "",
    imageUrl: ""
  });

  const [imageBase64, setImageBase64] = useState(""); // Novo estado para armazenar a imagem em base64

  const handleChange = (e) => {
    if (e.target.name === "imageUrl") {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setImageBase64(reader.result); // Atualiza o estado com a imagem em base64
      };

      reader.readAsDataURL(file);
    } else {
      setPizzaTopping((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const handleClick = async (e) => {

    try {
      if (!pizzaTopping.name || !pizzaTopping.description || !imageBase64) {
        alert("Por favor, preencha todos os campos obrigatórios.")
      }

      await axios.post("http://localhost:8080/pizzaria-api/v1/pizzaToppings", {
        ...pizzaTopping,
        imageUrl: imageBase64
      })
      location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className="addButton">
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
  )

}
