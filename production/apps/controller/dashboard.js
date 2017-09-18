/**
 * Created by Deepak on 7/14/2017.
 */
$(document).ready(function() {
    var UserData =JSON.parse(sessionStorage.getItem("UserData"));

    $("#WelcomeSpan").text(UserData.USERNAME);
    $("#Logspan").text(UserData.USERNAME);

    $.ajax({

        type : 'POST',
        url  : '../production/apps/API/UserCount.php',

        beforeSend: function()
        {

        },
        success :  function(data)
        {


            $("#TOTCLIENTUSERS").html(data)
        }
    });
});

function CallForm(path) {
    $("#MainContainer").load(path, function (responseText, textStatus, XMLHttpRequest) {
        $('.collapse-link').on('click', function() {
            var $BOX_PANEL = $(this).closest('.x_panel'),
                $ICON = $(this).find('i'),
                $BOX_CONTENT = $BOX_PANEL.find('.x_content');

            // fix for some div with hardcoded fix class
            if ($BOX_PANEL.attr('style')) {
                $BOX_CONTENT.slideToggle(200, function(){
                    $BOX_PANEL.removeAttr('style');
                });
            } else {
                $BOX_CONTENT.slideToggle(200);
                $BOX_PANEL.css('height', 'auto');
            }

            $ICON.toggleClass('fa-chevron-up fa-chevron-down');
        });

        $('.close-link').click(function () {
            var $BOX_PANEL = $(this).closest('.x_panel');

            $BOX_PANEL.remove();
        });


    });
}