import './cardStyles.css';
import { User } from '../interfaces/User'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import Modal from 'react-bootstrap/Modal';
interface userProps {
    user: User;
    
    onDelete: (name: string) => void
}


const CardUser: React.FC<userProps> = ({ user, onDelete }) => {
    
    const [smShow, setSmShow] = useState<boolean>(false);
    const [value, setValue] = useState<number>(0);
    const [infoButton, setInfoButton] = useState<string>('')

    const salvar = ()=>{
       
    }
    const increment = () => {
        if (infoButton === 'Ás') {
            if (value < 5) {
                setValue(value + 1);
            }
        }
        else if (infoButton === 'Duque') {
            if (value < 10) {
                setValue(value + 2)
            }
        }
        else if (infoButton === 'Terno') {
            if (value < 15) {
                setValue(value + 3)
            }
        }
        else if (infoButton === 'Quadra') {
            if (value < 20) {
                setValue(value + 4)
            }
        }
        else if (infoButton === 'Quina') {
            if (value < 25) {
                setValue(value + 5)
            }
        }
        else if (infoButton === 'Sena') {
            if (value < 30) {
                setValue(value + 6)
            }
        }

    };


    const decrement = () => {
        if (infoButton === 'Ás') {
            if (value >= 1) {
                setValue(value - 1);
            }
        } else if (infoButton === 'Duque') {
            if (value >= 1) {
                setValue(value - 2);
            }
        } else if (infoButton === 'Terno') {
            if (value >= 1) {
                setValue(value - 3);
            }
        } else if (infoButton === 'Quadra') {
            if (value >= 1) {
                setValue(value - 4);
            }
        } else if (infoButton === 'Quina') {
            if (value >= 1) {
                setValue(value - 5);
            }
        } else if (infoButton === 'Sena') {
            if (value >= 1) {
                setValue(value - 6);
            }
        }
    };
    const handleDelete = (name: string) => {
        onDelete(name); // Chama a função do componente pai com o nome como parâmetro
    };
    const clickBotoes = (infoBotao: string) => {
        setInfoButton(infoBotao)
        setSmShow(true)
    }

    const handleClose = () => {
        setSmShow(false);
        setValue(0); // Reseta o valor para 0 ao fechar o modal
    };
    return (
        <>

            <Modal
                size="sm"
                show={smShow}
                onHide={handleClose}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        <h2>{infoButton}</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex align-items-center mb-3">
                        <div className='w-50'>

                            <input
                                type="number"
                                value={value}
                                onChange={(e) => setValue(parseInt(e.target.value) || 0)}
                                className="form-control me-2"
                            />
                        </div>
                        <div className='d-flex w-50 justify-content-around '>
                            <Button onClick={increment} variant="outline-secondary" className=" me-2 btn-custom-size">
                                +
                            </Button>
                            <Button onClick={decrement} variant="outline-secondary" className=" btn-custom-size">
                                -
                            </Button>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <Button onClick={decrement} variant="danger">
                            Torar
                        </Button>
                        <Button onClick={decrement} variant="success">
                            Salvar
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>



            <div className="card card-user m-3">
                <div className=' d-flex p-1 bg-light d-flex justify-content-between'>
                    <h4 className='px-1'>{user.name} </h4>
                    <CloseButton onClick={() => handleDelete(user.name)} variant="danger p-2" />
                </div>
                <div className="card-body w-100 d-flex flex-row justify-content-center ">
                    <div className="infoUser col-5 d-flex flex-nowrap flex-column justify-content-center">
                        <div className="total d-flex  justify-content-center ">
                            <span className="btn btn-success fw-bolder btn-lg ">{user.resultado}</span>
                        </div>
                    </div>

                    <div className="col-5  flex-nowrap">
                        <div className="col-7 d-flex flex-column align-items-start">
                            <div className="d-flex flex-nowrap p-1">
                                <button onClick={() => clickBotoes('Ás')} type='button' title='Ás' className='btn btn-light fw-bolder btn-lg me-2'>{user.az}</button>
                                <button onClick={() => clickBotoes('Quadra')} type='button' title='Quadra' className='btn btn-light fw-bolder btn-lg me-2'>{user.quadra}</button>
                                <button onClick={() => clickBotoes('Fú')} type='button' title='Fú' className='btn btn-light fw-bolder btn-lg'>{user.fu === 0 ? 'F' : user.fu}</button>
                            </div>
                            <div className="d-flex flex-nowrap p-1">
                                <button onClick={() => clickBotoes('Duque')} type='button' title='Duque' className='btn btn-light fw-bolder btn-lg me-2'>{user.duque}</button>
                                <button onClick={() => clickBotoes('Quina')} type='button' title='Quina' className='btn btn-light fw-bolder btn-lg me-2'>{user.quina}</button>
                                <button onClick={() => clickBotoes('Seguida')} type='button' title='Seguida' className='btn btn-light fw-bolder btn-lg'> {user.seguida === 0 ? 'S' : user.seguida}</button>
                            </div>
                            <div className="d-flex flex-nowrap p-1">
                                <button onClick={() => clickBotoes('Terno')} type='button' title='Terno' className='btn btn-light fw-bolder btn-lg me-2'>{user.terno}</button>
                                <button onClick={() => clickBotoes('Sena')} type='button' title='Sena' className='btn btn-light fw-bolder btn-lg me-2'>{user.sena}</button>
                                <button onClick={() => clickBotoes('Quadrada')} type='button' title='Quadrada' className='btn btn-light fw-bolder btn-lg'>{user.quadrada === 0 ? 'Q' : user.quadrada}</button>
                            </div>
                        </div>
                        <div className=" flex-nowrap  ">
                            <button onClick={() => clickBotoes('General')} type='button' title='General' className='btn btn-light fw-bolder btn-lg ms-auto d-flex justify-content-end'>{user.general === 0 ? 'G' : user.general}</button>
                        </div>
                    </div>

                </div>


            </div>
        </>
    );
}
export default CardUser;