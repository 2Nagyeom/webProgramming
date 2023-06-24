export default (container)=>{
    let template = `

        <div>
            <h1>메인페이지</h1>
            ${inputWithTitle('selectBoxToCompany','직장선택')}
            ${inputWithTitle('selectBoxToCenter','선호 시설 선택')}
            <div id='mainPageResultBtn'>
                <h3>결과보기</h3>
            </div>
        </div>
    `;

    container.innerHTML = template
    return null
}

const inputWithTitle = (id,title) =>{
    return `
        <div style="display:flex;flex-direction:row;">
            <span>${title}</span>
            <div id=${id} style="width:300px;height:60px;border-width:thin;background-color:yellow"></div>
        </div>
    `
}

