<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "books".
 *
 * @property int $id
 * @property string $title
 * @property string $name
 * @property int $price
 * @property string $type
 * @property string $logoPath
 * @property string $desc
 */
class Books extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'books';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['price'], 'integer'],
            [['title'], 'string', 'max' => 145],
            [['name'], 'string', 'max' => 445],
            [['type'], 'string', 'max' => 45],
            [['logoPath'], 'string', 'max' => 545],
            [['desc'], 'string', 'max' => 345],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'title' => 'Title',
            'name' => 'Name',
            'price' => 'Price',
            'type' => 'Type',
            'logoPath' => 'Logo Path',
            'desc' => 'Desc',
        ];
    }
}
