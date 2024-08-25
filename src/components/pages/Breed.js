import {useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'

import {useParams} from 'react-router-dom'

import Card from 'react-bootstrap/Card';

function Breed() {
  const {id} = useParams()
  const [breed, setBreed] = useState({})
  const [breedImage, setBreedImage] = useState({})

  function getBreed(url) {
    fetch(url)
    .then((resp) => resp.json())
    .then((data) => setBreed(data))
    .catch((err) => console.log(err))
  }

  function getBreedImage(url) {
    fetch(url)
    .then((resp) => resp.json())
    .then((data) => setBreedImage(data[0].url))
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    getBreed(`${process.env.REACT_APP_BREEDS_URL}/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
  }, [id])

  useEffect(() => {
    getBreedImage(`${process.env.REACT_APP_BREED_IMAGE_URL}${id}&api_key=${process.env.REACT_APP_API_KEY}`)
  }, [id])

  return (
    <Container>
      {Object.keys(breed).length === 0 && <p>Carregando...</p>}
      {Object.keys(breed).length > 0 && (
        <div className="d-flex justify-content-center pt-3 mb-3">
          <Card style={{ width: '38rem' }}>
            <Card.Img variant="top" src={breedImage} />
            <Card.Body>
              <Card.Title>{breed.name}</Card.Title>
              <Card.Text>
                <span>Bred for:</span> {breed.bred_for}
                <br />
                <span>Life span:</span> {breed.life_span}
                <br />
                <span>Temperament:</span> {breed.temperament}
                <br />
                <span>Origin:</span> {breed.origin == null || breed.origin == "" ? 'N/A' : breed.origin}
                <br />
                <span>Weigth:</span> {breed.weight.metric}
                <br />
                <span>Height:</span> {breed.height.metric}
                <br />
              </Card.Text>
            </Card.Body>
          </Card>
        </div>  
      )}
    </Container>
  )
}

export default Breed