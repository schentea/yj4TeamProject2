const BASE_URL = process.env.REACT_APP_BASE_URL;

export async function apiPostUserRegister(data, selectedRegion, selectedAllergies) {
    // 데이터에 선택된 지역 추가
    const postData = { ...data };
    data.selectedRegion = selectedRegion;
    data.selectedAllergies = selectedAllergies;
    console.log(postData);

    try {
        return await fetch(`${BASE_URL}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        }).then((res) => res.json());
    } catch (error) {
        console.log(error);
    }
}

export async function apiPostUserLogin(data) {
    console.log(data);
    try {
        return await fetch(`${BASE_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            credentials: 'include',
        }).then((res) => res.json());
    } catch (error) {
        console.log(error);
    }
}
export async function apiGetUser(data) {
    console.log(data);
    try {
        return await fetch(`${BASE_URL}/users/login-success?token=${data?.queryKey[1].token}`, {
            method: 'GET',
            credentials: 'include',
        }).then((res) => res.json());
    } catch (error) {
        console.log(error);
    }
}
export async function apiAlimtalk(data) {
    console.log('api', data);
    try {
        return await fetch(`${BASE_URL}/users/allergyAlim`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    } catch (error) {
        console.log(error);
    }
}
