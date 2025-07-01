const products = {
  kurti: [
    { name: "Floral Kurti", price: 499, image: "https://desilooklifestyle.com/cdn/shop/products/white-color-naira-cut-kurti-by-looknbook-art.jpg?v=1708761198" },
    { name: "Anarkali Kurti", price: 699, image: "https://5.imimg.com/data5/SELLER/Default/2023/7/322511812/BX/IE/EP/142530485/georgette-printed-maxi-dress.jpeg" },
    { name: "Silk Kurti", price: 899, image: "https://www.yanafab.com/cdn/shop/products/party-wear-gaji-silk-printed-plazo-kurti-set-by-yana-fab.jpg?v=1680169633" },
    { name: "Long Kurti", price: 799, image: "https://static.cilory.com/765247-thickbox_default/gotta-lace-leheriya-printed-flared-long-kurti.jpg.webp" },
    { name: "Printed Kurti", price: 649, image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/29956459/2024/9/27/ebb3698b-efb4-4fcd-bb53-4fd155df58fa1727444371874-Rimeline-Floral-Printed-V-Neck-Pure-Cotton-Kurti-60917274443-1.jpg" }
  ],
  tops: [
    { name: "Casual Top", price: 299, image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/top/f/n/a/xxl-nm-201-white-etima-original-imagq9gn5g4jkyvv.jpeg?q=90&crop=false" },
    { name: "Crop Top", price: 349, image: "https://muselot.in/cdn/shop/products/Plaincroptshirtsforwomen-Butteryellowplaincroptshirts-Muselot.jpg?v=1657832272" },
    { name: "Fancy Top", price: 399, image: "https://img3.exportersindia.com/product_images/bc-full/2020/2/5096767/1581059988_p_5289259_1065158.jpeg" },
    { name: "Partywear Top", price: 459, image: "https://5.imimg.com/data5/SELLER/Default/2022/7/OE/HW/PQ/3506644/img-0996-500x500.jpg" },
    { name: "Cotton Top", price: 279, image: "https://thephoenixcompany.in/cdn/shop/products/7_94372611-7223-4e2f-9409-a6b4c9b14359_1024x1024.jpg?v=1681888152" }
  ],
  
  shoes: [
    { name: "Sneakers", price: 999, image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/kids-shoe/s/0/i/6-k-super-stylestry-original-imaghjfwxmhy7yxs.jpeg?q=90&crop=false" },
    { name: "Heels", price: 849, image: "https://images-static.nykaa.com/media/catalog/product/b/4/b403428Heel-1246-Silver_1.jpg?tr=w-500" },
    { name: "Sandals", price: 599, image: "https://kxadmin.metroshoes.com/product/57-107/550/57-107LA28.jpg" },
    { name: "Loafers", price: 699, image: "https://assets.ajio.com/medias/sys_master/root/20230801/zCeF/64c8e7cfa9b42d15c97f066e/-473Wx593H-466407514-white-MODEL3.jpg" },
    { name: "Boots", price: 1099, image: "https://assets.ajio.com/medias/sys_master/root/20240902/Ienr/66d56a606f60443f31482d76/-473Wx593H-700353886-black-MODEL.jpg" }
  ]
};

let cartCount = 0;

function showCategory(category) {
  const list = document.getElementById("product-list");
  list.innerHTML = "";

  products[category].forEach(prod => {
    const item = document.createElement("div");
    item.className = "product";
    item.innerHTML = `
      <img src="${prod.image}" alt="${prod.name}">
      <h3>${prod.name}</h3>
      <p>₹${prod.price}</p>
      <button onclick="addToCart('${prod.name}')">Add to Cart</button>
    `;
    list.appendChild(item);
  });
}

function addToCart(name) {
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;
  alert(`✅ ${name} added to cart!`);
}

function simulateNotification() {
  alert("🎉 Deal of the Day! Extra 10% off on all categories!");
}

window.onload = () => {
  showCategory("kurti");
};
