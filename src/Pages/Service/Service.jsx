

const Service = ({service}) => {
    const {title,img,price,description} =service;
    return (
        <div>
           <div className="card card-compact w-96 bg-base-100 shadow-xl container mx-auto">
  <figure><img className="h-60" src={img} alt="Shoes" /></figure>
  <div className="card-body mx-auto">
    <h2 className="card-title text-center">{title}</h2>
    <h2 className="card-title">Price : ${price}</h2>
    
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Service;