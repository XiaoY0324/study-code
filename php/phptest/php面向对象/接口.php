<?php
  /**
   * 1. 接口声明的关键字interface
   * 2. 接口可以声明常量也可以抽象方法
   * 3. 接口中的方法都是抽象方法 不用abstract去人肉定义
   * 4. 接口也不能被实例化 需要一个类去实现它
   * 5. 一个类不能继承多个类 一个类可以实现多个接口
   * 6. 常量和静态变量都为编译时直接分配内存, 但是常量不能更改, 静态变量可以更改, 接口不能定义静态变量
   */
  interface Person { // 接口中基本数据为static 参照下面执行run方法
    const NAME="杨帅"; // 常量
    public function run(); // 静态方法
    public function eat($food); // 抽象方法有参数时 实现此方法也需要有参数 静态方法
  }

  interface Study {
    public function study();
  }

  // 也可以抽象的更高级 用抽象类去实现2个接口 Student类再去继承抽象类
  class Student implements Person, Study {
    const data = 3.14; // 定义常量 静态变量

    public function run() {
      echo "run<hr/>";
    }

    public function eat($food) {
      echo "eat $food";
    }

    public function study() {
      echo "study";
    }

    public function whatIam() {
      echo self::NAME;
    }
  }

  $ys = new Student();
  $ys->eat('橘子<hr/>'); // eat 橘子
  echo Student::NAME."<hr/>"; // 杨帅
  echo Student::data."<hr/>"; // 3.14
  echo Student::run(); // "run"
  $ys->whatIam(); // 杨帅
 ?>
