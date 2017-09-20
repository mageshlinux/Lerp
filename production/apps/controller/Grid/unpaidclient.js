/**
 * Created by Deepak on 9/20/2017.
 */
$(document).ready(function() {

    $('#UnPaidClientDetails').DataTable({
        responsive: true
    });

    callUnPaidClientGrid();
});
function callUnPaidClientGrid()
{
    var data=[{"name":"stmt","value":"select * from client where clientid<>-1 and balanceamount<>0"}];
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
                    $('#UnPaidClientDetails').DataTable().row.add([
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