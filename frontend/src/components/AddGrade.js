import React, { useState, useEffect } from 'react';

const AddGrade = ({ userId }) => {
    const [subjects, setSubjects] = useState([]);
    const [subjectId, setSubjectId] = useState('');
    const [grade, setGrade] = useState('');
    const [credits, setCredits] = useState('');

    useEffect(() => {
        const fetchSubjects = async () => {
            const response = await fetch('http://localhost:8000/subjects.php');
            const data = await response.json();
            setSubjects(data);
        };
        fetchSubjects();
    }, []);

    const handleAddGrade = async () => {
        const response = await fetch('http://localhost:8000/grades.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ subjectId, grade, credits }),
        });
        const data = await response.json();
        if (data.cpi) {
            alert("Grade added successfully! Updated CPI: ${data.cpi}");
        } else {
            alert(data.error);
        }
    };

    return (
        <div>
            <h2>Add Grade</h2>
            <select onChange={(e) => setSubjectId(e.target.value)}>
                <option value="">Select Subject</option>
                {subjects.map((subject) => (
                    <option key={subject.id} value={subject.id}>
                        {subject.name}
                    </option>
                ))}
            </select>
            <input
                type="text"
                placeholder="Grade (A, B, C, etc.)"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
            />
            <input
                type="number"
                placeholder="Credits"
                value={credits}
                onChange={(e) => setCredits(e.target.value)}
            />
            <button onClick={handleAddGrade}>Add Grade</button>
        </div>
    );
};

export default AddGrade;