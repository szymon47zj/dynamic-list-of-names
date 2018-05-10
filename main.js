	function myFunction() {

		// Declare variables
		var input, wpisywanyTekst, Lista, list_Item, a, i;
		input = document.getElementById('myInput');
		wpisywanyTekst = input.value.toUpperCase();
		Lista = document.getElementById("myUL");
		list_Item = Lista.getElementsByTagName('li');

		// Loop through all list items, and hide those who don't match the search query
		for (i = 0; i < list_Item.length; i++) {

			a = list_Item[i].getElementsByTagName("a")[0];

			if (a.innerHTML.toUpperCase().indexOf(wpisywanyTekst) > -1) {
				list_Item[i].style.display = "";
			} else {
				list_Item[i].style.display = "none";
			}
		}
	}
