//
var n = 0;
var wheelAdded = false;
var hoodAdded = false;
var suspensionAdded = false;
var roofAdded = false;
var cabAdded = false;
// 
function isFullCarAdded() {
    Ecwid.Cart.get(function(cart) {
        if ((n == 5) && (cart.productsQuantity >= 4)) {
        document.getElementById("car_image").innerHTML = "<h2>вы собрали машину</h2>";
        } 
    });       
};
//
function suspension() {
    Ecwid.Cart.addProduct(169134043);
    if (!suspensionAdded) {
        n++;
        suspensionAdded = true;
    }
    isFullCarAdded();
};
function wheel() {   
    Ecwid.Cart.addProduct(169134046);  
    if (!wheelAdded) {
        n++;
        wheelAdded = true;
    };
    isFullCarAdded();
}; 
function hood() {
    Ecwid.Cart.addProduct(169134044);
    if (!hoodAdded) {
        n++;
        hoodAdded = true;
    }
    isFullCarAdded();
};
function roof() {
    Ecwid.Cart.addProduct(169134042);
    if (!roofAdded) {
        n++;
        hoofAdded = true;
    }
    isFullCarAdded();
};
function cab() {
    Ecwid.Cart.addProduct(169134045);
    if (!cabAdded) {
        n++;
        cabAdded = true;
    }
    isFullCarAdded();
};


        