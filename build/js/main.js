const ClassName={FOLDER_SHOW:"folder--show",FOLDER_TOGGLE:"folder__toggle"},Selector={FOLDER:".folder",TREE:".js-tree"},tree=document.querySelector(".js-tree");if(tree){const e=e=>{const s=e.target;if(console.log(s),"BUTTON"===s.tagName&&s.classList.contains(ClassName.FOLDER_TOGGLE)){s.closest(Selector.FOLDER).classList.toggle(ClassName.FOLDER_SHOW)}};tree.addEventListener("click",e)}