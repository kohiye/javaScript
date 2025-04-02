let tiles = document.getElementsByTagName("td");
for (var i=0; i<tiles.length; ++i){
    coords = tiles[i].innerHTML.split(":");
    if ((Number(coords[0]) + Number(coords[1])) % 2 == 0){
        tiles[i].style.backgroundColor = "red";
    }
}