<?php
  /**
   * 串行(xing)化 : 也叫序列化, 把对象转换成二进制的字符串
   */
  class Person {
      function __construct($name = "", $sex = "", $age = "") {
        $this->name = $name;
        $this->sex = $sex;
        $this->age = $age;
      }

      function sayHello() {
        echo "hello ".$this->name;
      }

      // 序列化时自动调用的魔术方法 返回一个数组 包含需要序列化的key 不写此方法默认全部key 睡前调用
      function __sleep() {
        echo "要序列化啦<hr/>";
        return ['name', 'age'];
      }

      // 醒来调用 醒来做些事情
      function __wakeup() {
        echo "要反序列化了<hr/>";

        $this->age = 18;
      }
  }

  $query = new Person("ys", "男", 26);
  $query_string = serialize($query); // 串行化
  $query_unstring = unserialize($query_string); // 反串行化

  echo $query_string."<hr/>"; // O:6:"Person":3:{s:4:"name";s:2:"ys";s:3:"sex";s:3:"男";s:3:"age";i:18;} 形似这样的字符串
  print_r($query_unstring); // Person Object ( [name] => ys [sex] => 男 [age] => 18 )
 ?>
