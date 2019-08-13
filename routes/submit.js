var express = require('express');
var router = express.Router();

// 提交验证页面
router.post('/', async function (req, res, next) {
    const { userName,userPassword,email,code } = req.body;
    if ( code === req.cookies.code) {
        // 正确则写入数据库
        res.json({
            "state":200,
            "msg":"验证码是正确的"
        })
    } else {
        // 反之
        res.json({
            "state":500,
            "msg":"验证码是不正确的"
        })
    }
});

module.exports = router;
