let bagItemObjects;
const convinience_fees = 99;
onLoad();
function onLoad() {
  loadBagItemObjects();
  displayBagItems();
  displayBagSummary();
}

function removeFromBag(itemID) {
  bagItems = bagItems.filter((bagItemId) => bagItemId != itemID);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  loadBagItemObjects();
  displayBagItem();
  displayBagItems();
  displayBagSummary();
}

function loadBagItemObjects() {
  console.log(bagItems);
  bagItemObjects = bagItems.map((itemID) => {
    for (let i = 0; i < items.length; i++) {
      if (itemID == items[i].id) {
        return items[i];
      }
    }
  });
}

function displayBagItems() {
  let containerElement = document.querySelector(".bag_items_container");
  let innerHTML = "";
  bagItemObjects.forEach((bagItem) => {
    innerHTML += generateItemHTML(bagItem);
  });
  containerElement.innerHTML = innerHTML;
}

function generateItemHTML(item) {
  return `  <div class="bag_item_container">
            <div class="item_left_part">
              <img class="bag_item_img" src="${item.image}" />
            </div>
            <div class="item_right_part">
              <div class="company">${item.company}</div>
              <div class="item_name">${item.item_name}</div>
              <div class="price_container">
                <span class="current_price">Rs ${item.current_price}</span>
                <span class="original_price">Rs ${item.original_price}</span>
                <span class="discount_percentage">${item.discount_percentage}% Off</span>
              </div>
              <div class="return_period">
                <span class="return_period_days">${item.return_period}</span> return available
              </div>
              <div class="delivery_details">
                Delivery by
                <span class="delivery_details_days">${item.delivery_date}</span>
              </div>
            </div>
            <div class="remove_from_cart" onclick="removeFromBag(${item.id})">X</div>
          </div>
`;
}
function displayBagSummary() {
  let bagSummaryElement = document.querySelector(".bag_summary");
  let totalItem = bagItemObjects.length;
  let totalMRP = 0;
  let totalDiscount = 0;
  let totalAmount = 0;

  bagItemObjects.forEach((bagItem) => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });
  totalAmount += totalMRP - totalDiscount + convinience_fees;

  bagSummaryElement.innerHTML = `<div class="bag_details_container">
  <div class="price_header">PRICE DETAILS (${totalItem} Items) </div>
  <div class="price_item">
    <span class="price_item_tag">Total MRP</span>
    <span class="price_item_value">₹${totalMRP}</span>
  </div>
  <div class="price_item">
    <span class="price_item_tag">Discount on MRP</span>
    <span class="price_item_value priceDetail_base_discount">-₹${totalDiscount}</span>
  </div>
  <div class="price_item">
    <span class="price_item_tag">Convenience Fee</span>
    <span class="price_item_value">₹ 99</span>
  </div>
  <hr>
  <div class="price_footer">
    <span class="price_item_tag">Total Amount</span>
    <span class="price_item_value">₹ ${totalAmount}</span>
  </div>
</div>
<button class="btn_place_order">
  <div class="css-xjhrni">PLACE ORDER</div>
</button> `;
}
