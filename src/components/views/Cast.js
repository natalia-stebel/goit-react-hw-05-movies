import { movieCast } from '../services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import imgErr from '../image/error.jpg';

export default function Cast() {
  const [casts, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function FetchCastInfo() {
      try {
        const castItem = await movieCast(id);
        setCast(castItem);
      } catch (error) {}
    }
    FetchCastInfo();
  }, [id]);

  const urlImg = 'https://image.tmdb.org/t/p/w200';

  return (
    <>
      {casts && (
        <ul>
          {casts.map(cast => (
            <li key={cast.cast_id}>
              {cast.profile_path} ? (
              <img src={`${urlImg}${cast.profile_path}`} alt={cast.name} />) :
              {imgErr}
              <p>{cast.name}</p>
              <p>Character: {cast.character || 'Unknown'}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
