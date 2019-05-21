<?php
 /**
  * 声明类变量 直接写在顶层 无需写在construct里面
  */
  class Person {
    public $name; // 共有变量
    private $age; // 私有变量
    protected $money; // 受保护的变量

   // 构造方法 -> 当这类new的时候自动执行
   // 双下划线代表私有方法
    function __construct($name, $age, $money) { // 注意参数也需为$开头的
      $this->name = $name;
      $this->age = $age;
      $this->money = $money;
    }

    // 析构方法  -> 当我们一个类 没人调用的时候 它会执行
    function __destruct() {
      // 进行资源的释放操作 比如数据库关闭 读取文件关闭 PDO=null？？？
      // 对象实例被销毁时候执行 对象调用完毕 后续不再调用时
      echo "<br>byebye ".$this->name;
    }

    public function say() {
      echo "hello ".$this->name."<br/><br>";
    }

    // 私有成员方法 基类可以访问(实例和子类都访问不到, 别搞反了)
    private function tellAge() {
      echo "my age is ".$this->age."<br/><br>";
    }

    // 被保护的成员方法 只有基类以及子类本身可以访问(实例访问不到)
    protected function tellMoney() {
      echo "I have ".$this->money." money"."<br/>";
    }

    public function getUserInfo() {
      echo " your name is ".$this->name." >>>"." my age is ".$this->age.">>>"." I have ".$this->money." money<br><br>";
    }

    // 劫持更改( ) <- 手动圈起来
    public function __set($key, $value) {
      if ($key == "age" && $value > $this->age) {
        $this->age = 18;
      }
    }

    // 劫持获取 只针对保护变量和私有变量
    public function __get($key) {
      if ($key == 'money') {
        echo "不告诉你!";
      }
    }

    // 劫持isset方法 只针对保护变量和私有变量
    public function __isset($key) {
      if ($key == 'money') {
        return true;
      }
    }

    // 只针对保护变量和私有变量
    public function __unset($key) {
      if ($key == "age") {
        unset($this->age);
      }
    }
  }

  $ys = new Person('ys', 26, 100);
  echo $ys->name."<br><br>"; // 杨帅
  // echo $ys->age; // Uncaught Error: Cannot access private property Person::$age
  // $ys->tellAge();  // Uncaught Error: Call to private method Person::tellAge()
  // echo $ys->money; // Uncaught Error: Cannot access protected property Person::$money
  // $ys->tellMoney(); // Uncaught Error: Call to protected method Person::tellMoney()
  $ys->say('hello'); // hello ys
  $ys->age = 27;
  echo $ys->getUserInfo(); // your name is ys>>>my age is 18>>>I have 100 money >>>不告诉你!
  echo "<br>".$ys->money."<br>"; // 不告诉你!
  var_dump(isset($ys->money)); // 打印表达式结果 bool(true) 被保护的变量访问不到会返回false噢~

  echo "<br>-------------- 准备干掉age变量 我是分割线 -------------<br>";
  unset($ys->age); // 干掉一个变量 可以干掉私有变量和受保护变量
  echo "<br>".$ys->age.'$ys->age没了,
       but 类里面$this->age是能访问, 说
       明干掉的只是$ys实例下的变量,想干掉
       内部的得在__unset中处理<br><br>';
  echo $ys->getUserInfo();
 ?>
