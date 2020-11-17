# 程式碼可以優化的地方

## 學長一

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

## 學長二

❶ 程式碼穩健性(Robust)：
1.不會被重新指派值的話盡量用 const，可以讓程式碼更穩健。
- addDepartmentList() 中的 allDepartment 可以改成 const。
- addTeacherList()中的 allTeacher 可以改成 const。
- renderList() 中的 teacherValue 可以改成 const。
2.養成習慣使用三個等於符號來判斷真假，JavaScript語言判斷等於的部分有瑕疵，用三個等於可以避免很多問題。
- allDepartment.indexOf(departmentName) == -1 改用三個等於符號。
3.盡量不要使用 function name() = {} 的方式來定義函式，因為會有 Hoisting 效果，程式碼長了之後很難維護，改用 cont name = ()=>{} 的方式。
4.使用 ()=>{} 的方式來定義函式，可以避免 this 對象取得的問題，也是避免程式碼長大之後，會不好追問題。
5.錯誤處理：要讓程式碼更穩減需要考慮錯誤處理，例如：沒有拿到資料怎麼辦？格式有問題 JSON.parse 失敗怎麼辦？
- getData 要加上 on error 的處理會更好。
- JSON.parse 要補上 try catch 裡面。
- 如果沒有讀到資料頁面render 的邏輯也要加上會更好。
6.指定變數不要直接 data = XX 來定義變數，會變成全域變數，程式碼容易出錯。
❷ 程式碼安全性(Security)：
不要養成直接把外部資料塞進 innerHTML 的習慣，所有要被 render 到頁面上的資料都需要考慮 Contextual Output Encoding 才能避免 XSS 攻擊。
❸ 程式碼邏輯性(Logic)：
建議把取回來的 data 在 getData 當變數被傳入 addDepartmentList() ，而 addDepartmentList 函式本身被當成一個參數傳入 getData ，在程式邏輯的表達上會更明確。