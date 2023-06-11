const img_mainLogo = new URL(
    '../../img/mainLogo.png?as=webp&width=200',
    import.meta.url
  )


export default (container)=>{
    let template = `
        <div style="display: flex; justify-content: center; align-items:center; height: 100vh;">
            <img style="display: block;" src="${img_mainLogo}">
        </div>
    `;
    container.innerHTML = template
}
