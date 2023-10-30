import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";


const OrderCard = () => {
    const services = useLoaderData();
    const {_id, title,price,img } = services;
    const{user} = useContext(AuthContext);
    console.log(user)
    const handleOrder =e=>{

        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
         const email = user?.email;
         const amount = form.amount.value;
         const OrderData = {
           CustomerName: name,
            date,
            email,
            img,
            service:title,
            service_id: _id,
            amount
         }
         console.log(OrderData)

         fetch('http://localhost:5000/bookings',{

          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(OrderData)

         }
         
         )
         .then(res=>res.json())
         .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Done!',
                    text: 'Order Confirm',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  }) 
            }
         })

    }
    return (
        <div>
          <div>
            <h2 className="text-4xl font-bold text-center">Book Service : {title}</h2>
            <form onSubmit={handleOrder} className="card-body">
                            <div className="grid grid-cols-2 gap-10">
                            <div className="form-control">
                                <label className="label">
                                   <span>Name</span>

                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span>Date</span>
                                </label>
                                <input type="date" name="date" className="input input-bordered" required />
                                
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span>Email</span>

                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                   <span>Amount</span>
                                </label>
                                <input type="text" defaultValue={'$ '+price} name="amount" className="input input-bordered" required />
                                
                            </div>
                            </div>
                            <div className="form-control mt-6">
                                
                                <input className="btn btn-primary" type="submit" value="Order Confirm" />
                            </div>
                        </form>
        </div> 
        </div>
    );
};

export default OrderCard;