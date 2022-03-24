
// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");



// The button that opens the modal
var modalBtn = document.querySelector("#profileList");
modalBtn.addEventListener("click",function(){
    modal.style.display = "block";
});

const modalBtn2s = document.querySelectorAll('.updateBtn');
modalBtn2s.forEach(btn => {
    btn.addEventListener('click', async (event) => {
        const att = event.target.getAttribute("data-value");
        const iImg = "img_" + att;
        const iName = "name_" + att;
        const iPrice = "price_" + att;
        const iDesc = "desc_" + att;
        
        document.getElementById("name2").value = document.getElementById(iName).innerHTML;
        document.getElementById("price2").value = document.getElementById(iPrice).innerHTML;
        document.getElementById("description2").value = document.getElementById(iDesc).innerHTML;
        document.getElementById("image_link2").value = document.getElementById(iImg).src;
        document.getElementById("confirm2").setAttribute("data-value",att);
        modal2.style.display = "block";
    });
});


// When the user clicks the "Cancel" button, close the modal and clear fields

var canxBtn = document.getElementById("canx");
canxBtn.addEventListener("click",function(){
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("description").value = "";
    document.getElementById("image_link").value = "";
    modal.style.display = "none";
});

var canxBtn2 = document.getElementById("canx2");
canxBtn2.addEventListener("click",function(){
    modal2.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {    
        document.getElementById("name").value = "";
        document.getElementById("price").value = "";
        document.getElementById("description").value = "";
        document.getElementById("image_link").value = "";
        modal.style.display = "none";
    }
}
window.onclick = function(event) {
    if (event.target == modal2) {    
        modal2.style.display = "none";
    }
}