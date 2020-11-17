/*
跨網頁取值
*/

const departmentSelector = window.opener.document.querySelector('.departmentList');
const teacherSelector = window.opener.document.querySelector('.teacherList');

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
        renderList();
    }
}

/*
條列資料
*/

function renderList(){
    let array = data.teacher;
    let courseStr1='';
    let courseStr2='';
    let courseStr3='';
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    for (let i = 0; i < array.length; i++) {
        let teacherTarget = array[i].teacherName;
        let departmentTarget = array[i].department;
        if (teacherTarget == teacherSelector.value && departmentTarget == departmentSelector.value) {
            if(array[i].part=='日間部'){
                courseStr1 += array[i].course.name + array[i].course.time +'</br>';
                let courseTime = parseFloat(array[i].course.time);
                sum1 += courseTime;
                document.querySelector('.list1').innerHTML = courseStr1;
                document.querySelector('.timeSum1').innerHTML = sum1.toFixed(1);
            }
            else if(array[i].part=='進修部'){
                courseStr2 += array[i].course.name + array[i].course.time +'</br>';
                let courseTime = parseFloat(array[i].course.time);
                sum2 += courseTime;
                document.querySelector('.list2').innerHTML = courseStr2;
                document.querySelector('.timeSum2').innerHTML = sum2.toFixed(1);
            }
            else if(array[i].part=='教育學程'){
                courseStr3 += array[i].course.name + array[i].course.time +'</br>';
                let courseTime = parseFloat(array[i].course.time);
                sum3 += courseTime;
                document.querySelector('.list3').innerHTML = courseStr3;
                document.querySelector('.timeSum3').innerHTML = sum3.toFixed(1);
            }
        }
    }
}

getData();