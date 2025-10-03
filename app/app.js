import { createToast } from "../lib/utility.js";
import { route } from "../model/model.js";

function initListeners (){
    $("form button").on("click", (e) => {
        e.preventDefault();

        const un = $("#username").val().trim();
        console.log(un)
        let unl = un.length;
        if (un == "") {
            alert("Username Cannot Be Empty");
        } else if (unl < 8) {
            alert("Username Must Be At Least 8 Charaters Long");
        } else if (unl > 10) {
            alert("Username Must Be Less That 10 Characters Long")
        } else if (un.includes (" ")) {
            alert("Username Cannot Have Spaces")
        } else {
            createToast({message: `Welcome, ${un}`});
    
        }
    });
}

function initRouting() {
    $(window).on("hashchange", route);
    route();
}

$(document).ready(function () {
    initRouting();
    initListeners();
});
