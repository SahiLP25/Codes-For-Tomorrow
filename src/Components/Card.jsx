import React from 'react';

function Card({ post, onRemove }) {
  return (
    <div className='card'>
      <button onClick={onRemove} className='btn'>❌</button>
      <h2 id='title'>{post.title}</h2>
      <p id='body'>{post.body}</p>
      <p className='time'>Mon,21 dec 2020 14:57 GMT</p>
      <img className='cardimg' src={`https://picsum.photos/200/300?random=${post.id}`} alt="Random" />
    </div>
  );
}

export default Card;