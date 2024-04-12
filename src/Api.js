const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL_MEAL = "https://open.neis.go.kr/hub/mealServiceDietInfo";
const BASE_URL_SCHOOL = "https://open.neis.go.kr/hub/schoolInfo";
let pIndex = 1;
const pSize = 1000;
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, "0");
const date = `${year}${month}`;

let location = {
  서울: "B10",
  부산: "C10",
  대구: "D10",
  인천: "E10",
  광주: "F10",
  대전: "G10",
  울산: "H10",
  세종시: "I10",
  경기도: "J10",
  강원도: "K10",
  충청북도: "M10",
  충청남도: "N10",
  전라북도: "P10",
  전라남도: "Q10",
  경상북도: "R10",
  경상남도: "S10",
  제주도: "T10",
};

let noFood = {
  1: "달걀",
  2: "우유",
  3: "메밀",
  4: "땅콩",
  5: "대두",
  6: "밀",
  7: "고등어",
  8: "게",
  9: "새우",
  10: "돼지고기",
  11: "복숭아",
  12: "토마토",
  13: "아황산",
  14: "호두",
  15: "닭고기",
  16: "쇠고기",
  17: "오징어",
  18: "조개류.굴.홍합.전복",
  19: "잣",
};

// 학교 정보를 가져오는 함수
export async function getSchoolInfo(selectedRegion, schoolNM) {
  console.log(selectedRegion, schoolNM);
  try {
    const officeCode = location[selectedRegion];
    console.log(selectedRegion);

    const schoolInfoResponse = await fetch(`${BASE_URL_SCHOOL}?KEY=${API_KEY}&Type=json&pindex=${pIndex}&pSize=${pSize}&ATPT_OFCDC_SC_CODE=${officeCode}`).then((res) => res.json());

    const schoolarr = schoolInfoResponse.schoolInfo && schoolInfoResponse.schoolInfo.length > 1 ? schoolInfoResponse.schoolInfo[1]?.row || [] : [];

    let schoolcode = "";
    schoolarr.forEach((item) => {
      if (item.SCHUL_NM === schoolNM) {
        schoolcode = item.SD_SCHUL_CODE;
      }
    });

    return schoolcode;
  } catch (error) {
    console.log(error);
  }
}

// 식단 정보를 가져오는 함수
export async function getMealInfo() {
  try {
    const schoolcode = 7011113;
    const officeCode = location["서울"];
    const mealServiceInfoResponse = await fetch(`${BASE_URL_MEAL}?KEY=${API_KEY}&Type=json&ATPT_OFCDC_SC_CODE=${officeCode}&SD_SCHUL_CODE=${schoolcode}&MLSV_YMD=${date}`).then((res) => res.json());
    console.log(mealServiceInfoResponse);
    //전체 식단
    const allmeal = mealServiceInfoResponse.mealServiceDietInfo[1].row;

    const mealData = mealServiceInfoResponse.mealServiceDietInfo && mealServiceInfoResponse.mealServiceDietInfo[1]?.row && mealServiceInfoResponse.mealServiceDietInfo[1].row[0]?.DDISH_NM ? mealServiceInfoResponse.mealServiceDietInfo[1].row[0].DDISH_NM : "";

    const str = mealData.split("(");
    const arr = str.map((item) => item.split(/[).<br/>]/));
    const arr2 = arr.flatMap((item) => item).filter((item) => !isNaN(item) && item !== "");

    const allergylist = arr2.map((item) => noFood[item]);
    const allergy = [...new Set(allergylist)]; // 중복제거

    return {
      mealServiceInfo: allergy,
      mealData: allmeal,
    };
  } catch (error) {
    console.log(error);
  }
}

//선택날짜 식단
export async function getMealForDate(selectedDate) {
  console.log("선택 날짜", selectedDate);
  try {
    const apiData = await getMealInfo();
    const mealDataForDate = apiData.mealData.find((item) => item.MLSV_YMD === selectedDate);
    const mealData = mealDataForDate ? mealDataForDate.DDISH_NM : "";

    const str = mealData.split("(");
    const arr = str.map((item) => item.split(/[).<br/>]/));
    const arr2 = arr.flatMap((item) => item).filter((item) => !isNaN(item) && item !== "");
    const allergylist = arr2.map((item) => noFood[item]);
    const allergy = [...new Set(allergylist)];

    const mealCountry = mealDataForDate ? mealDataForDate.ORPLC_INFO : "";
    return {
      mealData,
      mealCountry,
      allergy,
    };
  } catch (error) {
    console.log("선택날짜 식단 에러", error);
  }
}

export async function apiPostUserRegister(data, selectedRegion, selectedAllergies) {
  // 데이터에 선택된 지역 추가

  const postData = { ...data };
  data.selectedRegion = selectedRegion;
  data.selectedAllergies = selectedAllergies;

  const region = postData.selectedRegion;
  const schoolNM = postData.data.schoolNM;
  const schoolCode = await getSchoolInfo(region, schoolNM);
  data.data.schoolNM += "," + schoolCode;
  console.log(postData);
  try {
    return await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    }).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}
export async function apiGetUser(data) {
  console.log(data);
  try {
    return await fetch(`${BASE_URL}/users/login-success?token=${data?.queryKey[1].token}`, {
      method: "GET",
      credentials: "include",
    }).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}
export async function apiAlimtalk(data) {
  console.log("api", data);
  try {
    return await fetch(`${BASE_URL}/users/allergyAlim`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
}
