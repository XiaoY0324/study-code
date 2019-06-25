<?php

$params = require __DIR__ . '/params.php';
$db = require __DIR__ . '/db.php';

$config = [
    'id' => 'basic',
    'basePath' => dirname(__DIR__),
    'bootstrap' => ['log'],
    'aliases' => [
        '@bower' => '@vendor/bower-asset',
        '@npm'   => '@vendor/npm-asset',
    ],
    'components' => [
        'request' => [
            // !!! insert a secret key in the following (if it is empty) - this is required by cookie validation
            'cookieValidationKey' => '-----BEGIN RSA PRIVATE KEY-----
            MIIEpQIBAAKCAQEAtwlVZ+7wxTHv00dadYw2mfNL1qzx22I1bSQvxviIb89RnzCi
            q77bLnWriAKGMZaYUPgrUR7/TBZ9Or196cpo2TnyRwMw7PM8aM6k16+o68qrMaPG
            3rCDlvE5Eh5hi6pGKw+mlAx+rlJWaEUAAwZB/FrjCyY46fcGGXTfGQgsOVsUFlDD
            jsYDXeeNA7olIg5u8rqzcDaMb5Qgp/yishVmPfOxO2TyiVmVhNQRLLnmVjffjKQf
            oM/FZ2RiKXZpoI4SGNV/yBJwuB1q0O3Xdr43yTDkz4FppL23V3ydAi0y9sFERE1V
            ssAcg6gal9wO8aOUPUZt0OOpm2Vxto+cCnGhOQIDAQABAoIBAQCcGhy5wEGdnGIy
            KbePat6iW6oBU4wNk2uHQoZwxkPuP70X7C3AFczuibKaE7UJE6uh2pVu4OXQqZly
            AGwjeNoE8XOcdq9CVovdwuc5f/mr5zQr6MbR427Gy8Hlnv2IVNb1IKrrtuBPoa9J
            zBcffTXHmGfseVOuzltoWJFw0tSMsJt78dIWsEuPq2bvpkioNafBENiJdDfQf1cd
            JHoCiu7Y/zVuRKwtk/OBEjqdhRzCcAUweQHWsZ/Z5tm3/OllBCp+NmsSXeos1hiQ
            RveOjzCtexo+rBQzwKKINgIrNH68vViVI5gGqKR3g4VY0LggUU8ZxdQV0xGaSmg0
            AbnqJMbRAoGBAOh/onsGqBm+39PRx32PNWETJGrhloEO8lNaPE7sDTLZ8y9IiIlx
            +/1GTfacp+3ogGF2nWoUHcC/8EytpB7dG4N1sqV4MZdg19Z7cCJitim9M/zm8DKP
            pNSlb6PmXS5jpYXRjeJl7SqQEkx+trYT4d0msldAC4+QGS1xtju18YQ1AoGBAMmJ
            xJMtWYNo+slFdC9skLcJ/f+0Euer88/Ww8Ck9EjKIEFl5Egj61ZP/BYHkFKT5xnC
            b+C6cwK/EM5A4qjsUrHy3kpvkZKfwtTviKecMAi/ws/oy3Y+bfOwTZtZ9BLEfdKL
            OTkOr6wuT/Lk04EQ+ZBhdvj757fbb1uVsbeE3AF1AoGBAJ34gvyWVEdR8qDoi2Qb
            lshDil34sxszfaD20b1KE9m2Ts6UuPiycuXvC/ABFvTGIdyXDHPUATdC8tIWtUmn
            MBeNM/nMBd32FhEMQ++JJH6NqLIwc4nXIca+NXGmhy+K0x9ud7oZSSC/TT+eZSSn
            s7JgpZI02OYNoZ3IAmrlv5j1AoGBAJl0Yg4ikK7jh1krniziAEquvA0wItjt8AZI
            I+MSdsLZzLefCrP3TaD55BsuBTErVuMhTqiRrzLfIr+5Xhx7XPgL0kBhNTmsleAm
            xynAXj67LG28dveAz52ml2D7nEGSBbADvD16tj5nQQ7UN0tmDnBmFf29aRFwbxkQ
            ITJ4YkBlAoGAOy5ENb/k5NAYbUjRgYN2NZWuvaFZ0y+JbupmsyxIukySqyC4GUUU
            Vm0B47Y3DV9GNqtI7tIWg33kpFeU9jsk9IykXN3uZqWVar7zDDTdY+RR/Hs5Ylb6
            pAG8NqhWBhroz39thS4HI/iCmTvfJbuhprTXWm9cqnNM8YyIdxHhb4g=
            -----END RSA PRIVATE KEY-----'
        ],
        'cache' => [
            'class' => 'yii\caching\FileCache',
        ],
        'user' => [
            'identityClass' => 'app\models\User',
            'enableAutoLogin' => true,
        ],
        'errorHandler' => [
            'errorAction' => 'site/error',
        ],
        'mailer' => [
            'class' => 'yii\swiftmailer\Mailer',
            // send all mails to a file by default. You have to set
            // 'useFileTransport' to false and configure a transport
            // for the mailer to send real emails.
            'useFileTransport' => true,
        ],
        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['error', 'warning'],
                ],
            ],
        ],
        'db' => $db,
        /*
        'urlManager' => [
            'enablePrettyUrl' => true,
            'showScriptName' => false,
            'rules' => [
            ],
        ],
        */
    ],
    'params' => $params
];

if (YII_ENV_DEV) {
    // configuration adjustments for 'dev' environment
    $config['bootstrap'][] = 'debug';
    $config['modules']['debug'] = [
        'class' => 'yii\debug\Module',
        // uncomment the following to add your IP if you are not connecting from localhost.
        //'allowedIPs' => ['127.0.0.1', '::1'],
    ];

    $config['bootstrap'][] = 'gii';
    $config['modules']['gii'] = [
        'class' => 'yii\gii\Module',
        // uncomment the following to add your IP if you are not connecting from localhost.
        //'allowedIPs' => ['127.0.0.1', '::1'],
    ];
}

return $config;
