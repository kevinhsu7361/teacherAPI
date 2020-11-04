/*
取出 JSON 資料
*/

let data;
function getData(){
    const xhr = new XMLHttpRequest;
    xhr.open('get','teacher.json');
    xhr.send(null);
    xhr.onload = function(){
        data = JSON.parse(xhr.responseText);
        renderList('','');
        addDepartmentList();
    }
}

/*
科系選單
*/

const departmentSelector = document.querySelector('.departmentList');
departmentSelector.innerHTML = `<option value="">請選擇科系</option>`;

function addDepartmentList(){
    let allDepartment = [];
    let departmentStr='';
    departmentStr += '<option>請選擇科系</option>'
    for(let i=0;i<data.length;i++){
        const departmentName = data[i].properties.department;
        if(allDepartment.indexOf(departmentName) == -1 && departmentName !== ''){
        allDepartment.push(departmentName);
        departmentStr += `<option value="${departmentName}">${departmentName}</option>`
        }
    }
    departmentSelector.innerHTML = departmentStr;
}
departmentSelector.addEventListener('change', addTeacherList);

/*
鄉鎮選單
*/

const teacherSelector = document.querySelector('.teacherList');
teacherSelector.innerHTML = `<option value="">請選擇老師</option>`;

function addTeacherList(e){
    let departmentValue = e.target.value;
    let teacherStr = `<option value="">請選擇老師</option>`;
    let allTeacher = [];
    let newTeacherList = '';
    for (let i = 0; i < data.length; i++) {
        let departmentMatch = data[i].properties.department;
        if (departmentValue == departmentMatch) {
            allTeacher.push(data[i].properties.teacherName);
        }
    }

    newTeacherList = new Set(allTeacher);
    newTeacherList = Array.from(newTeacherList);
    for (let i = 0; i < newTeacherList.length; i++) {
        teacherStr += `<option value="${newTeacherList[i]}">${newTeacherList[i]}</option>`
    }

    teacherSelector.innerHTML = teacherStr;
    teacherSelector.addEventListener('change', renderList);
}

/*
印出課程
*/

function renderList(teacher,department){
    let str = '';
    for(let i = 0;i<data.length;i++){
        const departmentName = data[i].properties.county;
        const teacherName = data[i].properties.town;

        if(departmentName == department && teacherName == teacher){
            str+=``;
        }
    }
    document.querySelector('.pharmacyList').innerHTML = str;
    var pharmacyTitle = document.querySelectorAll('.pharmacyTitle'); 
    var pharmacyNameList = document.querySelectorAll('.maskContent'); 
    clickPharmacyGeo(pharmacyTitle, pharmacyNameList);
}