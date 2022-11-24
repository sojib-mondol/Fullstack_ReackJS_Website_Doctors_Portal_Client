import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({treatment, setTreatment, selectedDate, refetch}) => {
    const {name: treatmentName, slots, price} = treatment;
    const date = format(selectedDate, 'PP');
    const {user} = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const slot = form.slot.value;
        // [3, 4, 5].map(value => console.log(value))
        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            slot,
            email,
            phone,
            price

        }

        // TODO: send data to the server
        // and ince data is saved then close the modal 
        // and display success toast 
        fetch('https://doctors-portal-server-sojib-sudo.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                setTreatment(null);
                toast.success('Booking confirmed');
                refetch();
            }
            else {
                toast.error(data.message)
            }
            
        })
        
    }

    return (
        <>
            <Toaster/>
            <input type="checkbox" id="Booking-modal" className="modal-toggle" />
            
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="Booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-6'>
                        <input type="text" value={date} className="input w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {/* <option>Who shot first?</option> */}
                            {
                                slots.map((slot, i) => <option 
                                    value={slot} 
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text"  defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input input-bordered w-full max-w-xs" required />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-xs"  required />
                        <br />
                        <input type="submit" className='btn btn-accent w-full max-w-xs' value="Submit" />
                    </form>
                </div>
            </div>  
        </>
    );
};

export default BookingModal;