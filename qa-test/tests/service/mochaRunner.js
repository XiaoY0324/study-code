const Mocha = require('mocha');

const mocha = new Mocha({
    reporter: 'mochawesome',
    reporterOptions: {
        reportDir: './docs/mochawesome-reporter'
    }
});

mocha.addFile('./tests/service/router.spec.js');

mocha.run(function() {
    console.log('done');
    process.exit(0); // 正常退出 1为异常退出
});