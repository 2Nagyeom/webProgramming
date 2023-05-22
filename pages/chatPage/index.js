import bottomTab from "../../component/bottomTab";

export default function chatPage(container) {
    let template = `
        <h1>챗봇</h1>
        ${bottomTab()}

        `
    container.innerHTML = template;
}