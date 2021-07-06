function sort() {
    let images = document.getElementsByTagName('img');
    let search = document.getElementById('search').value.toLowerCase();

    for (let i = 0; i < images.length; i++) {
        let searchVal = images[i].getAttribute('alt')

        if (searchVal.toLowerCase().indexOf(search) > -1) {
            images[i].style.display = "block"
        }
        else {
            images[i].style.display = "none"
        }
    }

}

sort();
lightGallery(document.getElementById('lightgallery'));


