console.log('geonet');

$(document).ready(function(){


	//accessing key from json file
	var myKey = JSON.parse(apiKey);
	// console.log(myKey[0]);
	myKey = myKey[0].key;
	// console.log(myKey);

  var endPoint;
  var size;


	//dynamically creating the script element and
//giving src attribute the google plugin with key from external json file
var script = document.createElement('script');
script.src='https://maps.googleapis.com/maps/api/js?key='+ myKey[0].key + '&callback=initMap';
document.getElementsByTagName('body')[0].appendChild(script); //appending to the body of index.html
// var map;


function displayData(ep, si){
  // console.log(ep, si);
	$.ajax({
	  url : 'https://api.geonet.org.nz/intensity?type=reported',
		type :'GET',
		dataType :'json',
		success:function(data){
			function initMap() {

				var map = new google.maps.Map(document.getElementById('map'), {zoom: 6, center: {lat: -42.027300, lng: 172.718029});

							for (var i = 0; i < data.features.length; i++) {
							 for (var a = 0; a < data.features[i].geometry.coordinates.length; a++) {

								 // if (ep === 'features'){
								 //   features(data, ep, si);
								 // } else if (ep === 'coordinates'){
								 //   coordinates(data, ep, si);
								 // }
								 	console.log(data);

							 }
							}
								google.maps.event.addDomListener(window, "load", initMap);
			};


		},

    error:function(){
		console.log('error');
		}

	});//ajax

};// end display function

}); //document ready

// <script async defer
// src="https://maps.googleapis.com/maps/api/js?key=" + myKey&callback=initMap">
// </script>
