let bagItems;
onLoad();
function onLoad() {
  let bagItemsStr = localStorage.getItem("bagItems");
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomePage();

  displayBagItem();
}

function addToBag(itemID) {
  bagItems.push(itemID);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  displayBagItem();
}

function displayBagItem() {
  let bagCount = document.querySelector(".bag_items_count");
  if (bagItems.length > 0) {
    bagCount.style.visibility = `visible`;
    bagCount.innerText = bagItems.length;
  } else {
    bagCount.style.visibility = `hidden`;
  }
}

function displayItemsOnHomePage() {
  let itemsContainerElement = document.querySelector(".items_container");
  if (!itemsContainerElement) {
    return;
  }
  let innerHTML = "";
  items.forEach((item) => {
    innerHTML += `<div class="item_container">
          <img class="item_image" src=${item.image} alt="" />
          <div class="rating">${item.rating.stars}⭐ | ${item.rating.count}</div>
          <div class="company_name">${item.company}</div>
          <div class="item_name">${item.item_name}</div>
          <div class="price">
            <span class="current_price">Rs ${item.current_price}</span>
            <span class="original_price">Rs ${item.original_price}</span>
            <span class="discount">(${item.discount_percentage}% Off)</span>
          </div>
          <button class="add_bag_btn" onclick="addToBag(${item.id})">Add to Bag</button>
        </div>`;
  });

  itemsContainerElement.innerHTML = innerHTML;
}
