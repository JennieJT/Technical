import "../axios/axios.js";

function getPeopleInfo(){
    return axios.get('/peopleInfo')
}

export {getPeopleInfo};