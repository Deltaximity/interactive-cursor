let cursor = document.querySelector('#cursor');
let root = document.querySelector(':root');
let cs = getComputedStyle(root);
let cursorSize = cs.getPropertyValue('--cursor-size').split(' ').pop().split('px')[0];
let btn = document.querySelectorAll('.button');

let crs = window.addEventListener('mousemove', (e) => {
    root.style.setProperty('--x-position', e.clientX + "px");
    root.style.setProperty('--y-position', e.clientY + "px");
});

for (let i = 0; i < btn.length; i++) {
    // btn[i].style.transitionProperty = "width, height";
    btn[i].addEventListener('mouseover', (e) => {
        root.style.setProperty('--cursor-size', Number(cursorSize) + 10 + "px");

        btn[i].addEventListener('mousemove', (e) => {
            let rect = e.target.getBoundingClientRect();
            let btnCS = getComputedStyle(e.target);
            cursor.style.height = btnCS.height;
            cursor.style.width = btnCS.width;
            cursor.style.borderRadius = btnCS.borderRadius;
            root.style.setProperty('--x-position', rect.left + "px");
            root.style.setProperty('--y-position', rect.top + "px");
        });

        let leave = btn[i].addEventListener('mouseout', () => {
            root.style.setProperty('--cursor-size', Number(cursorSize) + "px");
            cursor.style.height = cursorSize + "px";
            cursor.style.width = cursorSize + "px";
            cursor.style.borderRadius = cursorSize + "px";
            btn[i].removeEventListener('mouseout', leave);
        });
    });
}