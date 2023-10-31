

const BookCard = ({ book }) => {
    console.log(book);
    const {CustomerName,amount,date,email,service,service_id,price} = book;
    return (
        
            
            <tr>
                <th>
                   
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                           
                        </div>
                    </div>
                </td>
                <td>
                   {CustomerName}
                    <br />
                    <span className="badge badge-ghost badge-sm">{date}</span>
                </td>
                <td>{email}</td>
                <td>${amount}</td>
                <th>
                    <button className="btn btn-ghost btn-xs">{service}</button>
                </th>
            </tr>
       
    );
};

export default BookCard;