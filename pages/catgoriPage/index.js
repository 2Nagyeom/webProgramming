import bottomTab from "../../component/bottomTab";

export default function chatPage(container) {
    let template = `
        <h1>카테고리 페이지</h1>
        ${bottomTab()}

        `
    container.innerHTML = template;
}