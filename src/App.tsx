
import { useState, useEffect } from 'react';
import './App.css';
import CardUser from './components/CardUser';
import { User } from "./interfaces/User"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { v4 as uuidv4 } from 'uuid';
import Numbered from './components/Numbered';




function App() {

  const [, setShowAddUser] = useState(false);
  const [newUserName, setNewUserName] = useState('');
  const [show, setShow] = useState(false);
  const [sortedUserData, setSortedUserData] = useState<{ name: string; resultado: number }[]>([]);
  const [users, setUsers] = useState<User[]>([]);



  useEffect(() => {
    const confirmationMessage = 'Ao sair desta página você perderá todos os dados!';

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = confirmationMessage;
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    // Crie uma cópia dos usuários para não alterar o estado original
    const usersCopy = [...users];

    // Ordene os usuários com base no resultado
    usersCopy.sort((a, b) => b.resultado - a.resultado);

    // Crie um array de objetos contendo nome e resultado de cada usuário
    const sortedData = usersCopy.map(user => ({
      name: user.name,
      resultado: user.resultado,
    }));

    // Atualize o estado 'sortedUserData' com o array combinado de nome e resultado
    setSortedUserData(sortedData);
  }, [users]);



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const updateUser = (updatedUser: User) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };
  const zerarUsers = () => {
    // Lógica para zerar os usuários
    const confirmZerar = window.confirm('Tem certeza que deseja zerar os usuários? Esta ação não pode ser desfeita.');
    if (confirmZerar) {
      const zeradosUsers = users.map(user => ({
        id: uuidv4(),
        name: user.name,
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
      }));
      setUsers(zeradosUsers)
      window.alert('Usuários foram zerados!');
    }
  };




  const addNewUser = () => {
    const newUser: User = {
      id: uuidv4(),
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
  const deleteUser = (userId: string) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
  };


  return (
    <>
      <div className="container  d-flex align-content-center flex-column">
        <header className='pt-3 p-3 rounded-bottom fw-bolder mx-3 bg-dark text-light'> <h1>Bozó</h1></header>
        <div className="mx-3 my-3 "><Numbered sortedUserData={sortedUserData} /></div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Novo Jogador</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite o nome do jogador"
                  autoFocus
                  value={newUserName}
                  onChange={(e) => setNewUserName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault(); // Impede o comportamento padrão do Enter
                      addNewUser(); // Chama a função para salvar o usuário
                    }
                  }}
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
            <CardUser onDelete={deleteUser} updateUser={updateUser} key={user.id} user={user} />
          ))}
        </div>


        <div style={{ position: 'fixed', bottom: '20px', left: '20px' }}>
          <div onClick={zerarUsers} >
            <button style={{ width: '50px' }} className='d-flex justify-content-center align-content-center  btn btn-danger btn-lg'>zerar</button>
          </div>
        </div>
        <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
          <div onClick={handleShow} className='d-flex justify-content-end'>
            <button className='rounded-circle fw-bolder btn btn-success btn-lg'>+</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
