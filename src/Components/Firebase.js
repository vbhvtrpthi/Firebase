import React, { useEffect, useState } from 'react'
import { database } from '../firebase';

function Firebase() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    let createUserInDB = async () => {

        //adding data into the users collection which is being exported
        let res = await database.users.add({ name, age }) //CREATE Command
        console.log(res);

        //If we want to create our custom unique id then
        // let res= await database.users.doc('11111111').set({name,age});
        // console.log(res);
    }

    useEffect(async () => {
        //to fetch data on the basis of uid
        let uid = 'bJp8tXrA3Qs0Zh7vWrOY';
        let data = await database.users.doc(uid).get();
        console.log(data.data());

        //To fetch the whole data
        // let data = await database.users.get();
        // data.forEach((obj)=>console.log(obj.data()))

        //To order the data in descending order, on 'createdAT' field
        // let data = await database.users.orderBy('createdAt','desc').get()
    })

    //Updating on the basis of uid
    let update = async () => {
        let uid = 'bJp8tXrA3Qs0Zh7vWrOY';
        await database.users.doc(uid).update({ name, age })
    }

    //deleting on the basis of uid
    let deletee = async () => {
        let uid = 'bJp8tXrA3Qs0Zh7vWrOY';
        await database.users.doc(uid).delete()
    }

    return (
        <>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="age">Age</label>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                <button onClick={createUserInDB}>Create</button>
                <button onClick={update}>Update</button>
                <button onClick={deletee}>Delete</button>
            </div>
        </>
    )
}

export default Firebase
