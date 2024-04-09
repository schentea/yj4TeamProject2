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
