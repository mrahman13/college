(function () {
    var myImageAr = [
        "Lecturers.jpeg",
        "StayBright.jpeg",
        "Computing.jpeg"
    ];

    var countImage = 0;
    var img = document.getElementsByClassName("resize-img")[0];
    img.style.width = "70%";
    img.style.height = "40%";

    chgImage()
    setInterval(chgImage, 3000);

    function chgImage() {
        img.src = "images/" + myImageAr[countImage];
        countImage++;
        if (countImage > myImageAr.length - 1) countImage = 0;
    }
})();

/*https://www.youtube.com/watch?time_continue=1&v=PQ2d23gPln0&embeds_euri=https%3A%2F%2Fshuspace.shu.ac.uk%2F&source_ve_path=MjM4NTE&feature=emb_title*/
/*Source I used to help me implement an image rotator*/