import React from 'react';
import AddSubject from './AddSubject';
import AddGrade from './AddGrade';
import ViewResults from './ViewResults';

const Dashboard = ({ userId }) => {
    return (
        <div>
            <h1>Dashboard</h1>
            <AddSubject userId={userId} />
            <AddGrade userId={userId} />
            <ViewResults userId={userId} />
        </div>
    );
};

export default Dashboard;