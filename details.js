function changeimg(id) {
  const main = document.getElementById("displayimg");
  const selectedImg = document.getElementById(id).src;
  main.src = selectedImg;
}

const url_string = location.href;
const url = new URL(url_string);
const id = url.searchParams.get("id");

if (id) {
  $.ajax({
    url: `https://5d76bf96515d1a0014085cf9.mockapi.io/product/${id}`,
    type: "GET",
    contentType: "application/json",
    success: function (res) {
      $("#displayimg").attr("src", res.preview);
      $("#innerhead").text(res.name);
      $("#brand").text(res.brand);
      $("#price").text(`Rs. ${res.price}`);
      $("#description").text(res.description);

      let previewHTML = "";
      for (let i = 0; i < res.photos.length; i++) {
        previewHTML += `<img id="img${i}" onclick="changeimg(this.id)" class="variety img-thumbnail" src="${res.photos[i]}" alt="" width="100px"/>`;
      }
      $("#prev").html(previewHTML);
    },
  });
}

function addToCardCount() {
  let total = 0;
  const addToCartItemCount = localStorage.getItem("addToCart")
    ? JSON.parse(localStorage.getItem("addToCart"))
    : [];
  for (let i = 0; i < addToCartItemCount.length; i++) {
    total += addToCartItemCount[i].total;
  }
  $("#counter").text(total);
}

$("#addToCart").click(function () {
  let alreadyAddedInCard = false;
  let getAllAddToCartItem = localStorage.getItem("addToCart")
    ? JSON.parse(localStorage.getItem("addToCart"))
    : [];
  console.log(getAllAddToCartItem);
  for (let i = 0; i < getAllAddToCartItem.length; i++) {
    if (getAllAddToCartItem[i].id === res.id) {
      alreadyAddedInCard = true;
      getAllAddToCartItem[i].total++;
    }
  }
  if (!alreadyAddedInCard) {
    getAllAddToCartItem.push({
      id: res.id,
      name: res.name,
      price: res.price,
      total: 1,
      img: res.preview,
    });
  }
  localStorage.setItem("addToCart", JSON.stringify(getAllAddToCartItem));
  addToCardCount();
});

addToCardCount();

// hotos
// :
// Array(5)
// 0
// :
// "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg"
// 1
// :
// "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg"
// 2
// :
// "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg"
// 3
// :
// "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg"
// 4
// :
// "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
// length
// :
// 5
