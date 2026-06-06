"use strict";
exports.__esModule = true;
exports.transliterate = void 0;
function transliterate(input) {
    var _a;
    if (!input)
        return "";
    var text = input;
    // ==============
    // 1. Basic Map
    // ==============
    var map = {
        "अ": "a", "आ": "aa", "इ": "i", "ई": "ee", "उ": "u", "ऊ": "oo",
        "ए": "e", "ऐ": "ai", "ओ": "o", "औ": "au",
        "ा": "a", "ि": "i", "ी": "ee", "ु": "u", "ू": "oo",
        "े": "e", "ै": "ai", "ो": "o", "ौ": "au",
        "क": "k", "ख": "kh", "ग": "g", "घ": "gh",
        "च": "ch", "छ": "chh", "ज": "j", "झ": "jh",
        "ट": "t", "ठ": "th", "ड": "d", "ढ": "dh",
        "ण": "n", "त": "t", "थ": "th", "द": "d", "ध": "dh",
        "न": "n", "प": "p", "फ": "ph", "ब": "b", "भ": "bh",
        "म": "m", "य": "y", "र": "r", "ल": "l",
        "व": "v", "श": "sh", "ष": "sh", "स": "s", "ह": "h",
        "ळ": "l", "क्ष": "ksh", "त्र": "tra", "ज्ञ": "gy",
        "ं": "n", "ः": "h", "ँ": "n",
        "्": ""
    };
    // ==============
    // 2. Replace composite sequences first
    // ==============
    var composites = {
        "क्ष": "ksh",
        "ज्ञ": "gy",
        "त्र": "tra"
    };
    //   for (const c in composites) {
    //     text = text.replaceAll(c, composites[c]);
    //   }
    for (var c in composites) {
        var pattern = new RegExp(c, "g");
        text = text.replace(pattern, composites[c]);
    }
    // ==============
    // 3. Replace each character
    // ==============
    var result = "";
    for (var _i = 0, text_1 = text; _i < text_1.length; _i++) {
        var char = text_1[_i];
        result += (_a = map[char]) !== null && _a !== void 0 ? _a : char;
    }
    // Capitalize first letter (Optional)
    if (result.length > 0) {
        result = result.charAt(0).toUpperCase() + result.slice(1);
    }
    return result;
}
exports.transliterate = transliterate;
