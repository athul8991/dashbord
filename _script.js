var degr
var flag =true;
$(document).ready(()=>{

$('#open').click(()=>{
  openNav();
})
$('#close').click(()=>{
  closeNav();
})

$('#admManage').click(()=>{
  run('#admManage')

  $('#adminmenu').slideToggle("slow");

});

$('#adManage').click(()=>{
  run("#adManage")

  $('#admenu').slideToggle("slow");
});

$('#aproove').click(()=>{
  run('#aproove')

  $('#aproovemenu').slideToggle("slow");
})


})

function run(id){
if(flag==true){
  degr =-90;
  console.log(flag)
}else{
  degr =90
  console.log(flag)
}

$(id).find('.fa-caret-down').animate(
{ deg: degr },
{
  duration: 900,
  step: function(now) {  
  
    $(this).css({ transform: 'rotate(' + now + 'deg)' } );
    if(degr==-90){
      flag=false;
    }else{
      flag=true
    }  
  
  }
}
);

}


function openNav() {
$("#mySidenav").animate({'width':'250px'},'slow');

$("#main").animate({'margin-left':'250px'},'slow');
$("#close").css('display','block');
$("#open").css('display','none')

}

function closeNav() {

$('#mySidenav').animate({'width':'0px'},'slow');
$('#main').animate({'margin-left':'0px'},'slow')
$("#open").css('display','block')



}