import React, { useState } from 'react';

const AddSubject = ({ userId }) => {
    const [name, setName] = useState('');

    const handleAddSubject = async () => {
        const response = await fetch('http://localhost:8000/subjects.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId, name }),
        });
        const data = await response.json();
        if (data.message) {
            alert(data.message);
        } else {
            alert(data.error);
        }
    };

    return (
        <div>
            <h2>Add Subject</h2>
            <input
                type="text"
                placeholder="Subject Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleAddSubject}>Add Subject</button>
        </div>
    );
};

export default AddSubject;