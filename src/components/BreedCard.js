import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { BsHourglassSplit } from "react-icons/bs";

import { LinkContainer } from 'react-router-bootstrap';

import './BreedCard.css';

function BreeCard({breed}) {
  return (
    <Card style={{ width: '18rem' }} className="mb-3" border="primary">
    <Card.Img variant="top" src={breed.image.url} className="test" />
        <Card.Body className="d-flex flex-column">
            <Card.Title>{breed.name}</Card.Title>
            <Card.Text>

            {breed.life_span && <><BsHourglassSplit className="text-warning" /> {breed.life_span}</>}
            </Card.Text>
            <div className="d-grid mt-auto">
                <LinkContainer to={`/breed/${breed.id}`}>
                    <Button variant="primary">Detalhes</Button>
                </LinkContainer>
            </div>
        </Card.Body>
    </Card>
)
}

export default BreeCard