
import { useNavigate } from 'react-router-dom';

const NotFound404 = () => {
  const navigate = useNavigate();

  return (
    <section>
      <h1>Not Found 404</h1>
      <button onClick={() => navigate(-1)}>Return</button>
    </section>
  );
};

export default NotFound404;