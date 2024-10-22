const products = [
    { name: "1.000 follower TikTok", category: "tiktok", price: "Rp10.000", img: "Tiktok.jpg" },
    { name: "2.000 follower TikTok", category: "tiktok", price: "Rp20.000", img: "Tiktok.jpg" },
    { name: "5.000 follower TikTok", category: "tiktok", price: "Rp50.000", img: "Tiktok.jpg" },
    { name: "7.000 follower TikTok", category: "tiktok", price: "Rp70.000", img: "Tiktok.jpg" },
    { name: "10.000 follower TikTok", category: "tiktok", price: "Rp95.000", img: "Tiktok.jpg" },
    { name: "500 follower TikTok (Nondrop)", category: "tiktok", price: "Rp16.000", img: "Tiktok.jpg" },
    { name: "1.000 follower TikTok (Nondrop)", category: "tiktok", price: "Rp30.000", img: "Tiktok.jpg" },
    { name: "2.500 follower TikTok (Nondrop)", category: "tiktok", price: "Rp76.000", img: "Tiktok.jpg" },
    { name: "5.000 follower TikTok (Nondrop)", category: "tiktok", price: "Rp150.000", img: "Tiktok.jpg" },
    { name: "10.000 follower TikTok (Nondrop)", category: "tiktok", price: "Rp290.000", img: "Tiktok.jpg" },
    { name: "100 follower TikTok Indonesia", category: "tiktok", price: "Rp18.000", img: "Tiktok.jpg" },
    { name: "300 follower TikTok Indonesia", category: "tiktok", price: "Rp54.000", img: "Tiktok.jpg" },
    { name: "700 follower TikTok Indonesia", category: "tiktok", price: "Rp126.000", img: "Tiktok.jpg" },
    { name: "1.000 follower TikTok Indonesia", category: "tiktok", price: "Rp180.000", img: "Tiktok.jpg" },
    { name: "5.000 follower TikTok Indonesia", category: "tiktok", price: "Rp885.000", img: "Tiktok.jpg" },
    { name: "1.000 likes TikTok", category: "tiktok", price: "Rp6.000", img: "Tiktok.jpg" },
    { name: "3.000 likes TikTok", category: "tiktok", price: "Rp18.000", img: "Tiktok.jpg" },
    { name: "5.000 likes TikTok", category: "tiktok", price: "Rp30.000", img: "Tiktok.jpg" },
    { name: "7.000 likes TikTok", category: "tiktok", price: "Rp42.000", img: "Tiktok.jpg" },
    { name: "10.000 likes TikTok", category: "tiktok", price: "Rp60.000", img: "Tiktok.jpg" },
    { name: "50.000 likes TikTok", category: "tiktok", price: "Rp300.000", img: "Tiktok.jpg" },
    { name: "100.000 likes TikTok", category: "tiktok", price: "Rp550.000", img: "Tiktok.jpg" },
    { name: "100.000 views TikTok", category: "tiktok", price: "Rp10.000", img: "Tiktok.jpg" },
    { name: "200.000 views TikTok", category: "tiktok", price: "Rp20.000", img: "Tiktok.jpg" },
    { name: "300.000 views TikTok", category: "tiktok", price: "Rp30.000", img: "Tiktok.jpg" },
    { name: "700.000 views TikTok", category: "tiktok", price: "Rp70.000", img: "Tiktok.jpg" },
    { name: "1 juta views TikTok", category: "tiktok", price: "Rp90.000", img: "Tiktok.jpg" },
    { name: "20 komentar TikTok (Kustom)", category: "tiktok", price: "Rp7.000", img: "Tiktok.jpg" },
    { name: "40 komentar TikTok (Kustom)", category: "tiktok", price: "Rp14.000", img: "Tiktok.jpg" },
    { name: "100 komentar TikTok (Kustom)", category: "tiktok", price: "Rp35.000", img: "Tiktok.jpg" },
    { name: "300 komentar TikTok (Kustom)", category: "tiktok", price: "Rp100.000", img: "Tiktok.jpg" },
    { name: "100 komentar TikTok (Random)", category: "tiktok", price: "Rp10.000", img: "Tiktok.jpg" },
    { name: "300 komentar TikTok (Random)", category: "tiktok", price: "Rp30.000", img: "Tiktok.jpg" },
    { name: "700 komentar TikTok (Random)", category: "tiktok", price: "Rp70.000", img: "Tiktok.jpg" },
    { name: "900 komentar TikTok (Random)", category: "tiktok", price: "Rp90.000", img: "Tiktok.jpg" },
    { name: "1.300 komentar TikTok (Random)", category: "tiktok", price: "Rp125.000", img: "Tiktok.jpg" },
    { name: "10 komentar TikTok (Kustom)", category: "tiktok", price: "Rp10.000", img: "Tiktok.jpg" },
    { name: "30 komentar TikTok (Kustom)", category: "tiktok", price: "Rp30.000", img: "Tiktok.jpg" },
    { name: "50 komentar TikTok (Kustom)", category: "tiktok", price: "Rp50.000", img: "Tiktok.jpg" },
    { name: "70 komentar TikTok (Kustom)", category: "tiktok", price: "Rp70.000", img: "Tiktok.jpg" },
    { name: "100 komentar TikTok (Kustom)", category: "tiktok", price: "Rp90.000", img: "Tiktok.jpg" },
    { name: "5.000 save TikTok", category: "tiktok", price: "Rp12.500", img: "Tiktok.jpg" },
    { name: "10.000 save TikTok", category: "tiktok", price: "Rp25.000", img: "Tiktok.jpg" },
    { name: "2.000 share TikTok", category: "tiktok", price: "Rp10.000", img: "Tiktok.jpg" },
    { name: "5.000 share TikTok", category: "tiktok", price: "Rp25.000", img: "Tiktok.jpg" },
    { name: "15.000 share TikTok", category: "tiktok", price: "Rp75.000", img: "Tiktok.jpg" },
    { name: "25.000 share TikTok", category: "tiktok", price: "Rp120.000", img: "Tiktok.jpg" },
    { name: "10K views + 1.5K likes", category: "tiktok", price: "Rp10.000", img: "Tiktok.jpg" },
    { name: "50K views + 5K likes", category: "tiktok", price: "Rp35.000", img: "Tiktok.jpg" },
    { name: "100K views + 10K likes", category: "tiktok", price: "Rp70.000", img: "Tiktok.jpg" },
    { name: "300K views + 30K likes", category: "tiktok", price: "Rp210.000", img: "Tiktok.jpg" },
    { name: "600K views + 50K likes", category: "tiktok", price: "Rp360.000", img: "Tiktok.jpg" },
    { name: "1 juta views + 100K likes", category: "tiktok", price: "Rp670.000", img: "Tiktok.jpg" },
    { name: "500 follower Facebook", category: "facebook", price: "Rp20.000", img: "fb.jpg" },
    { name: "1.000 follower Facebook", category: "facebook", price: "Rp35.000", img: "fb.jpg" },
    { name: "3.000 follower Facebook", category: "facebook", price: "Rp90.000", img: "fb.jpg" },
    { name: "5.000 follower Facebook", category: "facebook", price: "Rp150.000", img: "fb.jpg" },
    { name: "10.000 follower Facebook", category: "facebook", price: "Rp280.000", img: "fb.jpg" },
    { name: "1.000 like post Facebook", category: "facebook", price: "Rp16.000", img: "fb.jpg" },
    { name: "3.000 like post Facebook", category: "facebook", price: "Rp48.000", img: "fb.jpg" },
    { name: "7.000 like post Facebook", category: "facebook", price: "Rp112.000", img: "fb.jpg" },
    { name: "10.000 like post Facebook", category: "facebook", price: "Rp150.000", img: "fb.jpg" },
    { name: "35 komentar Facebook", category: "facebook", price: "Rp11.000", img: "fb.jpg" },
    { name: "70 komentar Facebook", category: "facebook", price: "Rp22.000", img: "fb.jpg" },
    { name: "215 komentar Facebook", category: "facebook", price: "Rp66.000", img: "fb.jpg" },
    { name: "710 komentar Facebook", category: "facebook", price: "Rp220.000", img: "fb.jpg" },
    { name: "1.000 komentar Facebook", category: "facebook", price: "Rp290.000", img: "fb.jpg" },
    { name: "2.100 views Facebook Reel", category: "facebook", price: "Rp10.000", img: "fb.jpg" },
    { name: "6.300 views Facebook Reel", category: "facebook", price: "Rp30.000", img: "fb.jpg" },
    { name: "10.000 views Facebook Reel", category: "facebook", price: "Rp40.000", img: "fb.jpg" },
{ name :  "100 Subscriber Youtube",category: "youtube", price: "Rp8.000", img: "yt.jpg" },
    { name: "300 subscriber YouTube", category: "youtube", price: "Rp24.000", img: "yt.jpg" },
    { name: "700 subscriber YouTube", category: "youtube", price: "Rp56.000", img: "yt.jpg" },
    { name: "3.000 subscriber YouTube", category: "youtube", price: "Rp240.000", img: "yt.jpg" },
    { name: "7.000 subscriber YouTube", category: "youtube", price: "Rp560.000", img: "yt.jpg" },
    { name: "10.000 subscriber YouTube", category: "youtube", price: "Rp890.000", img: "yt.jpg" },
{ name: "500 views YouTube", category: "youtube", price: "Rp13.000", img: "yt.jpg" },
    { name: "1.000 views YouTube", category: "youtube", price: "Rp25.000", img: "yt.jpg" },
    { name: "5.000 views YouTube", category: "youtube", price: "Rp125.000", img: "yt.jpg" },
    { name: "10.000 views YouTube", category: "youtube", price: "Rp240.000", img: "yt.jpg" },
    { name: "500 like YouTube", category: "youtube", price: "Rp10.000", img: "yt.jpg" },
    { name: "1.000 like YouTube", category: "youtube", price: "Rp20.000", img: "yt.jpg" },
    { name: "8.000 like YouTube", category: "youtube", price: "Rp80.000", img: "yt.jpg" },
    { name: "10.000 like YouTube", category: "youtube", price: "Rp95.000", img: "yt.jpg" },
    { name: "50 komentar YouTube",  category: "youtube", price: "Rp10.000", img: "yt.jpg" },
    { name: "300 komentar YouTube", category: "youtube", price: "Rp60.000", img: "yt.jpg" },
    { name: "3.000 komentar YouTube", category: "youtube", price: "Rp600.000", img: "yt.jpg" },
    { name: "500 follower Instagram Mix", category: "instagram", price: "Rp15.000", img: "igi.jpg" },
    { name: "1.000 follower Instagram Mix", category: "instagram", price: "Rp30.000", img: "igi.jpg" },
    { name: "3.000 follower Instagram Mix", category: "instagram", price: "Rp90.000", img: "igi.jpg" },
    { name: "10.000 follower Instagram Mix", category: "instagram", price: "Rp290.000", img: "igi.jpg" },
    { name: "100 follower Instagram Indonesia🇮🇩", category: "instagram", price: "Rp8.000", img: "igi.jpg" },
    { name: "500 follower Instagram Indonesia🇮🇩", category: "instagram", price: "Rp40.000", img: "igi.jpg" },
    { name: "1.000 follower Instagram Indonesia🇮🇩", category: "instagram", price: "Rp80.000", img: "igi.jpg" },
    { name: "5.000 follower Instagram Indonesia🇮🇩", category: "instagram", price: "Rp400.000", img: "igi.jpg" },
    { name: "10.000 follower Instagram Indonesia🇮🇩", category: "instagram", price: "Rp790.000", img: "igi.jpg" },
  // Produk lainnya
];

