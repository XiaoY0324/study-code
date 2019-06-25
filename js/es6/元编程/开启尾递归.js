// 强制开启浏览器尾递归调用优化 也是元编程哦

function test (i) {
    return test(i--);

    // TCO 如果浏览器支持
    TCO_ENABLED = true;
}

test(5);