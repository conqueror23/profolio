
function ShowPage(page_no){
    page_arr=["front_end","back_end","database"];
    // alert(page_no);
    
    //wrong here?

    for(var i in page_arr){
        
        if(i === page_no){
            //works on i =2
            document.getElementById(page_arr[page_no]).style.display = 'block';
        }else{
            document.getElementById(page_arr[page_no]).style.display = 'none';
        }
    }

//         if(i ==page_no){
//             $(page_arr[page_no]).css('display','block');
//         }else{
//             $(page_arr[page_no]).css('display','none');
//         }

//     // var obj =document.getElementById(page_arr[page_no]).style.display = 'block';

// }

}
//slidebar controlls

function ShowSlideBar(){
    // $('.SlideBar').css('display','block');
    $('.SlideBar').css('width','20%');
    $('.content').css('marginLeft','20%');

}
function CloseSideBar(){
    $('.SlideBar').css('width','0%');
    $('.content').css('marginLeft','0%');
    // $('.SlideBar').css('display','none');
}


//sidebarControlls

function HideSideBar(){
    $('.CompleteSidebar').css('display','none');
    $('.AbbrSideBar').css('display','block');
    $('.sidebar').css("height","15%");
    $('.sidebar').css("width","8%");
}

function ShowSideBar()
{
    $('.CompleteSidebar').css('display','block');
    $('.AbbrSideBar').css('display','none');
    $('.sidebar').css("height","60%");
    $('.sidebar').css("width","15%");

}

// page loadup 
$(document).ready(function (){

    var Myrequest = new XMLHttpRequest();
    Myrequest.open('GET','/user.json','JSON');
    Myrequest.onload = function (){
        var data =JSON.parse(Myrequest.response);
        $('#front_end').html(data['skills']['front_end']);
        $('#back_end').html(data['skills']['back_end']);
        $('#database').html(data['skills']['database']);
        $('#info').html(Myrequest.response);
        }
    Myrequest.send();

})

function ShowDetails(){
    //progressbar moving
    $(".progressbar").css('display','block');
    var elem = document.getElementById('progress');
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
        clearInterval(id);
        } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
        }
    }
    
    setTimeout(() => {
        $('#personal').css('display','block');
        var info =$('#info').html();
        info = JSON.parse(info);
        // alert(typeof(info)); 
        for(item in info){
            if(item != 'skills'){
                $('#details').append('<tr>');
                $('#details').append('<td>'+item+'</td>');
                $('#details').append('</tr>');
                $('#details').append('<td>'+info[item]+'</td>');
            }else{
                $('#details').append('<tr>');
                $('#details').append('<td>'+item+'</td>');
                $('#details').append('</tr>');
                for(direction in info[item]){
                    $('#details').append('<tr>');
                    $('#details').append('<td>'+direction+'</td>');
                    $('#details').append('</tr>');
                    $('#details').append('<td>'+info[item][direction]+'</td>');          
                }
            }
        }
    }, 1000);
    setTimeout(() => {
        $(".progressbar").css('display','none');
        
    }, 1000);
}