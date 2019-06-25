<?php
  /**
   *  继承与多肽
   *  parent::funName() 重载父类中的方法
   *  重载和重写的方法表现为多肽
   */
  class Base {
    public $name;
    private $age;
    protected $money;
    static $a = '静态变量';  // 类内部用self::$a 访问 外部用基类Base::$a或者派生类Person::$a访问 

    function __construct($name, $age, $money) {
      $this->name = $name;
      $this->age = $age;
      $this->money = $money;
    }

    public function getUserInfo() {
      echo "your name is ".$this->name." >>>"." my age is ".$this->age.">>>"." I have ".$this->money." money<br><br>";
    }

    public function sayHello() {
      echo "hello ys~";
    }
  }

  class Person extends Base {
    function __construct($name, $age, $money, $desc) {
      // 重载构造函数 并执行自己echo
      parent::__construct($name, $age, $money);
      echo "<br>".$desc;
    }

    // 重写方法
    public function sayHello() {
      echo "你很菜 ys!";
    }

    // 尝试子类中读取父类中的共有、私有、受保护的变量
    public function mapVariable() {
      echo "name=$this->name  | age=$this->age | money=$this->money";
    }
  }

  echo Person::$a;
  $ys = new Person("ys", 18, 100, '杨帅棒棒哒<br>');
  echo $ys->name; // ys
  // echo $ys->age; // Undefined property: Person::$age 类外部无法访问父类中私有变量
  // echo $ys->money; //  Cannot access protected property Person::$money 类外部无法访问父类中受保护变量
  $ys->getUserInfo(); // your name is ys >>> my age is 18>>> I have 100 money
  $ys->sayHello(); // 你很菜 ys!
  $ys->mapVariable(); // name=ys | age= | money=100 子类内部可以继承到父类中公有变量和受保护变量 age私有变量子类不能继承
 ?>
