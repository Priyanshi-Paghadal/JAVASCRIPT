function viewItem() {
    var viewitem = localStorage.getItem('item');
    var item = JSON.parse(viewitem);

    var data = "<div style='max-width:1320px;margin:0 auto;padding:0 20px;'><div style='display:flex;flex-wrap:wrap'>";

    for (var i = 0; i < item.length; i++) {
        data += `<div style='width:33.33%'>`;
        data += `<div style='padding:50px;margin:0 auto 20px auto;'>`;
        data += `<div><img src='img/${item[i]['productImg']}' width='100%' height='500px' alt="product" style='object-fit:cover'></div>`;
        data += `<div style='display:flex;justify-content:space-between;padding:10px 0;'>`;
        data += `<span style='font-size:23px'>${item[i]['productName']}</span>`;
        data += `<span style='font-size:23px'>${item[i]['productPrice']}&#8377;</span>`;
        data += `</div>`;
        data += `<p style='margin:0 0 10px 0'>Quantity : ${item[i]['quantity']}</p>`;
        data += `<div style='display:flex;justify-content:space-between;padding:10px 0;'>`;
        data += `<a href="javascript:deleteData(${item[i]['no']})" class='delete'>REMOVE</a>`;
        data += `</div>`;
        data += `</div>`;
        data += `</div>`;
    }
    data += "</div>";
    data += "</div>";

    document.getElementById('out').innerHTML = data;
}
viewItem();

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
