function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
};


function openArtist(evt, artistChoise) {
    // Declare all variables
    var i, info_artist, artistName;

    // Get all elements with class="tabcontent" and hide them
    info_artist = document.getElementsByClassName("catalog__info-artist");
    for (i = 0; i < info_artist.length; i++) {
        info_artist[i].style.display = "none";
    }

    // Get all elements with class="artistName" and remove the class "active"
    artistName = document.getElementsByClassName("artistName");
    for (i = 0; i < artistName.length; i++) {
        artistName[i].className = artistName[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(artistChoise).style.display = "block";
    evt.currentTarget.className += " active";
};


document.getElementById("defaultOpen").click();
document.getElementById("defaultArtist4").click();

const flag = document.querySelectorAll('.tablinks');
flag.forEach((selectedFlag) => selectedFlag.addEventListener('click',() => {
    if (selectedFlag.classList.contains('btn-france')) {
        console.log('this is france');
        document.getElementById("defaultArtist").click();
    }
    if (selectedFlag.classList.contains('btn-germany')) {
        console.log('this is germany');
        document.getElementById("defaultArtist2").click();
    }
    if (selectedFlag.classList.contains('btn-italy')) {
        console.log('this is italy');
        document.getElementById("defaultArtist3").click();
    }
    if (selectedFlag.classList.contains('btn-russian')) {
        console.log('this is russian');
        document.getElementById("defaultArtist4").click();
    }
    if (selectedFlag.classList.contains('btn-spain')) {
        console.log('this is spain');
        document.getElementById("defaultArtist5").click();
        $('.accordion').accordion({active: 4 });
    }
    }))