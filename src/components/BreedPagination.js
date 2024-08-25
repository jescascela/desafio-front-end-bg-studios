import {useState} from 'react'

import Pagination from 'react-bootstrap/Pagination';

function BreedPagination({totalPosts, postsPerPage, setCurrentPage}) {

  const [activePage, setActivePage] = useState(1)

  let pages = []
  let i

  function handleActivePage(e) {

    setActivePage(parseInt(e.target.textContent))
    setCurrentPage(parseInt(e.target.textContent))
  }

  for(i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
    pages.push(
      <Pagination.Item key={i} active={i === activePage} onClick={handleActivePage}>{i}</Pagination.Item>
    )
  }

  return (
    <Pagination size="sm">{pages}</Pagination>
  )
}

export default BreedPagination