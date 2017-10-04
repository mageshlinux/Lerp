/**
 * Created by Deepak on 10/4/2017.
 */
$(document).ready(function() {

    $('#TodayCaseList').DataTable({
        responsive: true
    });

    callTodayCaseList();
});
function callTodayCaseList()
{
    var todays=DateFormat(new Date(), "yyyy-mm-dd");
    var data=[{"name":"stmt","value":"select * from client where clientid<>-1 and HEARINGDATE='"+todays+"'"}];
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
                var tnt=1;
                for(i in data)
                {
                    var hrdate=new Date(data[i].HEARINGDATE);
                    $('#TodayCaseList').DataTable().row.add([
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
