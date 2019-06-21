<?php
    // header("Content-type:application/json;charset=utf-8");
    header('Cache-Control:max-age=0'); // 强制没有缓存

    $i = 0;

    while ($i < 9) {
        $i++;
        // $res = array("success" => "ok", "text" => "我是测试文本");
        // echo json_encode($res);
        $random = rand(1,999);

        sleep(1);

        echo $random;
        echo "<br/>";
        ob_flush(); // 输出当前值 把当前值释放掉
        flush(); // 输出 吐给页面
    }
?>