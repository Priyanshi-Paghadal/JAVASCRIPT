
var item = []

function addItem() {

    if (localStorage.getItem('item')) {
        item = JSON.parse(localStorage.getItem('item'));
    }

    var productName = document.getElementById('productName').value;
    var productPrice = document.getElementById('productPrice').value;
    var productImg = document.getElementById('productImg').files[0].name;
    var quantity = document.getElementById('quantity').value;
    var no = document.getElementById('no').value;

    var additem = {
        productName: productName,
        productPrice: productPrice,
        productImg: productImg,
        quantity: quantity,
        no: Math.round(Math.random() * 1000),
    }
    item.push(additem);

    var additem = JSON.stringify(item);
    localStorage.setItem('item', additem);

    var productName = document.getElementById('productName').value = "";
    var productPrice = document.getElementById('productPrice').value = "";
    var productImg = document.getElementById('productImg').value = "";
    var quantity = document.getElementById('quantity').value = "";

    viewItem();

}




