import store from "../../store";

const openDaumAddressPopup = (selectBoxToCompany) =>{
    return new daum.Postcode({
        oncomplete: function(data) {
            const address = data.address;

            selectBoxToCompany.innerText = address

            fetch('https://dapi.kakao.com/v2/local/search/address.json?query=' + address,{
                headers: {"Authorization": "KakaoAK 75fa87747de5986f0d54c12a967f3d09"}
            }).then((res)=>res.json()).then((res)=>{
                const {x,y} = res?.documents[0]?.address
                store.dispatcher({type:'setCompnyXY',param:{companyX:x,companyY:y}})
                console.log(store.getState(),'getState')
            }).catch((err)=>{
                console.error(err);
            })
        }
    }).open();
}



export default ()=>{
    setTimeout(() => {
        console.log('main Logic');
        const selectBoxToCompany = document.getElementById('selectBoxToCompany')
        selectBoxToCompany.addEventListener('click',()=>{
            openDaumAddressPopup(selectBoxToCompany);
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

