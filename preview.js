/*
跨網頁取值
*/

const url = new URL(location.href);
const departmentSelector = url.searchParams.get('dept');
const teacherSelector = url.searchParams.get('teacher');

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
    if (departmentSelector && teacherSelector) {
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
            if (teacherTarget == teacherSelector && departmentTarget == departmentSelector) {
                
                document.querySelector('.department').innerHTML = departmentTarget;
                
                if(array[i].part=='日間部'){
                    trAdd();
                    addCss1();
                    tdAdd(teacherTarget);
                    tdAdd(departmentTarget);
                    tdAdd(array[i].course.name);
                    tdAdd(array[i].course.time);
                    let courseTime1 = parseFloat(array[i].course.time);
                    sum1 += courseTime1;
                    tdAdd(sum1);
                }
            }
        }

        window.print();   
    }
}

/*
表格呈現
*/

function tdAdd(data) {
    var node = document.createElement("TD");
    var textnode = document.createTextNode(data);
    node.appendChild(textnode);
    document.querySelector('.part1').appendChild(node);
}

function trAdd() {
    var node = document.createElement("TR");
    document.querySelector('table').appendChild(node);
}

function addCss1() {
    document.querySelector("tr").classList.add('part1');
}

/*
執行函式
*/

getData();