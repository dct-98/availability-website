import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function ScheduleButtons({ data }) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const [selectedDays, setSelectedDays] = React.useState([]);

    const handleSubmit = () => {
        const daysToExclude = daysOfWeek.filter(day => !selectedDays.includes(day));
        console.log(daysToExclude);  // Log the days to be excluded
        // Here you can also send the daysToExclude data to your backend if needed.
    }

    return (
        <div>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                {daysOfWeek.map(day => (
                    <Button 
                        key={day}
                        disabled={!data.daysInWeek.includes(day)}
                        onClick={() => {
                            if (data.daysInWeek.includes(day)) {
                                setSelectedDays(prevDays => {
                                    if (prevDays.includes(day)) {
                                        // If day is already selected, unselect it
                                        return prevDays.filter(d => d !== day);
                                    } else {
                                        // If day is not selected, add it
                                        return [...prevDays, day];
                                    }
                                });
                            }
                        }}
                    >
                        {day}
                    </Button>
                ))}
            </ButtonGroup>
            <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: '20px' }}>
                Submit
            </Button>
        </div>
    );
}