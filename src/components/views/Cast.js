import { movieCast } from '../services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

export default function Cast() {
  const [casts, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function FetchCastInfo() {
      try {
        const castItem = await movieCast(movieId);
        setCast(castItem);
      } catch (error) {}
    }
    FetchCastInfo();
  }, [movieId]);

  return (
    <ul>
      {casts.map(({ id, profile_path, original_name, character }) => (
        <li key={id}>
          <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt="" />
          <div>
            <p>name: {original_name}</p>
            <p>character: {character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
