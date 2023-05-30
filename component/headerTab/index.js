const img_wing = new URL(
    '../../img/pngwing.png?as=webp&width=60',
    import.meta.url
  )
const img_person = new URL(
    '../../img/person.png?as=webp&width=60',
    import.meta.url
)

export default function headerTab() {
    return `
        <div class="headbar">
            <input onclick="location.hash=''" type="image" src=${img_wing}/>
            <input type="image"  style="float:right; padding : 3px" src=${img_person}/>
        </div>
    `
}


