# 自我筆記

## 前言

我很久沒寫 JavaScript 了。

## API 串接之參考 code

- JS 地下城 Lv5 ：空氣品質 API
- 六角學院：高雄旅遊網
- 前端精神時光屋第二屆：口罩地圖

目前我參考的是口罩地圖，[Demo](https://fred39392001.github.io/Taiwan_Mask_Map_2020/) 與[程式碼](https://github.com/fred39392001/Taiwan_Mask_Map_2020/blob/master/js/all.js)。

## 筆記

(1) 非同步：取得資料 → 選單呈現 → 呈現篩選的資料。
函式執行順序：`getData()`→`addDepartmentList()`→`addTeacherList()`→`renderList()`。
形式如下：

```javascript
function a(){
    b();
}
function b(){
    console.log('hello');
}
a();
```

(2) indexOf()：回傳給定元素於陣列中第一個被找到之索引，若不存在於陣列中則回傳 -1。

## HTML 轉 PDF

有一個套件叫做 `PDF.js`。

## 開啟新的 HTML

[JS 跨網頁傳值](https://sites.google.com/a/storaid.org/storaid/programming/javascript/kua-wang-ye-chuan-zhi)。