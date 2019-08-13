var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');

// 路由：发送邮箱验证码
router.post('/', async function (req, res, next) {

    // 重复发送清楚cookie
    res.clearCookie('code');

    // POST拿到的信息
    const email = req.body.email;

    // 随机6位数的验证码
    let verificationCode = (() => {
        let sixCode = '';
        for (let i = 0; i < 5; i++) {
            sixCode += Math.floor(Math.random() * 10)
        }
        return sixCode;
    })();

    // 创建一个发送机
    let transporter = nodemailer.createTransport({
        host: "smtp.sina.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "smtpqian@sina.com",
            pass: "08e1b64db1f99e81"
        }
    });

    // 发送邮件
    await transporter.sendMail({
        from: '"Father Q 👻" <smtpqian@sina.com>',
        to: email,
        subject: "请接收验证码",
        html: `<b>验证码：${verificationCode}</b>`
    });

    res.cookie('code',verificationCode);

    res.json({
        "state":200
    })
});

module.exports = router;
