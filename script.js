const products = [
    { name: "1.000 Followers TikTok", price: "Rp10.000", img: "Tiktok.jpg" },
    { name: "2.000 Followers TikTok", price: "Rp20.000", img: "Tiktok.jpg" },
    { name: "5.000 Followers TikTok", price: "Rp50.000", img: "Tiktok.jpg" },
    { name: "7.000 Followers TikTok", price: "Rp70.000", img: "Tiktok.jpg" },
    { name: "10.000 Followers TikTok", price: "Rp95.000", img: "Tiktok.jpg" },
    { name: "500 Followers TikTok Premium (Nondrop)🔥", price: "Rp16.000", img: "Tiktok_Premium.jpg" },
    { name: "1.000 Followers TikTok Premium (Nondrop)🔥", price: "Rp30.000", img: "Tiktok.jpg" },
    { name: "2.500 Followers TikTok Premium (Nondrop)🔥", price: "Rp76.000", img: "Tiktok.jpg" },
    { name: "5.000 Followers TikTok Premium (Nondrop)🔥", price: "Rp150.000", img: "Tiktok.jpg" },
    { name: "10.000 Followers TikTok Premium (Nondrop)🔥", price: "Rp290.000", img: "Tiktok.jpg" },
    { name: "100 Followers TikTok Indonesia🇮🇩", price: "Rp18.000", img: "Tiktok.jpg" },
    { name: "300 Followers TikTok Indonesia🇮🇩", price: "Rp54.000", img: "Tiktok.jpg" },
    { name: "700 Followers TikTok Indonesia🇮🇩", price: "Rp126.000", img: "Tiktok.jpg" },
    { name: "1.000 Followers TikTok Indonesia🇮🇩", price: "Rp180.000", img: "Tiktok.jpg" },
    { name: "5.000 Followers TikTok Indonesia🇮🇩", price: "Rp885.000", img: "Tiktok.jpg" },
    { name: "1.000 Likes TikTok", price: "Rp6.000", img: "Tiktok.jpg" },
    { name: "3.000 Likes TikTok", price: "Rp18.000", img: "Tiktok.jpg" },
    { name: "5.000 Likes TikTok", price: "Rp30.000", img: "Tiktok.jpg" },
    { name: "7.000 Likes TikTok", price: "Rp42.000", img: "Tiktok.jpg" },
    { name: "10.000 Likes TikTok", price: "Rp60.000", img: "Tiktok.jpg" },
    { name: "50.000 Likes TikTok", price: "Rp300.000", img: "Tiktok.jpg" },
    { name: "100.000 Likes TikTok", price: "Rp550.000", img: "Tiktok.jpg" },
    { name: "100.000 Views TikTok", price: "Rp10.000", img: "Tiktok.jpg" },
    { name: "200.000 Views TikTok", price: "Rp20.000", img: "Tiktok.jpg" },
    { name: "300.000 Views TikTok", price: "Rp30.000", img: "Tiktok.jpg" },
    { name: "700.000 Views TikTok", price: "Rp70.000", img: "Tiktok.jpg" },
    { name: "1 Juta Views TikTok", price: "Rp90.000", img: "Tiktok.jpg" },
    { name: "20 Komentar TikTok (Kustom)", price: "Rp7.000", img: "Tiktok.jpg" },
    { name: "40 Komentar TikTok (Kustom)", price: "Rp14.000", img: "Tiktok.jpg" },
    { name: "100 Komentar TikTok (Kustom)", price: "Rp35.000", img: "Tiktok.jpg" },
    { name: "300 Komentar TikTok (Kustom)", price: "Rp100.000", img: "Tiktok.jpg" },
    { name: "100 Komentar TikTok (Random)", price: "Rp10.000", img: "Tiktok.jpg" },
    { name: "300 Komentar TikTok (Random)", price: "Rp30.000", img: "Tiktok.jpg" },
    { name: "700 Komentar TikTok (Random)", price: "Rp70.000", img: "Tiktok.jpg" },
    { name: "900 Komentar TikTok (Random)", price: "Rp90.000", img: "Tiktok.jpg" },
    { name: "1.300 Komentar TikTok (Random)", price: "Rp125.000", img: "Tiktok.jpg" },
    { name: "10 Komentar TikTok Indonesia (Kustom)🇮🇩", price: "Rp10.000", img: "Tiktok.jpg" },
    { name: "30 Komentar TikTok Indonesia (Kustom)🇮🇩", price: "Rp30.000", img: "Tiktok.jpg" },
    { name: "50 Komentar TikTok Indonesia (Kustom)🇮🇩", price: "Rp50.000", img: "Tiktok.jpg" },
    { name: "70 Komentar TikTok Indonesia (Kustom)🇮🇩", price: "Rp70.000", img: "Tiktok.jpg" },
    { name: "100 Komentar TikTok Indonesia (Kustom)🇮🇩", price: "Rp90.000", img: "Tiktok.jpg" },
    { name: "10 Komentar TikTok Indonesia (Random)🇮🇩", price: "Rp15.000", img: "Tiktok.jpg" },
    { name: "25 Komentar TikTok Indonesia (Random)🇮🇩", price: "Rp37.500", img: "Tiktok.jpg" },
    { name: "50 Komentar TikTok Indonesia (Random)🇮🇩", price: "Rp75.000", img: "Tiktok.jpg" },
    { name: "100 Komentar TikTok Indonesia (Random)🇮🇩", price: "Rp150.000", img: "Tiktok.jpg" },
    { name: "300 Komentar TikTok Indonesia (Random)🇮🇩", price: "Rp300.000", img: "Tiktok.jpg" },
    { name: "1.000 Komentar TikTok Indonesia (Random)🇮🇩", price: "Rp1.400.000", img: "Tiktok.jpg" },
    { name: "10 Komentar TikTok Pria Indonesia (Kustom)👨🏻‍🦰🇮🇩", price: "Rp10.000", img: "Tiktok.jpg" },
    { name: "30 Komentar TikTok Pria Indonesia (Kustom)👨🏻‍🦰🇮🇩", price: "Rp30.000", img: "Tiktok.jpg" },
    { name: "50 Komentar TikTok Pria Indonesia (Kustom)👨🏻‍🦰🇮🇩", price: "Rp50.000", img: "Tiktok.jpg" },
    { name: "90 Komentar TikTok Pria Indonesia (Kustom)👨🏻‍🦰🇮🇩", price: "Rp90.000", img: "Tiktok.jpg" },
    { name: "120 Komentar TikTok Pria Indonesia (Kustom)👨🏻‍🦰🇮🇩", price: "Rp120.000", img: "Tiktok.jpg" },
    { name: "300 Komentar TikTok Pria Indonesia (Kustom)👨🏻‍🦰🇮🇩", price: "Rp290.000", img: "Tiktok.jpg" },
    { name: "10 Komentar TikTok Wanita Indonesia (Kustom)👩🏻‍🦰🇮🇩", price: "Rp10.000", img: "Tiktok.jpg" },
    { name: "30 Komentar TikTok Wanita Indonesia (Kustom)👩🏻‍🦰🇮🇩", price: "Rp30.000", img: "Tiktok.jpg" },
    { name: "50 Komentar TikTok Wanita Indonesia (Kustom)👩🏻‍🦰🇮🇩", price: "Rp50.000", img: "Tiktok.jpg" },
    { name: "90 Komentar TikTok Wanita Indonesia (Kustom)👩🏻‍🦰🇮🇩", price: "Rp90.000", img: "Tiktok.jpg" },
    { name: "120 Komentar TikTok Wanita Indonesia (Kustom)👩🏻‍🦰🇮🇩", price: "Rp120.000", img: "Tiktok.jpg" },
    { name: "300 Komentar TikTok Wanita Indonesia (Kustom)👩🏻‍🦰🇮🇩", price: "Rp290.000", img: "Tiktok.jpg" },
    { name: "5.000 Save TikTok", price: "Rp12.500", img: "Tiktok.jpg" },
    { name: "10.000 Save TikTok", price: "Rp25.000", img: "Tiktok.jpg" },
    { name: "2.000 Share TikTok", price: "Rp10.000", img: "Tiktok.jpg" },
    { name: "5.000 Share TikTok", price: "Rp25.000", img: "Tiktok.jpg" },
    { name: "15.000 Share TikTok", price: "Rp75.000", img: "Tiktok.jpg" },
    { name: "15.000 Share TikTok", price: "Rp75.000", img: "Tiktok.jpg" },
    { name: "25.000 Share Tiktok", price: "Rp120.000",img: "Tiktok.jpg" },
{ name: "Paket Seleb TikTok 10K Views + 1.5K Likes", price: "Rp10.000", img: "Tiktok.jpg" },
{ name: "Paket Seleb TikTok 50K Views + 5K Likes", price: "Rp35.000", img: "Tiktok.jpg" },
{ name: "Paket Seleb TikTok 100K Views + 10K Likes", price: "Rp70.000", img: "Tiktok.jpg" },
{ name: "Paket Seleb TikTok 300K Views + 30K Likes", price: "Rp210.000", img: "Tiktok.jpg" },
{ name: "Paket Seleb TikTok 600K Views + 50K Likes", price: "Rp360.000", img: "Tiktok.jpg" },
{ name: "Paket Seleb TikTok 1Juta Views + 100K Likes", price: "Rp670.000", img: "Tiktok.jpg" },
{ name: "250 Follower Facebook Profil", price: "Rp8.000", img: "fb.jpg" },
{ name: "500 Follower Facebook Profil", price: "Rp15.000", img: "fb.jpg" },
{ name: "1000 Follower Facebook Profil", price: "Rp30.000", img: "fb.jpg" },
{ name: "3000 Follower Facebook Profil", price: "Rp90.000", img: "fb.jpg" },
{ name: "10.000 Follower Facebook Profil", price: "Rp285.000", img: "fb.jpg" },
  // Produk lainnya
];

