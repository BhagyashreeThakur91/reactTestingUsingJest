import { useEffect, useState } from "react";

function ApiTesting() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchUsersData() {
       try {
            const apiResponse = await fetch('https://jsonplaceholder.typicode.com/users');
            const result = await apiResponse.json();
                setUsers(result);
                setLoading(false)
            } catch(error){
                console.log('Error Occur', error);
            }
    }
    
    useEffect(()=>{
        fetchUsersData();
    },[])


    return (
        <div>
            {
                loading ? (
                    <h1>Loading Data...</h1>
                ) : <ul>
                    {
                        users.map((user)=> <li key={user.id}>
                            {user.name}
                        </li>)
                    }
                </ul>
            }
        </div>
    )
}
export default ApiTesting;