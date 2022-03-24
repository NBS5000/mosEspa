
const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const price = document.querySelector("#price").value.trim();
  const description = document.querySelector("#description").value.trim();
  const image_link = convert(document.querySelector("#image_link").value.trim());


  if (name && price && description && image_link) {
    const response = await fetch(`/api/profile`, {
      method: "POST",
      body: JSON.stringify({ name, price, description, image_link }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to create product");
    }
  }
};


const delButtonHandler = document.querySelectorAll('.deleteBtn');
delButtonHandler.forEach(btn => {
  btn.addEventListener('click', async (event) => {

    if (event.target.hasAttribute("data-value")) {
      const id = event.target.getAttribute("data-value");


      const response = await fetch(`/api/profile/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        document.location.replace("/profile");
      } else {
        alert("Failed to delete product");
      }
    }
  })
});

const updateFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name2").value.trim();
  const price = document.querySelector("#price2").value.trim();
  const description = document.querySelector("#description2").value.trim();
  const image_link = convert(document.querySelector("#image_link2").value.trim());

  if (name && price && description && image_link) {
    if (event.target.hasAttribute("data-value")) {
      const id = event.target.getAttribute("data-value");
      console.log(id);
      const response = await fetch(`/api/profile/${id}`, {
        method: "PUT",
        body: JSON.stringify({ name, price, description, image_link }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        document.location.replace("/profile");
      } else {
        alert("Failed to update product");
      }
    }
  }
};

const returnToHome = async (event) => {
  event.preventDefault();
  document.location.replace("/");
};

document.querySelector("#confirm").addEventListener("click", newFormHandler);
document.querySelector("#confirm2").addEventListener("click", updateFormHandler);
// document.querySelector(".deleteBtn").addEventListener("click", delButtonHandler);
// document.querySelector(".returnToHome").addEventListener("click", returnToHome);

// delete button, update button, add item button, return to homepage Button,
