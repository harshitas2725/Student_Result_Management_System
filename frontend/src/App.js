import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
    const [userId, setUserId] = useState(null);

    return <div>{userId ? <Dashboard userId={userId} /> : <Login setUserId={setUserId} />}</div>;
};

export default App;
