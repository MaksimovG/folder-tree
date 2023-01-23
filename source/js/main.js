const ClassName = {
  FOLDER_SHOW: 'folder--show',
  FOLDER_TOGGLE: "folder__toggle",
};

const Selector = {
  FOLDER: ".folder",
  TREE: ".js-tree",
};

const tree = document.querySelector(".js-tree");

if (tree) {
  const onClickTree = (evt) => {
    const target = evt.target;
    console.log(target)

    if (target.tagName === "BUTTON" && target.classList.contains(ClassName.FOLDER_TOGGLE)) {
      const folder = target.closest(Selector.FOLDER);
      folder.classList.toggle(ClassName.FOLDER_SHOW);
    }
  };

  tree.addEventListener("click", onClickTree);
}
