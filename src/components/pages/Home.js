import {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BreedPagination from '../BreedPagination';
import BreedCard from '../BreedCard';


function Home() {

    const [breeds, setBreeds] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [currentPost, setCurrentPost] = useState([])

    const postsPerPage = 25
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;

    function getBreeds(url) {
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            setBreeds(data)
            setCurrentPost(data.slice(firstPostIndex, lastPostIndex))
        })
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        getBreeds(`${process.env.REACT_APP_BREEDS_URL}?api_key=${process.env.REACT_APP_API_KEY}&limit=all`)
    }, [])

    useEffect(() => {
        const lastPostIndex = currentPage * postsPerPage;
        const firstPostIndex = lastPostIndex - postsPerPage;
        setCurrentPost(breeds.slice(firstPostIndex, lastPostIndex));
    }, [currentPage, postsPerPage, breeds]);

  return (
    <Container>
        {breeds.length === 0 && <p>Carregando...</p>}
        {breeds.length > 0 && (
            <Row>
                {currentPost.map((post, index) => {
                    return (
                    <Col xs={4} key={index} className="d-flex">
                        <BreedCard key={post.id} breed={post} />
                    </Col>)
                })}
            </Row>
            
        )}
        <BreedPagination totalPosts={breeds.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
    </Container>
  )
}

export default Home