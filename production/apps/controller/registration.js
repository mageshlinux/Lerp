/**
 * Created by Deepak on 7/11/2017.
 */
$(document).ready(function() {
$("#signupform").validator();
});

function UserRegistration()
{
    var data = $("#signupform").serialize();
    NProgress.start();
    $.ajax({

        type : 'POST',
        url  : '../production/apps/API/register.php',
        data : data,
        beforeSend: function()
        {

        },
        success :  function(data)
        {

            if(data==1){
                NProgress.done();
                $.notify("Email Already taken.Please Try different Email-Id","info",{autoHide:false});

            }
            else if(data=="registered")
            {
                NProgress.done();
                $.notify("Registered Successfully","success");
                $('#signupform').get(0).reset();

            }
            else{
                NProgress.done();
                $.notify("Server encountered error.Please check with Administrator","error");

            }
        }
    });
    return false;
}
function UserLogin()
{
    var data = $("#LoginForm").serialize();
    alert(data)
    NProgress.start();
    $.ajax({

        type : 'POST',
        url  : '../production/apps/API/login.php',
        data : data,
        beforeSend: function()
        {

        },
        success :  function(data)
        {
alert(data)
            if(data==1){
                NProgress.done();


            }
            else if(data=="registered")
            {
                NProgress.done();


            }
            else{
                NProgress.done();


            }
        }
    });
    return false;
}