export default ()=>{
    setTimeout(() => {
        console.log('main Logic');
        const selectBoxToCompany = document.getElementById('selectBoxToCompany')
        selectBoxToCompany.addEventListener('click',()=>{
            console.log('selectBoxToCompany');
        })
        const selectBoxToCenter = document.getElementById('selectBoxToCenter')
        selectBoxToCenter.addEventListener('click',()=>{
            console.log('selectBoxToCenter');
        })
        const mainPageResultBtn = document.getElementById('mainPageResultBtn')
        mainPageResultBtn.addEventListener('click',()=>{
            location.hash='#resultPage'
        })
    }, 1000);

}



