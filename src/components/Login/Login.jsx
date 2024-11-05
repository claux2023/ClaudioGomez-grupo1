import React, { useState } from 'react';
import mundo from '../../img/mundo.mp4'
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Por favor, complete todos los campos');
    } else {
      console.log('Usuario autenticado');
    }
  };

  return (
    <div className='w-full h-[90vh] top-[90px]'>
      <video
      className='object-cover h-full w-full absolute -z-0'
      src={mundo}
      autoPlay
      loop
      muted
      />
      <div>
      <div className="flex justify-center items-center text-center h-screen">
      <div className="bg-white rounded-lg shadow-md p-10 w-96 z-10">
        <h2 className="text-lg  font-bold mb-4">Iniciar sesión</h2>
        {error && (
          <div className="bg-red-100 border-red-400 text-red-700 p-2 mb-4 rounded-lg">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Correo electrónico
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingrese su correo electrónico"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingrese su contraseña"
            />
          </div>
          
          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Iniciar sesión
          </button>
          <Link to="/ItemList" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                volver
            </Link>
          
          
        </form>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Login;