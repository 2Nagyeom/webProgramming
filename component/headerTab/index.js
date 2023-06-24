import img_wing from '../../img/pngwing.png'
import img_person from '../../img/person.png'

export default function headerTab() {
    return `
        <div class="headbar">
            <input onclick="location.hash=''" type="image" style="padding:1%;width:30px;height:30px" src="${img_wing}" />
            <input type="image"  style="float:right; padding:1%; width:30px;height:30px" src="${img_person}" />
        </div>
    `
}
