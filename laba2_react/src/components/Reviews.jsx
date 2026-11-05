import { useEffect, useState } from 'react';

function Reviews() {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/12/comments')
      .then(response => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then(data => setComments(data))
      .catch(err => setError(err.message));
  }, []);

  return (
    <section id="reviews" className="cyber-card">
      <h2>Reviews</h2>
      {error && <p>Не вдалося завантажити відгуки: {error}</p>}
      <div id="reviews-list">
        {comments.map(comment => (
          <article key={comment.id} className="review-card">
            <h3>{comment.name}</h3>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Reviews;