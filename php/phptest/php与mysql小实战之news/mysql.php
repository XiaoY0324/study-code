<?php
 header("Content-Type: text/html;charset=utf-8"); // 必须设置 不然入库中文会乱码
 $con = mysqli_connect('localhost', "root", "");

 if (!$con) {
   die('Could not connect:' . mysqli_error($con));
 } else{
   // 选择数据库 ``为半角符 也可以用单引号代替
   mysqli_select_db($con, "PHPlesson");

   //  ----------- post创建数据 --------
   // $newstitle = $_REQUEST['newstitle'];
   // $newsimg = $_REQUEST['newsimg'];
   // $newscontent = $_REQUEST['newscontent'];
   // $addtime = $_REQUEST['addtime'];
   // // 解决插入数据库乱码问题
   // mysqli_query($con, "SET NAMES 'utf8'");
   // // 为什么单引号包起来 可以理解成toString..
   // $sql = "INSERT INTO `news`(`newstitle`, `newsimg`, `newscontent`, `addtime`)
   //         VALUES ('$newstitle', '$newsimg', '$newscontent', '$addtime')";
   //
   // $result = mysqli_query($con, $sql);
   //
   // if (!$result) {
   //   die('Error' . mysqli_error($con));
   // } else {
   //   echo "success!";
   // }
   //
   // ---------- get 获取列表数据 ----------
   $sql = "select * from news";

   mysqli_query($con, "SET NAMES 'utf8'");
   $result = mysqli_query($con, $sql);

   $arr = array();
   while ($row = mysqli_fetch_array($result)) {
     // echo "$row[newstitle]<br>";
     array_push($arr, array('newstitle' => $row["newstitle"], 'newsimg' => $row["newsimg"]));
   }
   $result = array("errcode" => 0, "result" => $arr);
   echo json_encode($result);
 }

 mysqli_close($con);
?>
