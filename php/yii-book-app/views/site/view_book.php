<?php
/* @var $this yii\web\View */

use yii\helpers\Html;
use app\assets\BookAsset; 
BookAsset::register($this);  
?>
<ol class="breadcrumb">
    <li><a href="index.php?r=site/book">Home</a></li>
    <li><a href="">detail</a></li>
</ol>
<div class="view">
    <h2>
        <?= Html::encode($title) ?>
    </h2>
    <?= Html::img($logoPath, ['alt' => 'My logo']) ?>
    <div class="content">
        <?= Html::encode($desc) ?>
    </div>
</div>