let cart = [];
let wishlist = [];

function displayProducts() {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = ''; 
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}" style="width: 100px; height: 100px;">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button class="buy-button" onclick="addToCart('${product.name}', '${product.price}', '${product.img}')">Beli Sekarang</button>
            <button class="wishlist-button" onclick="addToWishlist('${product.name}', '${product.price}', '${product.img}')">Wishlist</button>
        `;
        productGrid.appendChild(card);
    });
}

function addToCart(name, price, img) {
    const existingProduct = cart.find(item => item.name === name);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ name, price, img, quantity: 1 });
    }
    updateCartDisplay();

    // Menampilkan notifikasi
    const notification = document.createElement('div');
    notification.innerText = `${name} telah ditambahkan ke keranjang.`;
    notification.className = 'notification';
    document.body.appendChild(notification);

    setTimeout(() => {
        document.body.removeChild(notification);
    }, 3000);
}

function addToWishlist(name, price, img) {
    if (!wishlist.some(item => item.name === name)) {
        wishlist.push({ name, price, img });
        alert(`${name} telah ditambahkan ke wishlist.`);
    } else {
        alert(`${name} sudah ada di wishlist.`);
    }
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cartItemsPage');
    cartItemsContainer.innerHTML = ''; 
    let total = 0;

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <img src="${item.img}" alt="${item.name}" style="width: 50px; height: 50px;"> 
            ${item.name} - ${item.price} 
            <span>Jumlah: ${item.quantity}</span> 
            <button class="reduce-button" onclick="removeFromCart('${item.name}')">-</button>`;
        cartItemsContainer.appendChild(itemDiv);

        const priceNumber = parseInt(item.price.replace(/[Rp.]/g, '').replace(/,/g, ''), 10);
        total += priceNumber * item.quantity;
    });

    document.getElementById('totalPricePage').innerText = `Total: Rp${total.toLocaleString()}`;
}

