export async function fetchSchoolInfo() {
  try {
    const response = await fetch(`http://localhost:5000/api/schoolinfo`); // 서버의 "/api/schoolinfo" 엔드포인트로 요청을 보냅니다.
    const data = await response.json(); // JSON 형식으로 받은 응답을 파싱합니다.
    console.log("학교정보", data); // 받아온 학교 정보를 콘솔에 출력합니다. 실제로는 이 데이터를 가공하여 화면에 표시하거나 다른 작업을 수행할 수 있습니다.
  } catch (error) {
    console.error("Error fetching school info:", error);
  }
}
export async function fetchMealInfo() {
  try {
    const response = await fetch(`http://localhost:5000/api/mealinfo`); // 서버의 "/api/schoolinfo" 엔드포인트로 요청을 보냅니다.
    const data = await response.json(); // JSON 형식으로 받은 응답을 파싱합니다.
    console.log("식단 정보", data); // 받아온 학교 정보를 콘솔에 출력합니다. 실제로는 이 데이터를 가공하여 화면에 표시하거나 다른 작업을 수행할 수 있습니다.
  } catch (error) {
    console.error("Error fetching school info:", error);
  }
}
