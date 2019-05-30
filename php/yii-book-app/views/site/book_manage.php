<?php
/* @var $this yii\web\View */

use yii\helpers\Html;
use app\assets\BookAsset; 
BookAsset::register($this);  
?>
<div class="book-manage" class="table-responsive">
    <ol class="breadcrumb"> 
        <li><a href="index.php?r=site/book">Home</a></li>
    </ol>
    <h6>
        图书信息列表
        <a>创建书单</a>
    </h6>

    <form action="index.php?r=site/book" method="post">
        <table class="table table-bordered table-hover">
            <tr>
                <th>ID</th>
                <th>名字</th> 
                <th>标题</th>
                <th>价格</th>
                <th>类型</th>
                <th>图片地址</th>
                <th>简介</th>
                <td>操作</td>
            </tr>
            <tr>
                <td width="50"></td>
                <td width="100"><input type="text" name="name"></td>
                <td width="100"><input type="text" name="title"></td>
                <td width="50"><input type="text" name="price"></td>
                <td width="50"><input type="text" name="type"></td>
                <td width="400"><input type="text" name="logoPath"></td>
                <td width="300"><input type="text" name="desc"></td>
                <td></td>
            </tr>
            <?php foreach($lists as $list): ?>
                    <tr>
                        <td> <?php echo $list['id']; ?> </td>
                        <td><?php echo $list['title']; ?></td>
                        <td><?php echo $list['name']; ?></td>
                        <td><?php echo $list['price']; ?></td>
                        <td><?php echo $list['type']; ?></td>
                        <td><?php echo $list['logoPath']; ?></td>
                        <td><?php echo $list['desc']; ?></td>
                        <td>
                            <!-- <a href="index.app?r=site/detail&id=">查看</a> -->
                            <?= Html::a('查看', ['site/detail', 'id' => $list['id']]) ?>
                            <?= Html::submitButton('增加') ?>
                            <!-- <a href="">增加</a> -->
                            <a href="">删除</a>
                        </td> 
                </tr>
            <?php endforeach; ?>
        </table>
    </form>
</div>
