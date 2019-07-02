function getAttributes() {

    var d = document.getElementsByTagName("a")[0].getAttribute("id");
    var e = document.getElementsByTagName("a")[0].getAttribute("type");
    var f = document.getElementsByTagName("a")[0].getAttribute("hreflang");
    var g = document.getElementsByTagName("a")[0].getAttribute("rel");
    var h = document.getElementsByTagName("a")[0].getAttribute("target");
    var i = document.getElementsByTagName("a")[0].getAttribute("href");

    var arr = [d, e, f, g, h, i];

    var text = "";
    for (let i = 0; i < arr.length; i++) {
        text += arr[i] + "<br>";
    }
    document.getElementById("test1").innerHTML = text;
}

function SwapCase(pre) {
    var text = "";
    for (let i = 0; i < pre.length; i++) {

        if (pre[i] == pre[i].toUpperCase()) {
            var a = pre.toLowerCase();
        }
        else {
            var a = pre.toUpperCase();
        }
        text += a[i];
    }
    return text;
}
function input2() {
    var value = document.getElementById('two').value;
    document.getElementById('test2').innerHTML = SwapCase(value);
}