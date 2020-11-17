/*
跨網頁取值
*/

const departmentSelector = window.opener.document.querySelector('.departmentList');
const teacherSelector = window.opener.document.querySelector('.teacherList');

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
        console.log("XMLHttpRequest拿到資料如下")
        console.log(data);
        renderList();
    }
}

/*
條列資料
*/

function renderList(){
    let array = data.teacher;
    let courseStr = '';
    let sum = 0.0;
    for (let i = 0; i < array.length; i++) {
        let teacherTarget = array[i].teacherName;
        let departmentTarget = array[i].department;
        if (teacherTarget == teacherSelector.value && departmentTarget == departmentSelector.value) {
            if(array[i].part=='日間部'){
                courseStr += array[i].course.name + array[i].course.time +'</br>';
                let courseTime = parseFloat(array[i].course.time);
                sum += courseTime;
                document.querySelector('.list').innerHTML = courseStr;
                document.querySelector('.timeSum').innerHTML = sum;
            }
            if(array[i].part=='進修部'){
                courseStr += array[i].course.name + array[i].course.time +'</br>';
                let courseTime = parseFloat(array[i].course.time);
                sum += courseTime;
                document.querySelector('.list').innerHTML = courseStr;
                document.querySelector('.timeSum').innerHTML = sum;
            }
            if(array[i].part=='教育學程'){
                courseStr += array[i].course.name + array[i].course.time +'</br>';
                let courseTime = parseFloat(array[i].course.time);
                sum += courseTime;
                document.querySelector('.list').innerHTML = courseStr;
                document.querySelector('.timeSum').innerHTML = sum;
            }
        }
    }
}

getData();