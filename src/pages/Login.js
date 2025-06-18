import { Image, Container, Button, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Usar 'useNavigate' no lugar de 'useRouter'
import { api } from '../services/apiClient';
import logo from '../images/seboLogo.jpeg';
// Importar a logo diretamente da pasta public
const logoImg = '/logo-united-sem-fundo.png'; // Caminho correto para arquivos da pasta public

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate(); // Hook correto no React Router DOM

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const response = await api.post('/login', { email, senha });
      const { token, user } = response.data;

      // Armazena o token no navegador
      localStorage.setItem('authToken', token);

      // Exibe mensagem de boas-vindas e redireciona
      alert(`Bem-vindo, ${user.name}!`);
      navigate('/dashboard'); // Redireciona para a página dashboard
    } catch (error) {
      alert('Erro ao realizar login. Verifique suas credenciais!');
      console.error('Erro no login:', error);
    }
  }

  return (
    <Container className="form-signin w-25 m-auto mt-5">
      <Image fluid className="mb-4 rounded-circle" src={logo} alt="sebo-logo" />
      <h1 className="h3 mb-3 fw-normal text-center">Acesse sua conta</h1>

      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="mt-3">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 mt-3">
          Entrar
        </Button>
      </Form>
    </Container>
  );
}
