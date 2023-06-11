const img_wing = new URL(
    '../../img/pngwing.png?as=webp&width=30',
    import.meta.url
  )
const img_person = new URL(
    '../../img/person.png?as=webp&width=30',
    import.meta.url
)

export default function headerTab() {
    return `
        <div class="headbar">
            <input onclick="location.hash=''" type="image" style="padding : 1%" src=${img_wing}/>
            <input type="image"  style="float:right; padding : 1%" src=${img_person}/>
        </div>
    `
}


