window.addEventListener("load", visSkaerm);

function visSkaerm() {
    document.querySelector("#game_img1").addEventListener("mouseover", enlarge);
    document.querySelector("#user_img1").addEventListener("mouseover", enlarge1);
}


function enlarge() {
    console.log("enlarge");


    document.querySelector("#game_img1").classList.add("hide");
    document.querySelector("#game_img2").classList.remove("hide");
    document.querySelector("#game_img2").classList.add("enlarge");

    document.querySelector("#game_img1").addEventListener("mouseout", reset);




}

function enlarge1() {
    console.log("enlarge");




    document.querySelector("#user_img1").classList.add("hide");
    document.querySelector("#user_img2").classList.remove("hide");
    document.querySelector("#user_img2").classList.add("enlarge");

    document.querySelector("#user_img1").addEventListener("mouseout", reset);


}

function reset() {
    document.querySelector("#game_img2").classList.remove("enlarge");
    document.querySelector("#game_img2").classList.add("hide");
    document.querySelector("#game_img1").classList.remove("hide");

    document.querySelector("#user_img2").classList.remove("enlarge");
    document.querySelector("#user_img2").classList.add("hide");
    document.querySelector("#user_img1").classList.remove("hide");
}

//function textHoverHide() {
//    document.querySelector("#col_text").classList.add("hide");
//}
