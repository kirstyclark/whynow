export const getSchedule = () => {
    return fetch('https://whynow.airtime.pro/api/live-info-v2').then((response) => {
        return response.json();
    }).then((response) => {
        return response;
    })
}