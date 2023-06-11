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
        <span>${title}</span>
        <input id=${id}></input>
        
    `
}

