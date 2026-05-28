function openMemory(){

    document.getElementById("intro").style.display = "none";
    document.getElementById("content").style.display = "block";

    let music = document.getElementById("music");

    music.play().catch(()=>{
        console.log("Autoplay blocked");
    });

}
