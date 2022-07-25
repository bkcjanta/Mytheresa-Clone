let data = JSON.parse(localStorage.getItem("delivery_data")) || [];
console.log(data);
let details = document.getElementById("details");
console.log(details.innerText);
let fname = document.createElement("p");
fname.innerText = "Name:-  " + data.fname + " " + data.lname;
let company = document.createElement("p");
company.innerText = "Company:-  " + data.company;
let street = document.createElement("p");
street.innerText = "Street:-  " + data.street;
let address_line = document.createElement("p");
address_line.innerText = "Address Line 2:-  " + data.address_line;
let pascode_city = document.createElement("p");
pascode_city.innerText = "Pascode/City:-  " + data.pascode + " " + data.city;
let mobile = document.createElement("h4");
mobile.innerText = "Mobile No. :-  " + data.mobile;
details.append(fname, company, street, address_line, pascode_city, mobile);

document.getElementById("add-change").addEventListener("click", () => {
    window.location = "delivery.html";
})



let total_products = document.getElementById("total-products");
let product = document.createElement("div");
product.setAttribute("id", "product");
let img = document.createElement('img');
img.src = "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/28/P00709811_d2.jpg";
let p_details = document.createElement('div');
let pname = document.createElement('p');
pname.innerText = "'18kt gold earrings with amethysts";
let psize = document.createElement('p');
psize.innerText = "Size:-" + "One size fits all";
p_details.append(pname, psize);
let img_detail = document.createElement('div');
img_detail.setAttribute("id", "img_detail")
img_detail.append(img, p_details);
let price = document.createElement('p');
price.innerText = "€ " + "2505.00";
product.append(img_detail, price);
total_products.append(product)



let container = document.getElementById("processing");
function append() {
    container.innerHTML = null;
    let img = document.createElement('img');
    img.src = "processing_gif.gif";
    let p = document.createElement('p');
    p.innerText = "connecting to payment";
    container.append(img, p);
}

document.getElementById("checkout").addEventListener("click", check);

function check() {
    append();
    setTimeout(()=>{
        window.location.href="authentication.html";
    },3000)
    
}


