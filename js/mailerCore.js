/* Cobalt Smart Mailer Core */

$(document).ready(function(){
	
	var editableElem = 'p,h1,h2,h3,h4'; // These HTML elems will be editable within the template
	var modalDur = 200; // Set the timing of the modal fade ins
	
	/* Make email elements sortable on the y axis */
	$('ul').sortable({
		items:'li',
		axis: 'y'
	});

	// Make table row active on hover
	$('.sTable').mouseenter(function(){
		$('body').find('.activeHover').removeClass('activeHover'); // Remove all other active classes
		$(this).addClass('activeHover'); // Add active class to current element
	});
	
	// Append the side toolbox on elem mouse over
	$('.sTable').mouseenter(function(){
		$('body').find('.toolbox').remove(); // Remove any other instances of the tool bar
		$(this).append('<div class="toolbox"><div class="tDelete">Delete</div><div class="tClone">Clone</div></div>'); // Append the tool bar      
	});
	
	// Show the edit icon on editableElem mouse over
	$(editableElem).mouseenter(function(){
		$(this).addClass('activeHover');
		$(this).append('<div class="editIcon">Edit</div>');
	});
	
	// Remove edit icon on editableElem mouse leave
	$(editableElem).mouseleave(function(){
		$(this).removeClass('activeHover');
		$('body').find('.editIcon').remove();
	});
	
	// Init JQTE plugin (WYSIWIG editor)
	$('.jqte-test').jqte();
	
	// Bring up WYSIWIG editor and pass html into text area
	$('body').on('click','.editIcon',function(){
		var textTemp = $(this).parent().html(); // Set variable to the HTML to be edited
		$(this).parent().addClass('current'); // Add current class
		$( "#dialog" ).dialog( "open" ); // Open jQuery UI modal window
		$('.jqte_editor').html(textTemp); // Set the HTML of the modal text area to currently selected elem HTML
	});
	
	// Set some global settings for the jQuery UI modal window
	$(function() {
		$("#dialog").dialog({
			autoOpen: false,
			show: {
				effect: "fade",
				duration: modalDur
			},
			hide: {
				effect: "fade",
				duration: modalDur
			}
	    });
    });
 
	// Modal save changes button
	$('.saveE').click(function(){
		var jqteIn = $('.jqte_editor').html(); // Set var to new HTML data
		$('.current').html(jqteIn); // Inject this HTML into the selected current elem
		$('.current').removeClass('current'); // Remove active class
		$( "#dialog" ).dialog( "close" ); // Close jQuery UI dialog
	});
	  
	// Sidebar slide out
	$('.templateB').click(function(){
		$('#header').animate({'left':'200px'});
		return false;
	});

});
    // create the module and name it cobaltApp
        // also include ngRoute for routing
    var cobaltApp = angular.module('cobaltApp', ['ngRoute']);

    // configure our routes
    cobaltApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'templates/absbest.html',
                controller  : 'mainController'
            })
			.when('/gusto', {
				templateUrl : 'templates/gusto/index.html',
				controller : 'mainController'
			});
    });

    // create the controller and inject Angular's $scope
    cobaltApp.controller('mainController', function($scope) {
        
    });
