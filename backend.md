## 建立 API

Table to JSON ：SQL 中包含 FOR JSON AUTO 關鍵字。
基於安全考量，還是以 JSON 物件，有心人會用各種方式覆寫 array。

## 需求

![](https://i.imgur.com/ZFLHRss.png)

## PDF 轉 HTML

我有兩個方向：iTextSharp 與 SSRS。

## iTextSharp

### Nuget 套件安裝

```bash=
Install-Package iTextSharp.xmlworker
Install-Package iTextSharp
```

### 程式碼

[iTextSharp 範例](https://dotblogs.com.tw/shadow/2014/02/09/143891)
wc是webclient嗎? 2020了建議使用httpclient。

### Issue：直 A4 → 橫 A4 ( 再看看 )

```
Document doc = new Document(PageSize.A4.Rotate());
```

如果單純這樣做，內容物件高度沒調整，被切頁是正常的。

可以參考一下這個[網頁](https://www.c-sharpcorner.com/UploadFile/a20beb/how-to-generate-a-runtime-pdf-with-landscape-and-portrait-bo/)。

### PDF 預覽列印

[iTextSharp 搭配 iframe](https://forums.asp.net/t/2154046.aspx?How+to+print+iframe+src+as+pdf+using+itextsharp+in+c+)。

## SSRS

尚未實作。