const loader = document.querySelector(".spinner");
const joke = async () => {
  let ul = document.querySelector(".ul");

  try {
    loader.classList.remove("d-none"); // Show the loader

    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);

    // Remove the last li element in the ul
    while (ul.lastChild && ul.lastChild.tagName.toLowerCase() === "li") {
      ul.removeChild(ul.lastChild);
    }

    let li = document.createElement("li");
    li.style.listStyleType = "none";
    li.textContent = res.data.joke;
    li.classList.add("alert", "alert-success");
    ul.appendChild(li);
  } catch (error) {
    // Remove the last li element in the ul
    while (ul.lastChild && ul.lastChild.tagName.toLowerCase() === "li") {
      ul.removeChild(ul.lastChild);
    }

    let li = document.createElement("li");
    li.classList.add("alert", "alert-danger");
    li.style.listStyleType = "none";
    li.textContent = "Failed to fetch joke";
    ul.appendChild(li);
  } finally {
    // Hide the loader whether the request was successful or not
    loader.classList.add("d-none");
  }
};

let check = document.querySelector("#check-apple");

check.addEventListener("change", async function () {
  if (this.checked) {
    document.body.style.backgroundColor = "#F9F7C9";
    document.body.style.color = "#638889";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black"; // Reset text color when unchecked
  }
});

function shareOnFacebook() {
  // Customize the URL and other parameters as needed
  window.open(
    "https://www.facebook.com/sharer/sharer.php?u=" +
      encodeURIComponent(window.location.href),
    "_blank"
  );
}

function shareOnTwitter() {
  // Customize the tweet text and other parameters as needed
  window.open(
    "https://twitter.com/intent/tweet?url=" +
      encodeURIComponent(window.location.href) +
      "&text=Check out this joke:",
    "_blank"
  );
}

function shareOnLinkedIn() {
  // Customize the URL and other parameters as needed
  window.open(
    "https://www.linkedin.com/sharing/share-offsite/?url=" +
      encodeURIComponent(window.location.href),
    "_blank"
  );
}
function shareOnWhatsApp() {
  // Customize the message and other parameters as needed
  const message = "Check out this joke: " + window.location.href;
  window.location.href = "whatsapp://send?text=" + encodeURIComponent(message);
}
