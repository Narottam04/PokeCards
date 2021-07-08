function sortCover() {
    let heading = document.querySelectorAll('.pokeItem');
    let search = document.getElementById('search').value.toLowerCase();

    for (let i = 0; i < heading.length; i++) {
        let searchVal = heading[i].innerText

        if (searchVal.toLowerCase().indexOf(search) > -1) {
            heading[i].style.display = "block"
        }
        else {
            heading[i].style.display = "none"
        }
    }
}

sortCover();
