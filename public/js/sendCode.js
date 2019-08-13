$(document).ready(function () {
    $('.sendCode').click(function () {
        // 用户名/密码/邮箱
        const userName = $('.userName').val();
        const userPassword = $('.userPassword').val();
        const email = $('.email').val();
        // 判断用户名信息不能为空
        if (userName && userPassword && email) {
            // 不为空的情况下就提交
            $.ajax({
                type: 'POST',
                url: 'http://localhost:8889/sendCode',
                data: {
                    userName,
                    userPassword,
                    email
                },
                success: function (result) {
                    console.log(result)
                }
            })
        } else {
            alert("用户名/密码/邮箱有误！")
        }
    })
})