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

    const increment = () => {
        if (value < 6) {
            setValue(value + 1);
        }
    };

    const decrement = () => {
        if (value >= 1) {
            setValue(value - 1);
        }
    };
    const handleDelete = (name: string) => {
        onDelete(name); // Chama a função do componente pai com o nome como parâmetro
    };
    return (
        <>
            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        <div>
                            <input type="text" value={value} readOnly className="form-control" />
                            <Button onClick={increment} variant="primary" className="me-2">
                                +
                            </Button>
                            <Button onClick={decrement} variant="danger">
                                -
                            </Button>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Button onClick={decrement} variant="danger">
                        Torar
                    </Button>
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
                                <button onClick={() => setSmShow(true)} type='button' title='Ás' className='btn btn-light fw-bolder btn-lg me-2'>{user.az}</button>
                                <button type='button' title='Quadra' className='btn btn-light fw-bolder btn-lg me-2'>{user.quadra}</button>
                                <button type='button' title='Fú' className='btn btn-light fw-bolder btn-lg'>{user.fu === 0 ? 'F' : user.fu}</button>
                            </div>
                            <div className="d-flex flex-nowrap p-1">
                                <button type='button' title='Duque' className='btn btn-light fw-bolder btn-lg me-2'>{user.duque}</button>
                                <button type='button' title='Quina' className='btn btn-light fw-bolder btn-lg me-2'>{user.quina}</button>
                                <button type='button' title='Seguida' className='btn btn-light fw-bolder btn-lg'> {user.seguida === 0 ? 'S' : user.seguida}</button>
                            </div>
                            <div className="d-flex flex-nowrap p-1">
                                <button type='button' title='Terno' className='btn btn-light fw-bolder btn-lg me-2'>{user.terno}</button>
                                <button type='button' title='Sena' className='btn btn-light fw-bolder btn-lg me-2'>{user.sena}</button>
                                <button type='button' title='Quadrada' className='btn btn-light fw-bolder btn-lg'>{user.quadrada === 0 ? 'Q' : user.quadrada}</button>
                            </div>
                        </div>
                        <div className=" flex-nowrap  ">
                            <button type='button' title='General' className='btn btn-light fw-bolder btn-lg ms-auto d-flex justify-content-end'>{user.general === 0 ? 'G' : user.general}</button>
                        </div>
                    </div>

                </div>


            </div>
        </>
    );
}
export default CardUser;