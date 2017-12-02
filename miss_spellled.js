init = function() {
    letters = "qwertyuiopasdfghjklzxcvbnm".split("");

    var scrambleInside = function(inside) {
        if (inside.length < 2) {
            return inside
        }
        a = inside.split(""),

        j = Math.floor(Math.random() * (a.length + 1));
        k = Math.floor(Math.random() * (a.length + 1));
        if (letters.indexOf(a[j]) != -1 && letters.indexOf(a[k]) != -1) {
            tmp = a[j]
            a[j] = a[k];
            a[k] = tmp
            return a.join("");
        }
        return inside
    }

    var scrambleWord = function(word) {
        if (word == null) {
            return word
        }
        if (word.length >= 3) {
            return word.substring(0, 1) + scrambleInside(word.substring(1, word.length-1)) + word.substring(word.length-1, word.length)
        }
        return word
    }

    doReplace = function(element) {
        if (element == undefined) return
        if (element.childNodes.length > 0)
            for (var i = 0; i < element.childNodes.length; i++)
                doReplace(element.childNodes[i]);

        if (element.nodeType == Node.TEXT_NODE && /\S/.test(element.nodeValue)) {
            splits = element.nodeValue.split(" ");
            for (var i = 0; i < splits.length; i++) {
                splits[i] = scrambleWord(splits[i]);
            }
            element.nodeValue = splits.join(" ");
        }
    }

    document.getElementsByTagName("html")[0].style.display = "none";

    window.onload = function() {
        b = document.getElementsByTagName("body")[0]
        doReplace(b);
        document.getElementsByTagName("html")[0].style.display = "block";
    }
}

init()