let cart = [];
let wishlist = [];
let currentCategory = "all"; // Default to show all categories

// Automatically filter to show all products on page load
window.onload = function() {
    displayProducts(); // Show products on load without requiring category selection
}

function displayProducts() {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = ''; 
    products
        .filter(product => currentCategory === "all" || product.category === currentCategory)
        .forEach(product => {
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

// Function to handle category change
function filterByCategory() {
    const selectedCategory = document.getElementById('categoryFilter').value;
    currentCategory = selectedCategory === "all" ? "all" : selectedCategory;
    displayProducts(); // Update the product display based on category
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

function addToCart(name, price, img) {
    const existingProduct = cart.find(item => item.name === name);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ name, price, img, quantity: 1 });
    }
    updateCartDisplay();

    // Show alert notification (similar to Wishlist)
    alert(`${name} telah ditambahkan ke keranjang.`);
}

function addToWishlist(name, price, img) {
    if (!wishlist.some(item => item.name === name)) {
        wishlist.push({ name, price, img });

        // Show notification for Wishlist
        const notification = document.createElement('div');
        notification.innerText = `${name} telah ditambahkan ke wishlist.`;
        notification.className = 'notification';
        document.body.appendChild(notification);

        setTimeout(() => {
            document.body.removeChild(notification);
        }, 3000);

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
