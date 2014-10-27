/* Cobalt Smart Mailer Core */

$(document).ready(function(){


$('ul').sortable({
    items:'li',
	axis: 'y'
})

	// Make table row active on hover
	$('.sTable').mouseenter(function(){
		$('body').find('.activeHover').removeClass('activeHover')
		$(this).addClass('activeHover')
		   
	});
	$('.sTable').mouseenter(function(){
	$('body').find('.toolbox').remove();
		$(this).append('<div class="toolbox"><div class="tDelete">Delete</div><div class="tClone">Clone</div></div>')      
	});
	$('p,h1,h2,h3,h4').mouseenter(function(){
		$(this).addClass('activeHover')
		$(this).append('<div class="editIcon">Edit</div>')
	});
	$('p,h1,h2,h3,h4').mouseleave(function(){
		$(this).removeClass('activeHover')
		$('body').find('.editIcon').remove();
	});
	$('.jqte-test').jqte();
	// Lets make the text editable
	$('body').on('click','.editIcon',function(){
		var textTemp = $(this).parent().html();
		$(this).parent().addClass('current');
		$( "#dialog" ).dialog( "open" );
		
		$('.jqte_editor').html(textTemp);
		
	});
	
	$('body').on('click','.toolbox',function(){
		alert('sdf');
	});
	
	$(function() {
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "fade",
        duration: 200
		
      },
      hide: {
        effect: "fade",
        duration: 200
      }
	  
    });
 
 // Save edits button
 $('.saveE').click(function(){
	var jqteIn = $('.jqte_editor').html();
	$('.current').html(jqteIn);
	$('.current').removeClass('current')
	$( "#dialog" ).dialog( "close" );
	});
  
  });
  
  $('.templateB').click(function(){
		$('#header').animate({'left':'200px'});
		return false;
	});
	

	});
	
