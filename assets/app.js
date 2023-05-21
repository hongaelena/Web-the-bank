var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;
// đóng -mở mobile-menu
mobileMenu.onclick = function() {
        var isClosed = header.clientHeight === headerHeight;
        if (isClosed) {
            header.style.height = 'auto';
        } else {
            header.style.height = null;
        }
    }
    // tự động đóng khi chọn menu
var menuItems = document.querySelectorAll('#nav li')
var subnav = document.querySelector('.menu .subnav');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function(event) {
        var isParentMenu = this.nextElementSibling && menuItem.nextElementSibling?.classList?.contains('subnav');
        subnav.classList.remove('active');
        if (isParentMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    }
}
var menuSubNav = document.querySelector('.menu');
menuSubNav.onclick = function(event) {
    if (subnav.classList.contains('active')) {
        subnav.classList.remove('active');
    } else {
        subnav.classList.add('active');
    }
}