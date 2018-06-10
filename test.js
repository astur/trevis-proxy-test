const test = require('ava');
const scra = require('scra');

test('trevis-proxy-test', async t => {
    await scra({url: 'httpbin.org/ip', proxy: 'localhost:3128'}).then(res => {
        t.is(res.statusCode, 200);
    });
});
