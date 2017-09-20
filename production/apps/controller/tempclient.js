/**
 * Created by Deepak on 7/19/2017.
 */
var ClienObj=[];
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
    var data = $("#ClientForm").serializeArray();
    var file_data = $("#Attach").prop("files")[0];
    var form_data = new FormData();
    form_data.append("file", file_data)
    var strr={"name":"clienttype","value":"TEMP"};
    data.push(strr);
    /*var strr={"name":"Attach","value":form_data};
    data.push(strr);*/

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

            if(data!=0) {

                data = JSON.parse(data);
                ClienObj=data;
                $("#clientname").val(data.CLIENTNAME);
                $("#clientphno").val(data.PHNO);
                $("#clientaddress").val(data.ADDRESS);
                $("#clientcasetype").val(data.CASETYPE);
                $("#clienttotalamount").val(data.TOTALAMOUNT);
                $("#clientpaidamount").val(data.PAIDAMOUNT);
                $("#clientbalamount").val(data.BALANCEAMOUNT);
                $("#clientcasestage").val(data.CASESTAGE);
                var date = moment(data.HEARINGDATE); //Get the current date
                date = (date.format("DD/MMM/YYYY"));
                $("#clienthearingdate").val(date);
                $("#clientphno").trigger("blur")
                $("#ClientSave").css("display","none");
                $("#ClientUpdate").css("display","inline-table");
                $("#ClientDelete").css("display","inline-table");
                NProgress.done();
            }
            else
            {
                NProgress.done();
                return false;
            }

            //}

            /*else if(data.length==0){
                NProgress.done();
            }*/
        }
    });
    return false;
}
function Calculatebal(idd)
{
    $("#clientbalamount").val($("#clienttotalamount").val()-idd.value);
}
function resetClients()
{
    $("#ClientSave").css("display","inline-table");
    $("#ClientUpdate").css("display","none");
    $("#ClientDelete").css("display","none");
}
function UpdateClient()
{
    var data = $("#ClientForm").serializeArray();
    var file_data = $("#Attach").prop("files")[0];
    var form_data = new FormData();
    form_data.append("file", file_data)

    var strr={"name":"ClientId","value":ClienObj.CLIENTID};
     data.push(strr);

    var strr1={"name":"clienttype","value":"TEMP"};
    data.push(strr1);

    NProgress.start();
    $.ajax({

        type : 'POST',
        url  : 'apps/API/Client/UpdateClient.php',
        data : data,
        beforeSend: function()
        {

        },
        success :  function(data)
        {

            if(data=="Updated")
            {
                NProgress.done();
                $.notify("Client Updated","success");
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
function DeleteClient()
{
    var data = $("#ClientForm").serializeArray();
    var strr={"name":"ClientId","value":ClienObj.CLIENTID};
    data.push(strr)


    NProgress.start();
    $.ajax({

        type : 'POST',
        url  : 'apps/API/Client/DeleteClient.php',
        data : data,
        beforeSend: function()
        {

        },
        success :  function(data)
        {

            if(data=="Deleted")
            {
                NProgress.done();
                $.notify("Client Deleted","success");
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