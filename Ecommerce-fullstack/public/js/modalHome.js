// Get the modal
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");

// The button that opens the modal

const modalBtn3s = document.querySelectorAll('.itemViewBtn');
modalBtn3s.forEach(btn => {
    btn.addEventListener('click', async (event) => {
        const att = event.target.getAttribute("data-value");
        const vImg = "imgH_" + att;
        const vName = "nameH_" + att;
        const vPrice = "priceH_" + att;
        const vDesc = "descH_" + att;
        const vSeller = "seller_" + att;
        document.getElementById("name3").innerHTML = document.getElementById(vName).innerHTML;
        document.getElementById("price3").innerHTML = document.getElementById(vPrice).innerHTML;
        document.getElementById("description3").innerHTML = document.getElementById(vDesc).innerHTML;
        document.getElementById("image_link3").src = document.getElementById(vImg).src;
        document.getElementById("addToCart").setAttribute("data_value",att);

        document.getElementById("itemSeller").textContent = document.getElementById(vSeller).getAttribute("data_value");
        document.getElementById("sellerP").setAttribute("data_value",document.getElementById(vSeller).getAttribute("data_id"));
        document.getElementById("itemSellerEmail").textContent = document.getElementById(vSeller).getAttribute("data_email");
        
        modal3.style.display = "block";
    });
});


var modalBtn4 = document.querySelector("#homeList");
modalBtn4.addEventListener("click",function(){
    modal4.style.display = "block";
});




// When the user clicks the "Cancel" button, close the modal and clear fields

var canxBtn3 = document.getElementById("canx3");
canxBtn3.addEventListener("click", function () {
    modal3.style.display = "none";
});
var canxBtn4 = document.getElementById("canx4");
canxBtn4.addEventListener("click", function () {
    document.getElementById("name4").value = "";
    document.getElementById("price4").value = "";
    document.getElementById("description4").value = "";
    document.getElementById("image_link4").value = "";
    modal4.style.display = "none";
});
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
};
window.onclick = function (event) {
    if (event.target == modal4) {
        document.getElementById("name4").value = "";
        document.getElementById("price4").value = "";
        document.getElementById("description4").value = "";
        document.getElementById("image_link4").value = "";
        modal4.style.display = "none";
    }
};


const addToCart = async (event) => {
    
    const product_id = event.target.getAttribute("data_value");
    console.log(product_id);
    const response = await fetch(`/api/addToCart/${product_id}`, {
        method: "POST",
    });

    if (response.ok) {
    document.location.replace("/");
    } else {
    alert("Failed to add product to cart");
    }
};



const newFormHandlerH = async (event) => {
    event.preventDefault();

    const name = document.querySelector("#name4").value.trim();
    const price = document.querySelector("#price4").value.trim();
    const description = document.querySelector("#description4").value.trim();
    const image_link = convert(document.querySelector("#image_link4").value.trim());


    if (name && price && description && image_link) {
        const response = await fetch(`/api/profile`, {
        method: "POST",
        body: JSON.stringify({ name, price, description, image_link }),
        headers: {
            "Content-Type": "application/json",
        },
        });

        if (response.ok) {
        document.location.replace("/");
        } else {
        alert("Failed to create product");
        }
    }
};


document.querySelector("#addToCart").addEventListener("click", addToCart);
document.querySelector("#confirm4").addEventListener("click", newFormHandlerH);