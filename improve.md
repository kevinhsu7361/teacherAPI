# 程式碼可以優化的地方

學長幫我重構的程式碼。

```javascript
function addTeacherList() {
    let teachersArray = data.teacher.filter(
    (v, i, a) => a.findIndex((t) => t.teacherName === v.teacherName) === i
    );
    for (let i = 0; i < teachersArray.length; i++) {
        let opt = teachersArray[i];
        let el = document.createElement("option");
        el.textContent = opt.teacherName;
        el.value = opt.teacherName;
        departmentSelector.appendChild(el);
    }
}
```