
var myDelay;
var aText = new Array(
	"Hi, my name is Alberto !", 
	"I’m concierge for your team."
);

var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter(){
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementsByClassName("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "|";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 1000);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


function myDelayFunction() {
    myDelay = setTimeout(typewriter, 5000);
}
myDelayFunction();

//walidacja
$(document).ready(function() {
		$('.button-cta').on('click', function() {
			var wzorMaila = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;
			var mail = $('.email-input').val();
			var mailV = false;

				if(wzorMaila.test(mail)){
					mailV = true;
					console.log(mailV)
						$(".email-input").parent().remove('div');
				}else{
					mailV = false;
					console.log(mailV)
					$(".email-input").addClass('input-error')
						$(".email-input").parent().append('<div class="error-text">No ale daj normalnego mejla ;).</div>');
	
				}
					if (mailV)	 {
		
		$('.button-cta').html('Wysyłanie');
	
		var obj = {
			mail: mail,
		};
		var sendValue=$.param(obj);
		console.log(sendValue);
		
		
		$.ajax({
			method: 'POST',
			url: 'URL' ,
			data: sendValue, 
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			}).done(function(data) {
				if(msg = 1) {
						$('.button-cta').html('Wiadomość wysłana ;)')
				} else {
					console.log('error');
				}
				console.log(data);	
  		});

	
	}else{
		
		console.log('ERROR')
	}
		return false;	
	});		
});
