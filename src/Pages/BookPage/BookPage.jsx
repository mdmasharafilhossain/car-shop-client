import { useLoaderData } from "react-router-dom";


const BookPage = () => {
    const services = useLoaderData();
    const { title } = services;
    return (
        <div>
            <h2 className="text-4xl font-bold text-center">Book Service : {title}</h2>
            <form className="card-body">
                            <div className="grid grid-cols-2">
                            <div className="form-control">
                                <label className="label">
                                    
                                </label>
                                <input type="text" placeholder="First Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                   
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                
                            </div>
                            </div>
                            <div className="form-control mt-6">
                                
                                <input className="btn btn-primary" type="submit" value="Order Confirm" />
                            </div>
                        </form>
        </div>
    );
};

export default BookPage;