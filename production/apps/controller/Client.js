/**
 * Created by Deepak on 7/19/2017.
 */
$(document).ready(function() {
    $('#ClientForm').validator();
    $('#clienthearingdate').daterangepicker({
        singleDatePicker: true,
        startDate: moment(),
        locale:{format: 'DD/MMM/YYYY'}
    });
    //alert($.datepicker.formatDate('dd/M/yy', new Date("20/07/2017")))
    var date = moment(); //Get the current date
    //alert(date.format("DD/MMM/YYYY"))
});
function SaveClient()
{
    var data = $("#ClientForm").serialize();
    NProgress.start();
    $.ajax({

        type : 'POST',
        url  : 'apps/API/Client/InsertClient.php',
        data : data,
        beforeSend: function()
        {

        },
        success :  function(data)
        {

            if(data==1){
                NProgress.done();
                $.notify("Client Name Already taken.Please Try different Client Name","info",{autoHide:false});

            }
            else if(data=="registered")
            {
                NProgress.done();
                $.notify("New Client Created Successfully","success");
                $('#ClientForm').get(0).reset();

            }
            else{
                NProgress.done();
                $.notify("Server encountered error.Please check with Administrator","error");

            }
        }
    });
    return false;
}
function FindClientName(name)
{
    var data = $("#ClientForm").serialize();
    NProgress.start();
    $.ajax({

        type : 'POST',
        url  : 'apps/API/Client/PickClient.php',
        data : data,
        beforeSend: function()
        {

        },
        success :  function(data)
        {

            data=JSON.parse(data);

            //if(data.length>0){

                $("#clientname").val(data.CLIENTNAME);
                $("#clientphno").val(data.PHNO);
                $("#clientaddress").val(data.ADDRESS);
                $("#clientcasetype").val(data.CASETYPE);
                $("#clienttotalamount").val(data.TOTALAMOUNT);
                $("#clientpaidamount").val(data.PAIDAMOUNT);
                $("#clientbalamount").val(data.BALANCEAMOUNT);
                $("#clientcasestage").val(data.CASESTAGE);
                var date = moment(data.HEARINGDATE); //Get the current date
                date=(date.format("DD/MMM/YYYY"));
                $("#clienthearingdate").val(date);
            NProgress.done();

            //}

            /*else if(data.length==0){
                NProgress.done();
            }*/
        }
    });
    return false;
}