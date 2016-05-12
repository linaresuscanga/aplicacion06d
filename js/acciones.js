                                       // JavaScript Document
$(document).ready(function(e) {
    document.addEventListener('deviceready', function() {
		$('#beep').tap(function () {
			navigator.notification.beep(4);// numero de veces que deseas que notifique
		});//beep
		$('#btnvibrar').on('tap', function (){
			navigator.notification.vibrate(200);
		});
	});
});