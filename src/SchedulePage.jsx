import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ScheduleButtons from './ScheduleButtons';
import { API_BASE_URL } from './api/schedules';

export default function SchedulePage() {
    const { id } = useParams(); // Extract the id from the URL
    const [scheduleData, setScheduleData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchSchedule() {
            try {
                const response = await fetch(`${API_BASE_URL}/schedules/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setScheduleData(data);
            } catch (error) {
                console.error("Error fetching the schedule:", error);
                setError(error);
            } finally {
                setLoading(false); // Set loading to false once data is fetched (or an error has occurred)
            }
        }

        fetchSchedule();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading schedule. Please try again later.</div>;
    return <ScheduleButtons data={scheduleData} />;
}
