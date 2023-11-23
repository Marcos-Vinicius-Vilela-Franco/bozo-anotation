
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';

interface NumberedProps {
    sortedUserData: { name: string; resultado: number }[];
}

const Numbered: React.FC<NumberedProps> = ({ sortedUserData }) => {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Ranking</Accordion.Header>
                <Accordion.Body>
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th></th>
                                <th>Nome</th>
                                <th>Pontos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedUserData.map((user, index) => (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td key={index}>{user.name}</td>
                                    <td key={index}>{user.resultado}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Numbered;