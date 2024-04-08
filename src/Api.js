const BASE_URL = process.env.REACT_APP_BASE_URL;
export async function apiPostUserRegister(data) {
    console.log(data);
    console.log(BASE_URL);
    try {
        return await fetch(`${BASE_URL}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then((res) => res.json());
    } catch (error) {
        console.log(error);
    }
}
