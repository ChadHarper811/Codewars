const { countWords } = require("./index");

test("Should count all words in string and ignore spaces between and special characters", () => {
    expect(countWords("Hello")).toBe(1);
    expect(countWords("Hello, World!")).toBe(2);
    expect(countWords("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")).toBe(19);
    expect(countWords("")).toBe(0);
    expect(countWords("With! Symbol@ #Around! (Every) %Word$")).toBe(5);
    expect(countWords("Dear   Victoria, I love  to press   space button.")).toBe(8);
})

test("Should count all words in string even with spaces arond word", () => {
    expect(countWords(" Arthur ")).toBe(1);
    expect(countWords(" David")).toBe(1);
    expect(countWords("Nelson ")).toBe(1);
    expect(countWords("")).toBe(0);
    expect(countWords("  Hello Gomer  ")).toBe(2);
    expect(countWords("  Hello     Bart  ")).toBe(2);
})

test("Should count all words in string even with non-whitespace (ex. breakspace) chars", () => {
    expect(countWords("﻿Hello﻿World ")).toBe(2);
    expect(countWords("Hello﻿World")).toBe(2);
})