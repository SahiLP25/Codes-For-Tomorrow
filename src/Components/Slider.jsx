import React, { useContext } from 'react';
import { AppContext } from '../Context/Context';
import Card from './Card';

function Slider() {
  let  {loading, currentPage, setCurrentPage, getCurrentPosts, removeCard, totalPages } = useContext(AppContext);

  let handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    loading ? <h2 className='loading'>Loading...</h2> :
    <div className='slider'>
      {getCurrentPosts().map(post => (
        <Card key={post.id} post={post} onRemove={() => removeCard(post.id)} />
      ))}


      <div className='pagination'>
        <button 
          disabled={currentPage === 1} 
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>

        
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Slider;
