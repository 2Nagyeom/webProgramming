import mainLogo from '../../img/mainLogo.png'

export default (container)=>{
    let template = `
        <div style="display: flex; justify-content: center; align-items:center; height: 100vh;">
            <img style="display: block;" src="${mainLogo}" crossorigin>
        </div>
    `;
    container.innerHTML = template
}
