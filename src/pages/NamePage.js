import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/SurprisePage.css';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

function NamePage() {
  const location = useLocation();
  const { name: rawName } = location.state || { name: 'Desconocido' };
  const [response, setResponse] = useState('');
  const name = capitalizeFirstLetter(rawName);
  const handleResponse = (answer) => {
    setResponse(answer);
  };
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
  return (
        <div>
          <h1>{name}, <br/> ¿te gustaría ser mi Valentín?</h1>
          {response === '' && (
            <div>
              <button onClick={() => handleResponse('yes')}>Sí</button>
              <button onClick={() => handleResponse('no')}>No</button>
            </div>
          )}
          {response === 'yes' && (
            <div className="animation">
              💕<br />
              ¡Me encanta ser tu Valentín!
            </div>
          )}
          {response === 'no' && (
            <div className="animation">
              😣<br />
              Dios sabe que lo intenté.
            </div>
          )}
        </div>
      );
}

export default NamePage;
