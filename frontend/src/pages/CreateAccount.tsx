import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const CreateAccount = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const history = useNavigate();
  return (
    <>
        <section className="bg-gray-200 min-h-screen">
            <div className="flex items-center justify-center h-screen">
                
            </div>
        </section>
    </>
  )
}

export default CreateAccount