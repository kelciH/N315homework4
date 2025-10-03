

export function route() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    let contentName = pageID + "Content";
  
    if (pageID == "") {
        $.get("pages/home.html", (data) => {
            $("#app").html(data); 
        });
    } else {
        $.get("pages/" + pageID + ".html", (data) => {
            $("#app").html(data); 
        });
    }
  
  }