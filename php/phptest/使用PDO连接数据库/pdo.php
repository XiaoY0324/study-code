<?php
  header("Content-Type: text/html;charset=utf-8");
  $dbms = 'mysql';     //数据库类型
  $host = 'localhost'; //数据库主机名
  $dbName = 'PHPlesson';    //使用的数据库
  $user = 'root';      //数据库连接用户名
  $pass= '';          //对应的密码
  $dsn = "$dbms:host=$host;dbname=$dbName";

  try {
    // 设置编码
    // array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'UTF8\'')
    $dbh = new PDO($dsn, $user, $pass, array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'UTF8\'')); //初始化一个PDO对象
    echo "连接成功<br/>";
    // 你还可以进行一次搜索操作
    // foreach($dbh->query('SELECT * FROM `news` WHERE 1') as $row) {
    //   print_r($row); //你可以用 echo($GLOBAL); 来看到这些值
    // }

    // 插入操作
    $query = "INSERT INTO `news`(`newstitle`, `newscontent`) VALUES('杨帅', '杨帅老了')";
    $res = $dbh->exec($query);
    echo "数据库添加成功, 受影响的行数".$res;
    $dbh = null; // 关掉连接 真实环境中我们会用连接池 node时候会讲
  } catch (PDOException $e) {
      die ("Error!: " . $e->getMessage() . "<br/>");
  }
  //默认这个不是长连接，如果需要数据库长连接，需要最后加一个参数：array(PDO::ATTR_PERSISTENT => true) 变成这样：
  // $db = new PDO($dsn, $user, $pass, array(PDO::ATTR_PERSISTENT => true));
?>
