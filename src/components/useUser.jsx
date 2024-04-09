import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { apiGetUser } from '../Api';

export default function useUser() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const Storage = sessionStorage.getItem('userData');
        if (Storage) {
            setUserData(JSON.parse(Storage));
        }
    }, []);
    const { data } = useQuery(['getUser', { token: userData?.token }], apiGetUser);

    console.log('asd', data);

    return data;
}
