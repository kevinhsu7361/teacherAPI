/*
取得資料
*/

let data;
function getData(){
    const xhr = new XMLHttpRequest();
    xhr.open('get','teacher.json');
    xhr.send(null);
    xhr.onload = function(){        
        data = JSON.parse(xhr.responseText);
        console.log("XMLHttpRequest拿到資料如下")
        console.log(data);
        addDepartmentList();
    }
}

/*
科系選單
*/

const departmentSelector = document.querySelector('.departmentList');
function addDepartmentList(){
    console.log("addDepartmentList裡面的data");
    console.log(data);

    let allDepartment = [];
    let departmentStr='<option>請選擇科系</option>';
    let array = data.teacher;

    for(let i=0;i<array.length;i++){
        const departmentName = array[i].department;
        if(allDepartment.indexOf(departmentName) == -1 && departmentName !== ''){
            allDepartment.push(departmentName); //重複的科系只出現一次
            departmentStr += `<option value="${departmentName}">${departmentName}</option>`;
        }
    }
    departmentSelector.innerHTML = departmentStr;
}

/*
鄉鎮選單
*/

const teacherSelector = document.querySelector('.teacherList');
function addTeacherList(e){
    let departmentValue = e.target.value;
    let teacherStr = '<option>請選擇老師</option>';
    let allTeacher = [];
    let newTeacherList = '';
    let array = data.teacher;
    
    for (let i = 0; i < array.length; i++) {
        let departmentMatch = array[i].department;
        if (departmentValue == departmentMatch) {
            allTeacher.push(array[i].teacherName);
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
傳送資料
*/

function send() {
    window.open('preview.html','_blank');
}

/*
預覽結果
*/

function preview() {
    document.getElementById("myframe").contentWindow.print();
}

/*
執行程式
*/

getData();
departmentSelector.addEventListener('change', addTeacherList);
document.querySelector('#btn').addEventListener('click',send); // 先
document.querySelector('#btn').addEventListener('click',preview); // 後