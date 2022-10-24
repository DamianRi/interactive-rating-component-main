const STATE = {
  ACTIVE: "active",
};

const ITEM_CLASS = "qualify-item";

let RATING_SELECTED = 0;

function getDocumentItemsByClass(className) {
  return document.getElementsByClassName(className);
}

function addClassToItem(item, className) {
  item.classList.add(className);
}

function removeClassFromItem(item, className) {
  item.classList.remove(className);
}

function inactiveActiveItemsByClass(className) {
  let activeItems = getDocumentItemsByClass(`${className} ${STATE.ACTIVE}`);
  for (const activeItem of activeItems) {
    removeClassFromItem(activeItem, STATE.ACTIVE);
  }
}

function setItemProperty(item, property, value) {
  item.style.setProperty(property, value);
}

function submitRating() {
  const ratingCard = getDocumentItemsByClass("rating-card")[0];
  setItemProperty(ratingCard, "display", "none");
  const spanRating = getDocumentItemsByClass("rating-resume__value")[0];
  spanRating.innerHTML = RATING_SELECTED;
  const ratingCardSubmit = getDocumentItemsByClass("rating-card thank-you-card")[0];
  setItemProperty(ratingCardSubmit, "display", "flex");
}

function main() {
  const qualifyItems = getDocumentItemsByClass(ITEM_CLASS);
  for (const item of qualifyItems) {
    item.addEventListener("click", function () {
      inactiveActiveItemsByClass(ITEM_CLASS);
      addClassToItem(this, STATE.ACTIVE);
      RATING_SELECTED = this.value;
    });
  }
  const submitButton = getDocumentItemsByClass("rating-card__submit-btn")[0];
  submitButton.addEventListener("click", submitRating);
}

main();
