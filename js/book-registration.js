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
	}
}