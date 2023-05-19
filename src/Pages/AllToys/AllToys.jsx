import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import AllToysTable from './AllToysTable';
import Loading from '../Shared/Loading/Loading';

const AllToys = () => {
    const [allToys, setAllToys] = useState([]);
    const [loading, setLoading] = useState(true)
    useTitle('AllToys')
    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
                setLoading(false)
            })
    }, [])
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div className='my-12'>
            <div className="overflow-y-auto w-full max-w-6xl mx-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>img</th>
                            <th>sellerName</th>
                            <th>toyname </th>
                            <th>S.category</th>
                            <th>price</th>
                            <th>quantity</th>
                            <th>details btn</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToys.map(allToy => <AllToysTable
                                key={allToy._id}
                                allToy={allToy}
                            ></AllToysTable>)
                        }

                    </tbody>
                    {/* foot */}
                    {/* <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </tfoot> */}

                </table>
            </div>
        </div>
    );
};

export default AllToys;