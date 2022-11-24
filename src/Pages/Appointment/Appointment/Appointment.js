import React, { useState } from 'react';
import AppointmentBanner from '../AppintmentBanner/AppointmentBanner';
import AvilableAppiontment from '../AvilableAppiontment/AvilableAppiontment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div>
            <AppointmentBanner 
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AvilableAppiontment
                selectedDate={selectedDate}
            ></AvilableAppiontment>
        </div>
    );
};

export default Appointment;