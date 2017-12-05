var statusDiv = document.getElementById("area-status");
var btn = document.getElementById("btn-status");

btn.addEventListener("click", function(){
	console.log("Click rồi");
	// Create a XHR object 
	var xhr = new XMLHttpRequest(); 
	xhr.open('GET', "http://localhost:8080/DemoAjaxFilter/getStatus");

	
	xhr.onload = function(){
		// take data from server
		console.log(xhr.responseText); 
		var data = JSON.parse(xhr.responseText);
		console.log(data);

		var h1 = document.createElement("h1");
		h1.innerHTML = data;
		statusDiv.appendChild(h1);

	};
	xhr.send(); 
});


// Demo Show Table 
// this using Ajax
var table = $('#table-idols');
var tbody = table.children('tbody');
var btnShow = $('#btn-showtable');

btnShow.on("click", function(){
	table.css("display", "table");

	// Call Ajax 
	var request = $.ajax({
		url: 'getIdols',
		method: 'GET',
		cache: false		
	});
	request.done(function(data){
		// Success
		var idols = JSON.parse(data);
		console.log(idols);


		idols.forEach(function(idol, index){
			var row = createRow(idol, index);
			console.log(row);
			//row.appendTo(tbody);
			tbody.append(row);
			
		})
	});
	request.fail(function(msg){
		// 404, 500 
		alert("fail");
	});


});

var createCol = (text) => {
	var col = $("<td></td>").text(text);
	return col;
}

var createImage = (link) => {
	var image = $("<img/>");
	image.attr('src', 'http://localhost:8080/DemoAjaxFilter' + link);	
	image.attr('class', 'rounded');
	

	return image; 
}
var createLikeButton = (idol) => {
	
    var icon = $('<i></i>');
    icon.attr("class","fa fa-thumbs-up");
	var btnLike = $('<button></button>');	
	btnLike.attr("class","btn btn-info btn-lg");	
	btnLike.append(icon);

	// Add Event On Click
	btnLike.on("click", function(){
		console.log(idol);
		// Send Request Like
		var request = $.ajax({
			url: 'likeIdol',
			method: 'GET',
			data: idol
		});

		request.done(function(msg){

			toastr.success(msg);
		});

		request.fail(function(msg){
			alert("Fail");
		});

	});

	return btnLike; 
}

// return a row 
var createRow = (idol, index) => {
	var row = $("<tr></tr>");
	row.append(createCol(index));
	row.append(createCol(idol.name));	

	row.append(createCol().append(createImage(idol.imgUrl)));
	row.append(createCol(idol.chest));
	row.append(createCol(idol.waist));
	row.append(createCol(idol.hip));
	row.append(createCol().append(createLikeButton(idol)));
	

	return row;
}







