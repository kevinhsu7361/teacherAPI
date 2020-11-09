/*
筆記：
(1) 先宣告 function，再使用之。
(2) indexOf()：回傳給定元素於陣列中第一個被找到之索引，若不存在於陣列中則回傳 -1。
*/



/*
取出資料
*/

let data;
function getData(){
    const xhr = new XMLHttpRequest();
    xhr.open('get','teacher.json');
    xhr.send(null);
    xhr.onload = function(){        
        data = JSON.parse(xhr.responseText);
    }
}

/*
科系
*/

const departmentSelector = document.querySelector('.departmentList');
function addDepartmentList(){
    let allDepartment = [];
    let departmentStr='';
    departmentStr += '<option>請選擇科系</option>';
    
    for(let i=0;i<data.length;i++){
        const departmentName = data[i].department;
        if(allDepartment.indexOf(departmentName) == -1 && departmentName !== ''){
            allDepartment.push(departmentName);
            departmentStr += `<option value="${departmentName}">${departmentName}</option>`;
        }
    }
    departmentSelector.innerHTML = departmentStr;
}

/*
鄉鎮
*/

const teacherSelector = document.querySelector('.teacherList');
function addTeacherList(e){
    let departmentValue = e.target.value;
    let teacherStr = '<option>請選擇老師</option>';
    let allTeacher = [];
    let newTeacherList = '';
    
    for (let i = 0; i < data.length; i++) {
        let departmentMatch = data[i].department;
        if (departmentValue == departmentMatch) {
            allTeacher.push(data[i].teacherName);
        }
    }

    newTeacherList = new Set(allTeacher);
    newTeacherList = Array.from(newTeacherList); // 型態轉換
    for (let i = 0; i < newTeacherList.length; i++) {
        teacherStr += `<option value="${newTeacherList[i]}">${newTeacherList[i]}</option>`;
    }
    teacherSelector.innerHTML = teacherStr;
}

/*
條列
*/

function renderList(e1,e2){
    let departmentValue = e1.target.value;
    let teacherValue = e2.target.value;

    for (let i = 0; i < data.length; i++) {
        let departmentMatch = data[i].department;
        let teacherMatch = data[i].teacherValue;
        if (departmentValue == departmentMatch && teacherValue == teacherMatch) {
            // 不知道如何撰寫
        }
    }
    document.querySelector('.list').innerHTML = str;
}

/*
執行程式
*/

getData();
addDepartmentList();
departmentSelector.addEventListener('change', addTeacherList);
teacherSelector.addEventListener('change', renderList);