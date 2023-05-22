import bottomTab from "../../component/bottomTab";

export default function mypage(container) {
    let template = `
        <h1>마이페이지</h1>
        ${bottomTab()}

        `
    container.innerHTML = template;
}

