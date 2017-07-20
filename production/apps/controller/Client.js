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