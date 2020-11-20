# 自我筆記

## 釐清需求

重點：業務單位對於報表檔格式是否有要求不能被修改，浮水印等等。
簡單 HTML 轉 PDF 很單純，但若內容格式複雜又要精細排版就用 report 套件。
至於篩選過濾是看業務邏輯的複雜度，跟資料來源的設計，與選擇哪種報表技術比較沒關係。

## 相關技術

採用前後端分離，前後端透過 API 進行溝通。
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

![](https://i.imgur.com/lkGbHAg.png)

## 交授課木拉長 flex

先假設沒有合併儲存格的情況。

html table online editor。