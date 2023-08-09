import React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { createSchedule, API_BASE_URL } from './api/schedules';

// Add the props parameter here
export default function CreateScheduleButton({ onScheduleCreated }) {

    const createNewSchedule = async() => {
        try {
            const data = await createSchedule();
            const newLink = `${API_BASE_URL}/schedules/${data.randomID}`;
            onScheduleCreated(data.randomID);
        }
        catch (error) {
            console.error('Error Creating a new schedule:', error);
        }
    }

    return (
        <Button variant="contained" onClick={createNewSchedule}>
            Let's Hangout!
        </Button>
    );
}

CreateScheduleButton.propTypes = {
    onScheduleCreated: PropTypes.func.isRequired,
};

CreateScheduleButton.defaultProps = {
    onScheduleCreated: () => {},  // default no-op function
};