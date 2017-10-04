/**
 * Created by Deepak on 7/14/2017.
 */
$(document).ready(function() {
    var UserData =JSON.parse(sessionStorage.getItem("UserData"));

    $("#WelcomeSpan").text(UserData.USERNAME);
    $("#Logspan").text(UserData.USERNAME);
    /*$('#ClientDetailss').DataTable({
        responsive: true
    });*/
    TotalUserCount();

});
function TotalUserCount()
{
    $.ajax({

        type : 'POST',
        url  : '../production/apps/API/Client/UserCount.php',

        beforeSend: function()
        {

        },
        success :  function(data)
        {


            $("#TOTCLIENTUSERS").html(data)
        }
    });
    PaidUserCount();
}
function PaidUserCount()
{
    $.ajax({

        type : 'POST',
        url  : '../production/apps/API/Client/PaidUserCount.php',

        beforeSend: function()
        {

        },
        success :  function(data)
        {


            $("#PaidCountCnt").html(data)
        }
    });
    UnPaidUserCount();
}
function UnPaidUserCount()
{
    $.ajax({

        type : 'POST',
        url  : '../production/apps/API/Client/UnPaidUserCount.php',

        beforeSend: function()
        {

        },
        success :  function(data)
        {


            $("#UnPaidCountCnt").html(data)
        }
    });
    TempClientCount();
    //callClientGrid();
}
function TempClientCount()
{
    var data=[{"name":"stmt","value":"select * from client where clientid<>-1 and typeclient='TEMP'"}];
    $.ajax({

        type : 'POST',
        url  : 'apps/API/Grid/clientapi.php',
        data : data,
        beforeSend: function()
        {

        },
        success :  function(data)
        {

            if(data!=0) {
                data = JSON.parse(data);
                $("#TempClientCountCnt").html(data.length);
            }
            else
            {

                return false;
            }
        }
    });
}
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
function callClientGrid()
{
    $.ajax({

        type : 'GET',
        url  : 'apps/API/Client/ClientGrid.php',
        beforeSend: function()
        {

        },
        success :  function(data)
        {

            if(data!=0) {
                data = JSON.parse(data);
                var tnt=1;
                    for(i in data)
                    {
                        var hrdate=new Date(data[i].HEARINGDATE);
                        $('#ClientDetailss').DataTable().row.add([
                            ''+tnt+'',
                            ''+data[i].CLIENTNAME+'',
                            ''+data[i].PHNO+'',
                            ''+data[i].ADDRESS+'',
                            ''+data[i].CASETYPE+'',
                            ''+data[i].TOTALAMOUNT+'',
                            ''+data[i].PAIDAMOUNT+'',
                            ''+data[i].BALANCEAMOUNT+'',
                            ''+data[i].CASESTAGE+'',
                            ''+DateFormat(hrdate, "dd/mmm/yyyy")+'',
                        ]).draw(false);
                        tnt++;
                    }
            }
            else
            {

                return false;
            }
        }
    });
}