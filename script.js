function openModal(name, role, bio, img) {
    const modal = document.getElementById("profileModal");
    document.getElementById("modalName").innerText = name;
    document.getElementById("modalRole").innerText = role;
    document.getElementById("modalBio").innerText = bio;
    document.getElementById("modalImg").src = img;

    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("profileModal").style.display = "none";
}

// Menutup modal jika user klik di luar kotak modal
window.onclick = function(event) {
    const modal = document.getElementById("profileModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
