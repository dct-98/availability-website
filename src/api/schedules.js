const API_BASE_URL = 'https://weekly-availability-api-51569c2acb1f.herokuapp.com';

export const createSchedule = async () => {
    try {
        const response = await fetch (`${API_BASE_URL}/schedules`, {method: 'POST'})
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    }
    catch (err) {
        throw new Error('Error creating schedule: ' + err.message);
    }
};

export const retrieveSchedule = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/schedules/${id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json()
    }
    catch (err) {
        throw new Error('Error creating schedule: ' + err.message);
    }
};

export { API_BASE_URL };