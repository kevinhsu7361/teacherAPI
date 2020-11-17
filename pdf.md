# HTML 轉 PDF

## 困難點

不能連按鈕也一起列印，所以點擊按鈕時，

## 方法一
此方法有個 `<iframe>`，因此不可行。

```html
    <form id="form1" runat="server">
        <iframe src="preview.html" id="myframe" height="200"></iframe>
    </form>
    <input id="Button1" type="button" value="pring iframe" />
    <script>
        window.onload = function () {
            document.getElementById("Button1").onclick = function () { // when clicking the button, print the iframe
                document.getElementById("myframe").contentWindow.print();
            }
        }
    </script>
```

## pdf.js

[官網](https://mozilla.github.io/pdf.js/getting_started/#download)範例下載下來後，發現是 pdf 轉 html。