
import { useState } from 'react';
import './App.css';
import CardUser from './components/CardUser';
import { User } from "./interfaces/User"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
function App() {
  const [showAddUser, setShowAddUser] = useState(false);
  const [newUserName, setNewUserName] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [users, setUsers] = useState<User[]>([
    // {
    //   name: 'Alice',
    //   az: 1,
    //   duque: 2,
    //   terno: 3,
    //   quadra: 4,
    //   quina: 5,
    //   sena: 6,
    //   fu: 0,
    //   seguida: 0,
    //   quadrada: 0,
    //   general: 0,
    //   resultado: 0,
    // },

  ])
  const addNewUser = () => {
    const newUser: User = {
      name: newUserName,
      az: 1,
      duque: 2,
      terno: 3,
      quadra: 4,
      quina: 5,
      sena: 6,
      fu: 0,
      seguida: 0,
      quadrada: 0,
      general: 0,
      resultado: 0,
    };

    setUsers([...users, newUser]);
    setNewUserName('');
    setShowAddUser(false);
    handleClose()
  };
  const deleteUser = (name:string) => {
    const updatedUsers = users.filter(user => user.name !== name);
    setUsers(updatedUsers);
  };

  return (
    <>
      <div className="container  d-flex align-content-center flex-column">
        <header className='pt-3 p-3 rounded-bottom fw-bolder mx-3 bg-dark text-light'> <h1>Bozó</h1></header>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Novo Jogador</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite seu nome"
                  autoFocus
                  value={newUserName}
                  onChange={(e) => setNewUserName(e.target.value)}
                />
              </Form.Group>

            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
            <Button variant="primary" onClick={addNewUser}>
              Salvar
            </Button>
          </Modal.Footer>
        </Modal>



        <div className="gameBox d-flex align-content-stretch flex-wrap justify-content-center">
          {users.map((user, index) => (
            <CardUser onDelete={deleteUser} key={index} user={user} />
          ))}
        </div>
        <div onClick={handleShow} className='d-flex justify-content-end mx-5 m-5'><button className='rounded-circle fw-bolder btn btn-success btn-lg'>+</button></div>
      </div>
    </>
  );
}

export default App;
