
let bg = document.querySelector('.prevue_bg');
window.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});
let bg2 = document.querySelector('.tehnologi_bg');
window.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg2.style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
});

let bg3 = document.querySelector('.portf_bg');
window.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg3.style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
});