function removeFromCart(name) {
    const existingProduct = cart.find(item => item.name === name);
    if (existingProduct) {
        if (existingProduct.quantity > 1) {
            existingProduct.quantity--;
        } else {
            cart = cart.filter(item => item.name !== name);
        }
        updateCartDisplay();
    }
}

function showCartPage() {
    document.getElementById('productGrid').style.display = 'none';
    document.getElementById('cartPage').style.display = 'block';
    updateCartDisplay();
}

function proceedCheckout() {
    if (cart.length === 0) {
        alert('Keranjang Anda kosong.');
        return;
    }

    const messageItems = cart.map(item => `${item.name} - ${item.price} (Jumlah: ${item.quantity})`).join('\n');
    let totalPrice = 0;

    cart.forEach(item => {
        totalPrice += parseInt(item.price.replace(/[Rp.]/g, '').replace(/,/g, ''), 10) * item.quantity;
    });

    const total = `Total: Rp${totalPrice.toLocaleString()}`;
    const message = encodeURIComponent(`${messageItems}\n\n${total}`);
    
    window.location.href = `https://wa.me/62882022145752?text=Checkout%20produk%20saya%3A%0A${message}`;
    clearCart();
}

function clearCart() {
    cart = [];
    updateCartDisplay();
}

function returnToShop() {
    document.getElementById('cartPage').style.display = 'none';
    document.getElementById('wishlistPage').style.display = 'none';
    document.getElementById('productGrid').style.display = 'block';
}

function showWishlist() {
    document.getElementById('productGrid').style.display = 'none';
    document.getElementById('cartPage').style.display = 'none';
    document.getElementById('wishlistPage').style.display = 'block';

    const wishlistContainer = document.getElementById('wishlistContainer');
    wishlistContainer.innerHTML = '';

    wishlist.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <img src="${item.img}" alt="${item.name}" style="width: 50px; height: 50px;"> 
            ${item.name} - ${item.price} 
            <button class="remove-button" onclick="removeFromWishlist('${item.name}')">Hapus</button>`;
        wishlistContainer.appendChild(itemDiv);
    });
}

function removeFromWishlist(name) {
    wishlist = wishlist.filter(item => item.name !== name);
    showWishlist();
}

function searchProducts() {
    const query = document.getElementById('search').value.toLowerCase();
    const productGrid = document.getElementById('productGrid');
    const productCards = productGrid.getElementsByClassName('product-card');

    Array.from(productCards).forEach(card => {
        const productName = card.getElementsByTagName('h3')[0].innerText.toLowerCase();
        if (productName.includes(query)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// Memanggil fungsi untuk menampilkan produk saat halaman dimuat
window.onload = displayProducts;
