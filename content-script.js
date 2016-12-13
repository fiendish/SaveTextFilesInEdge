/*
* Copyright 2016 Avi Kelman <patcherton.fixesthings@gmail.com>
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

function fileNameFromHREF(name) {
    name = name.substring(0, (name.indexOf("#") == -1) ? name.length : name.indexOf("#"));
    name = name.substring(0, (name.indexOf("?") == -1) ? name.length : name.indexOf("?"));
    name = name.substring(name.lastIndexOf("/") + 1, name.length);
    if (name.length == 0) {
        name = "untitled.txt";
    }
    return name;
}

var url, prev_url, bodytextBlob;
var a = document.createElement("a");
a.style = "display: none";
a.download = fileNameFromHREF(document.location.href);
document.body.appendChild(a);

function saveData(data, dataType) {
    var blob = new Blob([data], { type: dataType });
    prev_url = url;
    url = window.URL.createObjectURL(blob);
    a.href = url;
    a.click();

    // We can't revoke the current object right away, because Edge would destroy it before the click triggers the save.
    // So just make sure we only ever leave one hanging around.
    if (prev_url) { window.URL.revokeObjectURL(prev_url); }
};

browser.runtime.onMessage.addListener(function (msg) {
    saveData(document.body.textContent, "text/plain");
});
