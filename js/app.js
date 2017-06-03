/*
 * Archivo principal de funcionalidad de JS
 */

  (function main(){
 	var boxes = Array.from(document.getElementsByClassName('box-work'));
 	var modal = document.getElementById("box-work-modal");
 	var bodyModal, close, img;
 	boxes.forEach(function(box, i){
 		box.addEventListener("click", function(){
 			modal.innerHTML = "";
 			bodyModal = document.createElement("div");
 			bodyModal.classList.add("modal-body");
 			bodyModal.innerHTML = box.innerHTML;
      //remueve el div
      bodyModal.removeChild(bodyModal.childNodes[3]);
 			modal.appendChild(bodyModal);
 			modal.classList.remove("hide");
 			close = document.createElement("div");
 			close.classList.add("close");
      exis = document.createElement("i");
      exis.setAttribute("class", "fa fa-times fa-2x");
      exis.setAttribute("aria-hidden", "true");
      close.appendChild(exis);
 			modal.appendChild(close);
 			close.addEventListener("click",function(){
 				modal.classList.add("hide");
 			});
 		});
 	});
 })();