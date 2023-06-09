import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import useTitle from '../../hooks/useTitle';
import Swal from 'sweetalert2';

const AddToys = () => {
    
    const { user } = useContext(AuthContext);
    useTitle('AddToys')
    const handleAddToys = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const sellername = form.sellername.value;
        const selleremail = form.selleremail.value;
        const price = form.price.value;
        const subcategory = form.subcategory.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const photoURL = form.PhotoURL.value;
        const description = form.description.value;

        const addToys = { name, sellername, selleremail, price, subcategory, rating, quantity, photoURL, description }
        // console.log(addToys);
    

        fetch('https://kids-car-zone-server.vercel.app/toys', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(addToys)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'OK'
                      })
                }
                form.reset();
            })

    }
    return (
        <div className='my-12 max-w-6xl mx-auto'>
            <div className='bg-[#F3F3F3] rounded-md p-12'>
            <h2 className='toy-title tracking-wider text-center text-4xl text-[#105397]'>Add a Toys</h2>
            <p className='toy-des text-[22px] text-center my-4'>Toy cars can be modeled after different types of vehicles, including sports cars, classic cars, trucks, <br /> SUVs, and race cars. They may also be based on popular   movie or cartoon characters, <br /> giving them  a unique and recognizable appearance.    </p>
            <form onSubmit={handleAddToys}>
                {/* row 1 */}
                <div className="md:flex gap-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name='name' className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">seller name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} placeholder="seller name" name='sellername' className="input input-bordered w-full" required />
                    </div>
                </div>
                {/* row 2 */}
                <div className="md:flex gap-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">seller email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} placeholder="seller email" name='selleremail' className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">price</span>
                        </label>
                        <input type="number" placeholder="price" name='price' className="input input-bordered w-full" required />
                    </div>
                </div>
                {/* row 3 */}
                <div className="md:flex gap-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">sub category</span>
                        </label>
                        <select name='subcategory' className="select select-bordered w-full" required>
                            <option defaultValue="selected">Subcategory</option>
                            <option value='SportsCar'>SportsCar</option>
                            <option value="MiniFireTruck">MiniFireTruck</option>
                            <option value='MiniPoliceCar'>MiniPoliceCar</option>
                        </select>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">rating</span>
                        </label>
                        <input type="number" placeholder="rating" name='rating' className="input input-bordered w-full" required />
                    </div>
                </div>
                {/* row 4 */}
                <div className="md:flex gap-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">available quantity</span>
                        </label>
                        <input type="number" placeholder="available quantity" name='quantity' className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input type="text" placeholder="PhotoURL" name='PhotoURL' className="input input-bordered w-full" required />
                    </div>
                </div>
                {/* row 5 */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">details descriptions</span>
                    </label>
                    <textarea className="textarea textarea-bordered w-full" required name='description' placeholder="Details Descriptions"></textarea>
                </div>
                <input type="submit" value="Add a Toys" className='btn btn-block bg-[#105397] hover:bg-[#104981] tracking-widest mt-6' />
            </form>
        </div>
        </div>
    );
};

export default AddToys;