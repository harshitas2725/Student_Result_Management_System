import React, { useState, useEffect } from 'react';

const ViewResults = ({ userId }) => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchResults = async () => {
            const response = await fetch("http://localhost:8000/results.php?userId=${userId}");
            const data = await response.json();
            setResults(data);
        };
        fetchResults();
    }, [userId]);

    return (
        <div>
            <h2>View Results</h2>
            <table>
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Grade</th>
                        <th>Credits</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((result) => (
                        <tr key={result.id}>
                            <td>{result.subject}</td>
                            <td>{result.grade}</td>
                            <td>{result.credits}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewResults;