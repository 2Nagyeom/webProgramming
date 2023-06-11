export default ()=>{
    const routePath = decodeURI(location.hash);
    var hashArray = routePath.split('/');
    var guName = hashArray[1];
    var initialLat = Number(hashArray[2]);
    var initialLng = Number(hashArray[3]);
    setTimeout(() => {
        const continueBtn = document.getElementById('continueBtn')
        continueBtn.addEventListener('click',()=>{
            location.hash = `#categoryPage/${initialLat}/${initialLng}/${guName}`
        })
    }, 1000);
}