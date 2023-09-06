
// 選單
document.addEventListener("DOMContentLoaded", function() {
    let menu = document.querySelector("#menu");
    let navbar = document.querySelector(".navbar");
    menu.onclick = () => {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    };
});
// 作品展示
function openModal(imageSrc) {
                var modal = document.getElementById("modal");
                var modalImage = document.getElementById("modal-image");
                modalImage.src = imageSrc;
                modal.style.display = "flex";
            }
    
function closeModal() {
                var modal = document.getElementById("modal");
                modal.style.display = "none";
            }
    
 var container = document.querySelector(".image-container");

