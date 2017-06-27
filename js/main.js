$(document).ready(function(){
  $(window).load(function(){
	   $("#loader").fadeOut("slow");
     $("html,body").animate({scrollTop: 0}, 1000);
  });
  // $('#hamburger').click(function(){
  //   if ($('.sub-menu').is(':hidden')) {
  //     $('.sub-menu').slideDown();
  //   } else {
  //     $('.sub-menu').slideUp();
  //   }
  // });
});

var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope, $rootScope,$timeout) {
   $rootScope.$on('$includeContentLoaded', function() {
	    $timeout(function(){
	    	var jq = $.noConflict();
          jq('#hamburger').click(function($){
            if (jq('.sub-menu').is(':hidden')) {
              jq('.sub-menu').slideDown();
            } else {
              jq('.sub-menu').slideUp();
            }
          });
        });
	  });
});
