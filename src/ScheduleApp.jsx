import React, { useState } from 'react';
import CreateScheduleButton from './CreateScheduleButton';
import CopyLinkComponent from './CopyLinkComponent';

export default function ScheduleApp() {
    const [link, setLink] = useState("");
    const [scheduleCreated, setScheduleCreated] = useState(false);

    // Callback function to handle when a schedule is created
    const handleScheduleCreated = (id) => {
        // Construct the link to the schedule page
        const newLink = `/schedules/${id}`;
        setLink(newLink);
        setScheduleCreated(true);
    };

    return (
        <div>
            {scheduleCreated ? (
                <>
                    <h1>Schedule Generated!</h1>
                    <CopyLinkComponent link={link} />
                </>
            ) : (
                <CreateScheduleButton onScheduleCreated={handleScheduleCreated} />
            )}
        </div>
    );
}