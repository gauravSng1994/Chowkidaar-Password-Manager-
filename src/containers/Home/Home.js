import React, {useEffect, useState} from 'react';
import {listPasswords, createPassword, getPassword} from "../../Services/Passwords";

const Home = () => {
    const [passwordList,setPasswordList] = useState([]);
    const [pass,setPass] = useState({});
    useEffect(()=>{
        listPasswords().then(data=>{
            console.log('passwords',data);
            const list = [];
            for (const id in data){
                list.push({
                    _id:id,
                    ...data[id]
                });
            }
            setPasswordList(list);
        })
        // createPassword({name:"Gaurav", password:"ttt"});
    },[])
    const printPassword = async (_id) => {
        const password = await getPassword(_id);
        console.log('Selected',password);
    }
    return (
        <div>
            <div>Passwords</div>
            {passwordList.map(el=>{
                return (
                    <div key={el._id}>
                        <div>Title : {el.name}</div>
                        <div>Password : {el.password}</div>
                        <button onClick={()=>printPassword(el._id)}>Print</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Home;
