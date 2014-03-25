window.onload = function () {
	var form = document.getElementById('book-form');
	form.onsubmit = function () {
		var book_name = form.book_name.value.trim();
		var book_author = form.book_author.value.trim();

		if (book_name == "") {
			alert("Book name field is required !");
			return false;
		} else if (book_author == "") {
			alert("Book author field is required !");
			return false;
		}

		var method = form.method;
		var url = form.action;
		var xmlhttp;

		xmlhttp = new XMLHttpRequest();
		xmlhttp.open(method, url, true);
		xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xmlhttp.send();

		xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 201) {
                response = JSON.parse(xmlhttp.responseText);
                alert("Book name: " + response.book_name + "\nBook author: " + response.book_author);
            } else if (xmlhttp.readyState == 4 && xmlhttp.status == 400) {
                response = JSON.parse(xmlhttp.responseText);
                alert(response.error.message);
            }
        }
	}
}