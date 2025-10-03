

export function createToast(toastObj) {
    const toastDiv = document.createElement("div");
    toastDiv.className = "toast";
    toastDiv.innerText = toastObj.message;
    console.log(toastObj.message);
    document.body.appendChild(toastDiv);
  
    requestAnimationFrame(() => toastDiv.classList.add("show"));
  
    setTimeout(() => {
      toastDiv.classList.remove("show");
      toastDiv.classList.add("hide");
      setTimeout(() => {
        document.body.removeChild(toastDiv);
      }, 500);
    }, 3000);

    console.log("working");
  }

