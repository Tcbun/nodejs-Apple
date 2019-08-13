$(document).ready(function () {
    $('.submit').click(function () {
        // 用户名/密码/邮箱/验证码
        const userName = $('.userName').val();
        const userPassword = $('.userPassword').val();
        const email = $('.email').val();
        const code = $('.code').val();
        // 判断是否都填了
        if (userName && userPassword && email && code) {
            $.ajax({
                type: 'POST',
                url: 'http://localhost:8889/submit',
                data: {
                    userName,
                    userPassword,
                    email,
                    code
                },
                success: function (data) {
                    const { state } = data;
                    if ( state === 200 ) {
                        alert('提交成功！')
                    } else {
                        alert('提交失败！注册码有误！')
                    }
                }
            })
        } else {
            alert('用户名/密码/邮箱/验证码有误！')
        }
    })
})