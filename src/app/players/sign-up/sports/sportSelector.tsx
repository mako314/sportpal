import React, { useState } from 'react';

const SportSelector = () => {
    const [selectedSport, setSelectedSport] = useState('');

    // List of sports
    const sports = [
        { id: 'soccer', name: 'Soccer', icon: '/path/to/soccer.svg' }, // Placeholder path
        { id: 'football', name: 'Football', icon: '/path/to/football.svg' },
        { id: 'baseball', name: 'Baseball', icon: '/path/to/baseball.svg' },
        { id: 'basketball', name: 'Basketball', icon: '/path/to/basketball.svg' }
    ];

    // Function to handle selecting a sport
    const handleSelectSport = (sportId) => {
        setSelectedSport(sportId);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-wrap justify-center items-center w-64 h-64 border-2 border-gray-300 rounded-lg">
                {sports.map(sport => (
                    <button
                        key={sport.id}
                        onClick={() => handleSelectSport(sport.id)}
                        className={`w-1/2 h-1/2 p-2 flex justify-center items-center rounded transition-colors duration-300 
                                    ${selectedSport === sport.id ? 'bg-blue-500' : 'bg-gray-500'}`}>
                        <img src={sport.icon} alt={sport.name} className="w-12 h-12" />
                        <span className="sr-only">{sport.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SportSelector;