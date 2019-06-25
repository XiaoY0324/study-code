<?php
  /**
   * 抽象类
   * 含有抽象方法的类必须是抽象类
   * 抽象类中不一定含有抽象方法
   * 抽象类可以存在普通方法
   * 抽象类不能被实例化 必须由一个子类去继承 并且把抽象类的抽象方法都实现了
   */
  abstract class Person {
    public abstract function eat(); // 抽象方法 没有函数体 作为父类被继承时 抽象方法需要重写
  }

  /**
   * 继承Person 必须实现其中的eat抽象方法 否则报错 Abstract function Person::eat() cannot contain body
   */
  class Man extends Person {
    public function eat() { // 实现抽象类
      echo "ys eat";
    }
  }

  $ys = new Man();
  $ys->eat();

 ?>
