import './cardStyles.css';
import { User } from '../interfaces/User'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import Modal from 'react-bootstrap/Modal';
interface userProps {
    user: User;
    updateUser: (atualizado: User) => void
    onDelete: (name: string) => void
}


const CardUser: React.FC<userProps> = ({ user, onDelete, updateUser }) => {

    const [especiais, setEspeciais] = useState<boolean>(false);
    const [smShow, setSmShow] = useState<boolean>(false);
    const [value, setValue] = useState<number>(0);
    const [infoButton, setInfoButton] = useState<string>('')
    const [mostraAs, setMostraAs] = useState<boolean>(false)
    const [mostra2, setMostra2] = useState<boolean>(false)
    const [mostra3, setMostra3] = useState<boolean>(false)
    const [mostra4, setMostra4] = useState<boolean>(false)
    const [mostra5, setMostra5] = useState<boolean>(false)
    const [mostra6, setMostra6] = useState<boolean>(false)
    const [mostraF, setMostraF] = useState<boolean>(false)
    const [mostraS, setMostraS] = useState<boolean>(false)
    const [mostraQ, setMostraQ] = useState<boolean>(false)
    const [mostraG, setMostraG] = useState<boolean>(false)


    const torar = () => {

        if (infoButton === 'Ás') {
            user.az = 0;
            updateUser(user)
            setMostraAs(true)
            handleClose()
        }
        if (infoButton === 'Duque') {
            user.duque = 0;
            updateUser(user)
            setMostra2(true)
            handleClose()
        }
        if (infoButton === 'Terno') {
            user.terno = 0;
            updateUser(user)
            setMostra3(true)
            handleClose()
        }
        if (infoButton === 'Quadra') {
            user.quadra = 0;
            updateUser(user)
            setMostra4(true)
            handleClose()
        }
        if (infoButton === 'Quina') {
            user.quina = 0;
            updateUser(user)
            setMostra5(true)
            handleClose()
        }
        if (infoButton === 'Sena') {
            user.sena = 0;
            updateUser(user)
            setMostra6(true)
            handleClose()
        }
        if (infoButton === 'Fú') {
            user.fu = 0;
            updateUser(user)
            setMostraF(true)
            handleCloseEspeciais()
        }
        if (infoButton === 'Seguida') {
            user.seguida = 0;
            updateUser(user)
            setMostraS(true)
            handleCloseEspeciais()
        }
        if (infoButton === 'Quadrada') {
            user.quadrada = 0;
            updateUser(user)
            setMostraQ(true)
            handleCloseEspeciais()
        }
        if (infoButton === 'General') {
            user.general = 0;
            updateUser(user)
            setMostraG(true)
            handleCloseEspeciais()
        }
    }
    const salvar = (infoButton: string) => {
        if (value == 0) {
            window.alert('Valor 0 é inválido!');
            handleClose()
        } else {
            if (infoButton === 'Ás') {
                user.az = value;
                user.resultado = user.resultado + value;
                updateUser(user)
                setMostraAs(true)
                handleClose()
            }
            if (infoButton === 'Duque') {
                user.duque = value;
                user.resultado = user.resultado + value;
                updateUser(user)
                setMostra2(true)
                handleClose()
            }
            if (infoButton === 'Terno') {
                user.terno = value;
                user.resultado = user.resultado + value;
                updateUser(user)
                setMostra3(true)
                handleClose()
            }
            if (infoButton === 'Quadra') {
                user.quadra = value;
                user.resultado = user.resultado + value;
                updateUser(user)
                setMostra4(true)
                handleClose()
            }
            if (infoButton === 'Quina') {
                user.quina = value;
                user.resultado = user.resultado + value;
                updateUser(user)
                setMostra5(true)
                handleClose()
            }
            if (infoButton === 'Sena') {
                user.sena = value;
                user.resultado = user.resultado + value;
                updateUser(user)
                setMostra6(true)
                handleClose()
            }
            if (infoButton === 'Fú') {
                user.fu = value;
                user.resultado = user.resultado + value;
                updateUser(user)
                setMostraF(true)
                handleCloseEspeciais()
            }
            if (infoButton === 'Seguida') {
                user.seguida = value;
                user.resultado = user.resultado + value;
                updateUser(user)
                setMostraS(true)
                handleCloseEspeciais()
            }
            if (infoButton === 'Quadrada') {
                user.quadrada = value;
                user.resultado = user.resultado + value;
                updateUser(user)
                setMostraQ(true)
                handleCloseEspeciais()
            }
            if (infoButton === 'General') {
                user.general = user.general + 1;
                user.resultado = user.resultado + value;
                updateUser(user)
                setMostraG(true)
                handleCloseEspeciais()
            }
        }
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
        else if (infoButton === 'Fú') {
            setValue(15)
        }
        else if (infoButton === 'Seguida') {
            setValue(25)
        }
        else if (infoButton === 'Quadrada') {
            setValue(35)
        }
        else if (infoButton === 'General') {
            setValue(40)
        }

    };


    const decrement = () => {
        if (infoButton === 'Ás') {
            if (value >= 1) {
                setValue(value - 1);
            }
        } else if (infoButton === 'Duque') {
            if (value >= 2) {
                setValue(value - 2);
            }
        } else if (infoButton === 'Terno') {
            if (value >= 3) {
                setValue(value - 3);
            }
        } else if (infoButton === 'Quadra') {
            if (value >= 4) {
                setValue(value - 4);
            }
        } else if (infoButton === 'Quina') {
            if (value >= 5) {
                setValue(value - 5);
            }
        } else if (infoButton === 'Sena') {
            if (value >= 6) {
                setValue(value - 6);
            }
        }
        else if (infoButton === 'Fú') {
            setValue(10)
        }
        else if (infoButton === 'Seguida') {
            setValue(20)
        }
        else if (infoButton === 'Quadrada') {
            setValue(30)
        }
        else if (infoButton === 'General') {
            setValue(40)
        }
    };
    const handleDelete = (uuid: string) => {
        onDelete(uuid); // Chama a função do componente pai com o nome como parâmetro
    };
    const clickBotoes = (infoBotao: string) => {
        setInfoButton(infoBotao)
        setSmShow(true)
    }
    const clickBotoesEspeciais = (infoBotao: string) => {
        setInfoButton(infoBotao)
        setEspeciais(true)
    }

    const handleClose = () => {
        setSmShow(false);
        setValue(0); // Reseta o valor para 0 ao fechar o modal
    };
    const handleCloseEspeciais = () => {
        setEspeciais(false);
        setValue(0); // Reseta o valor para 0 ao fechar o modal
    };
    const cores = (v1: number, v2: boolean) => {
        if (v1 === 0 && v2) {
            return 'btn btn-danger fw-bolder btn-lg me-2'
        }
        else if (v1 != 0 && v2) {
            return 'btn  btn-primary fw-bolder btn-lg me-2'
        } else {
            return 'btn btn-light  fw-bolder btn-lg me-2'
        }
    }
    return (
        <>
            <Modal
                size="sm"
                show={especiais}
                onHide={handleCloseEspeciais}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">

                        <h2>{infoButton}</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex align-items-center mb-3">
                        <div className='w-25'>
                            <span
                                className="form-control me-2"
                            >{value}</span>
                        </div>
                        <div className='d-flex w-75 justify-content-around '>
                            <Button onClick={increment} variant="outline-secondary" >
                                Boca
                            </Button>
                            <Button onClick={decrement} variant="outline-secondary" >
                                Normal
                            </Button>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <Button onClick={() => torar()} variant="danger">
                            Torar
                        </Button>
                        <Button onClick={() => salvar(infoButton)} variant="success">
                            Salvar
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
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
                            <span
                                className="form-control me-2"
                            >{value}</span>
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
                        <Button onClick={() => torar()} variant="danger">
                            Torar
                        </Button>
                        <Button onClick={() => salvar(infoButton)} variant="success">
                            Salvar
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>



            <div className="card card-user m-3">
                <div className=' d-flex p-1 bg-light d-flex justify-content-between'>
                    <h4 className='px-1'>{user.name} </h4>
                    <CloseButton onClick={() => handleDelete(user.id)} />
                </div>
                <div className="card-body w-100 d-flex flex-row justify-content-center ">
                    <div className="infoUser col-5 d-flex flex-nowrap flex-column justify-content-center">

                        <div className=" total d-flex  justify-content-center ">
                            <span className="btn btn-success fw-bolder btn-lg ">{user.resultado}</span>
                        </div>
                    </div>

                    <div className="col-7 flex-nowrap">
                        <div className="flex-grow-1  d-flex flex-column align-items-center">
                            <div className="d-flex flex-nowrap p-1">
                                <button onClick={() => clickBotoes('Ás')} disabled={mostraAs} type='button' title='Ás' className={cores(user.az, mostraAs)}>{user.az}</button>
                                <button onClick={() => clickBotoes('Quadra')} disabled={mostra4} type='button' title='Quadra' className={cores(user.quadra, mostra4)}>{user.quadra}</button>
                                <button onClick={() => clickBotoesEspeciais('Fú')} disabled={mostraF} type='button' title='Fú' className={cores(user.fu, mostraF)}>{user.fu === 0 ? 'F' : user.fu}</button>
                            </div>
                            <div className="d-flex flex-nowrap p-1">
                                <button onClick={() => clickBotoes('Duque')} disabled={mostra2} type='button' title='Duque' className={cores(user.duque, mostra2)}>{user.duque}</button>
                                <button onClick={() => clickBotoes('Quina')} disabled={mostra5} type='button' title='Quina' className={cores(user.quina, mostra5)}>{user.quina}</button>
                                <button onClick={() => clickBotoesEspeciais('Seguida')} disabled={mostraS} type='button' title='Seguida' className={cores(user.seguida, mostraS)}> {user.seguida === 0 ? 'S' : user.seguida}</button>
                            </div>
                            <div className="d-flex flex-nowrap p-1">
                                <button onClick={() => clickBotoes('Terno')} disabled={mostra3} type='button' title='Terno' className={cores(user.terno, mostra3)}>{user.terno}</button>
                                <button onClick={() => clickBotoes('Sena')} disabled={mostra6} type='button' title='Sena' className={cores(user.sena, mostra6)}>{user.sena}</button>
                                <button onClick={() => clickBotoesEspeciais('Quadrada')} disabled={mostraQ} type='button' title='Quadrada' className={cores(user.quadrada, mostraQ)}>{user.quadrada === 0 ? 'Q' : user.quadrada}</button>
                            </div>
                            <div className="d-flex flex-nowrap p-1 ">
                                <button onClick={() => clickBotoesEspeciais('General')} type='button' title='General' className={`${cores(user.general, mostraG)} ms-auto d-flex justify-content-end`}>{user.general === 0 ? 'G' : user.general + ' G'}</button>
                            </div>
                        </div>

                    </div>

                </div>


            </div>
        </>
    );
}
export default CardUser;