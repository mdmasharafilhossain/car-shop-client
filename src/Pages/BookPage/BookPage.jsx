import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import BookCard from "./BookCard";


const BookPage = () => {
    const [booking, setBooking] = useState([]);
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBooking(data);
            })
    }, [])
    return (
        <div>
            <h2>{booking.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            
                            <th>Service</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        booking.map(book => <BookCard key={book._id} book={book}></BookCard>)
                       }
                        
                        
                    </tbody>
                   

                </table>
            </div>
        </div>
    );
};

export default BookPage;