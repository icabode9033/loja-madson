import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <Container style={{ maxWidth: "600px", marginTop: "40px", backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "8px" }}>
      <h1 className="text-center mb-4" style={{ color: "#343a40" }}>Contato</h1>
      <p className="text-center mb-4" style={{ color: "#6c757d" }}>Preencha o formulário abaixo para entrar em contato conosco.</p>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label style={{ color: "#343a40" }}>Nome</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="#"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ backgroundColor: "#fff", color: "#343a40" }}
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label style={{ color: "#343a40" }}>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="#"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ backgroundColor: "#fff", color: "#343a40" }}
          />
        </Form.Group>

        <Form.Group controlId="formMessage" className="mb-3">
          <Form.Label style={{ color: "#343a40" }}>Mensagem</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows={5}
            placeholder="#"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ backgroundColor: "#fff", color: "#343a40" }}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default ContactForm;