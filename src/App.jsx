import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScheduleApp from './ScheduleApp';
import SchedulePage from './SchedulePage';

export default function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to the Scheduling Application</h1>
            </header>
            <main>
                <Router>
                    <Routes>
                        <Route path="/schedules/:id" element={<SchedulePage />} />
                        <Route path="/" element={<ScheduleApp />} />
                    </Routes>
                </Router>
            </main>
        </div>
    );
}