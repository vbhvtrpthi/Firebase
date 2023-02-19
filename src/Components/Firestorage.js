import React, { useState } from 'react';
import { storage } from '../firebase';
//fire storage
function Firestorage() {
    const [file, setFile] = useState('');

    const upload = () => {
        const uploadTask = storage.ref(`/data/${file.name}`).put(file);
        uploadTask.on('state_changed', fn1, fn2, fn3);
        
        //fn1 -> Ki haan bhai abhi tk kitna kaam ho chuka hai
        function fn1(snapshot) {
            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`upload is ${progress} done`)
        }

        function fn2(error){
            console.log('error',error);
        }
        function fn3(){
            uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
                console.log(url);
            })
        }
    }

    return (
        <div>
            <label htmlFor="file">File:</label>
            <input id="file" type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={upload}>Upload</button>
        </div>
    )
}

export default Firestorage
