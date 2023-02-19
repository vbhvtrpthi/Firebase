import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'

function Fireauth() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('')

    let create = async () => {
        let res = await auth.createUserWithEmailAndPassword(email, password);
        console.log(res);
    }

    useEffect(() => {
        console.log('UseEffect executed');
        console.log('user===', user);

        //whenever auth state is changed then update the user as setUser, here unsub works an event listener.
        // let unsub = auth.onAuthStateChanged((user) =>
        //     setUser(user))

        let unsub = auth.onAuthStateChanged((user) =>
            setUser(user))

        //this return will be exectued before unmounting of a component, and all event listeners will be removed
        return () => {
            unsub(); //cleanup
        }

    }, [])

    let logout = async () => {
        await auth.signOut();
    }
    let signin = async () => {
        await auth.signInWithEmailAndPassword(email, password);
    }


    return (
        <>
            {
                user == null ?
                    <div>
                        {console.log('user1', user)}
                        <label htmlFor="email">Email</label>
                        <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                        <label htmlFor="password">Password</label>
                        <input id="passsword" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                        <button onClick={signin}>Sign In</button>
                        <button onClick={create}>Create</button>
                    </div> :
                    <>
                        {/* uid is the unique identity geiven by firebase for uniquely identifying object */}
                        {console.log('user2', user)}
                        <div>{user.uid}</div>
                        <div>{user.email}</div>
                        <button onClick={logout}>Logout</button>
                    </>
            }
        </>
    )
}

export default Fireauth
