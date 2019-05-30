<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace app\assets;

use yii\web\AssetBundle;

/**
 * Main application asset bundle.
 *
 * @author shuaiYang amosyang.shunshunliuxue.com
 * @bookMange 
 * 自定义资源管理器 for 图书管理系统
 */
class BookAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    // 全局CSS
    public $css = [
        'css/book.css'
    ];
    // 全局JS
    public $js = [
    ];
    //依赖关系 
    public $depends = [
        'yii\web\YiiAsset',  
        'yii\bootstrap\BootstrapAsset',  
    ];

    //定义按需加载JS方法，注意加载顺序在最后  
    public static function addScript($view, $jsfile) {  
        $view->registerJsFile($jsfile, [AppAsset::className(), 'depends' => 'app\assets\BookAsset']);  
    }  
      
   //定义按需加载css方法，注意加载顺序在最后  
    public static function addCss($view, $cssfile) {  
        $view->registerCssFile($cssfile, [AppAsset::className(), 'depends' => 'app\assets\BookAsset']);  
    }  
}
