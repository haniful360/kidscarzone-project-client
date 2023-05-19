import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import MyToysRow from './MyToysRow';
import { AuthContext } from '../../Providers/AuthProviders';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([])
    useTitle('MyToys')
    useEffect(() => {
        fetch(`http://localhost:5000/toys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
    }, [])
    return (
        <div className='container'>
            <h3>my toys:{myToys.length}</h3>
            <div className="overflowauto w-full mx-auto">
                <table className="table w-full mx-auto">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>img</th>
                            <th>name</th>
                            <th>sellername</th>
                            <th>price</th>
                            <th>A.quantity</th>
                            <th>S.category</th>
                            <th>rating</th>
                            <th>D.Descriptions</th>
                            <th>update/delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(toy => <MyToysRow key={toy._id}
                                toy={toy}
                                myToys={myToys}
                                setMyToys={setMyToys}
                            ></MyToysRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;