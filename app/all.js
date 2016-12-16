Skip to content
This repository
Search
Pull requests
Issues
Gist
@DRickRichard88
Unwatch 6
Star 0
Fork 0 codequest-eu/alberto-landing
Code  Issues 0  Pull requests 0  Projects 0  Wiki  Pulse  Graphs
Tree: 671817b26a Find file Copy pathalberto-landing/app/all.js
671817b  an hour ago
@maretamara maretamara styling error
2 contributors @maretamara @DRickRichard88
RawBlameHistory    
94 lines (76 sloc)  2.07 KB

var myDelay;
var aText = new Array(
	"Hi, my name is Alberto!",
	"I’m concierge for your team."
);

var iSpeed = 80; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter(){
	sContents =  ' ';
	iRow = Math.max(0, iIndex-iScrollAt);
	var destination = document.getElementById("typedtext");

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
	myDelay = setTimeout(typewriter, 3000);
}
myDelayFunction();


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
			$(".email-input").parent().append('<div class="error-text">Invalid e-mail</div>');
		}
		if (mailV)	 {

			$('.button-cta').html('Sending');

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
					$('.button-cta').html('Wiadomość wysłana ;)')
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
