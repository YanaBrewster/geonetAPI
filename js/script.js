console.log('geonbnbmnbnmbet');

$(document).ready(function(){
	//accessing key from json file
	var myKey = JSON.parse(apiKey);
	console.log(myKey[0]);
	myKey = myKey[0].key;
	console.log(myKey);


	$.ajax({
	  url : 'https://api.geonet.org.nz/intensity?type=reported',
		type :'GET',
		dataType :'json',
		success:function(data){
			console.log(data);
				var markers = [];
				var i;

					for (var i = 0; i < data.features.length; i++) {
							var obj = {};

						obj.lat = JSON.parse(data.features[i].geometry.coordinates[1]);
						obj.lat = JSON.parse(data.features[i].geometry.coordinates[0]);

						markers.push(obj)

					}
					console.log(markers);
					initMap(markers);
		}, error:function(){
			console.log('error');
		}

	});//ajax


	var script = document.createElement('script');
	script.src='https://maps.googleapis.com/maps/api/js?key='+ myKey ;
	document.getElementsByTagName('body')[0].appendChild(script); //appending to the body of index.html

}); //document ready

	function initMap(allMarkers) {
		var marker = []
		var wellington = {lat: -41.2865, lng: 174.7762};
		var map =  new google.maps.Map(
			document.getElementById('map'), {zoom: 10, center: wellington});

		var a;
		for (a =0; a<allMarkers.length; a++) {

			var latLng = {lat:allMarkers[a].lat , lng:allMarkers[a].lng}

			var marker = new google.maps.Marker({
				position: latLng,
				map: map
			});

		}
	};
