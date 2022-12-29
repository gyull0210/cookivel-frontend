import React, { useEffect, useState } from 'react'
import propTypes from 'prop-types'
import tw from 'twin.macro'

const Pagination = React.forwardRef((props, ref) => {

  const {} = props;

  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      setPosts(response.data);
      setLoading(false);
    }
    fetchData();
  }, [])

  console.log(posts);

  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }

  return (
    <div
    >

    </div>
  )
})

Pagination.propTypes = {

}

Pagination.defaultProps = {

}

Pagination.displayName = "Pagination"

export default Pagination;