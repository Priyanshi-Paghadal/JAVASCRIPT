function viewItem() {
    var viewitem = localStorage.getItem('item');
    var item = JSON.parse(viewitem);

    var data = "<div style='max-width:1320px;margin:0 auto;padding:0 20px;'><div style='display:flex;flex-wrap:wrap'>";

    for (var i = 0; i < item.length; i++) {
        data += `<div style='width:25%'>`;
        data += `<div style='padding:30px 10px;margin:0 5px 20px 5px;'>`;
        data += `<div><img src='img/${item[i]['productImg']}' width='100%' height='350px' alt="product" style='object-fit:cover'></div>`;
        data += `<div class='content'>`
        data += `<div style='display:flex;justify-content:space-between;padding:10px 0;'>`;
        data += `<span style='font-size:23px'>${item[i]['productName']}</span>`;
        data += `<span style='font-size:23px'>${item[i]['productPrice']}&#8377;</span>`;
        data += `</div>`;
        data += `<p style='margin:0 0 10px 0'>Quantity : ${item[i]['quantity']}</p>`;
        data += `<div style='display:flex;justify-content:space-between;padding:10px 0;'>`;
        data += `<button onclick='addToCart("${item[i]['productName']}", "${item[i]['productPrice']}","${item[i]['productImg']}", ${item[i]['quantity']})' class='add-to-cart'>ADD TO CART</button>`;
        data += `<a href="javascript:deleteData(${item[i]['no']})" class='delete'>Delete</a>`;
        data += `</div>`;
        data += `</div>`;
        data += `</div>`;
        data += `</div>`;
    }
    data += "</div>";
    data += "</div>";

    document.getElementById('checkout').innerHTML = data;
}
viewItem();

function searchProduct() {
    searchitem = document.getElementById('search').value;

    var search = localStorage.getItem('item');
    var record = JSON.parse(search);

    var data1 = "<div style='max-width:1320px;margin:0 auto;padding:0 20px;'><div style='display:flex;flex-wrap:wrap'>";

    record.forEach((p_name, i) => {
        if (p_name.productName.match(searchitem)) {
            data1 += `<div style='width:25%'>`;
            data1 += `<div style='padding:30px 10px;margin:0 5px 20px 5px;'>`;
            data1 += `<div><img src='img/${record[i]['productImg']}' width='100%' height='350px' alt="product" style='object-fit:cover'></div>`;
            data1 += `<div class='content'>`
            data1 += `<div style='display:flex;justify-content:space-between;padding:10px 0;'>`;
            data1 += `<span style='font-size:23px'>${record[i]['productName']}</span>`;
            data1 += `<span style='font-size:23px'>${record[i]['productPrice']}&#8377;</span>`;
            data1 += `</div>`;
            data1 += `<p style='margin:0 0 10px 0'>Quantity : ${record[i]['quantity']}</p>`;
            data1 += `<div style='display:flex;justify-content:space-between;padding:10px 0;'>`;
            data1 += `<button onclick='addToCart("${record[i]['productName']}", "${record[i]['productPrice']}","${record[i]['productImg']}", ${record[i]['quantity']})' class='add-to-cart'>ADD TO CART</button>`;
            data1 += `<a href="javascript:deleteData(${record[i]['no']})" style='color:white;background-color:#333;padding:10px 20px;border-radius:5px;'>Delete</a>`;
            data1 += `</div>`;
            data1 += `</div>`;
            data1 += `</div>`;
            data1 += `</div>`;
        }
    });

    data1 += "</div>";
    data1 += "</div>";

    document.getElementById('checkout').innerHTML = data1;
}

function deleteData(no) {
    var deleteitem = localStorage.getItem('item');
    var item = JSON.parse(deleteitem);
    for (var i = 0; i < item.length; i++) {
        if (item[i]['no'] == no) {
            item.splice(i, 1);
        }
    }

    localStorage.setItem('item', JSON.stringify(item));

    viewItem();

}

function addToCart(name, price, img) {
    var cart = document.getElementById("cartitem");
    var data = `<div class='flex'>`;
    data += `<div class='w-4'><img src='img/${img}' width='200px' height='250px'/></td></div>`;

    data += `<div class='w-4'><h2>${name}</h2></div>`;
    data += `<div class='w-4'><h2 class='price'> ${price} &#8377;</h2></div>`;
    data += "<div class='w-4'><button onclick='removeFromCart(this)' class='remove'>REMOVE</button></div>";
    data += `</div>`;
    cart.innerHTML += data;
    updateTotalBill();
}
function removeFromCart(button) {
    var data = button.parentNode.parentNode;
    data.parentNode.removeChild(data);
    updateTotalBill();
}


function updateTotalBill() {
    var cart = document.getElementById("cartitem");
    var totalBill = 0;
    var prices = cart.querySelectorAll('.price');
    for (var i = 0; i < prices.length; i++) {
        totalBill += parseInt(prices[i].innerText.replace("&#8377;", ""));
    }
    document.getElementById("totalBill").innerText = "Total Bill: " + totalBill + "₹";
}

viewItem();

