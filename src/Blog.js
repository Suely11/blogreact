import React from 'react';
//import { url } from 'inspector';

function Post(props) {
return(
    <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </div>
)
}

function Blog() {
    const posts = [
        {
            title: 'Flores de Holanda',
            description: 'gdhjfbvbdkjvnsdkjnc',
            items: ['item 1', 'item 2']
        },
        {
            title: 'Flores de Irlanda',
            description: 'Hay varios cientos de especies de flores silvestres que crecen en Irlanda. Las flores pueden encontrarse por toda la isla, desde las montañas hasta el mar. Algunas flores autóctonas de Irlanda incluyen: la orquídea irlandesa, lirio kerry, amor en la niebla, hada de lino y hierba cana.',
            items: ['item 3', 'item 4']
        }
    ]
return (
    <div>

{posts.map(p => {
    return (
        <Post title={p.title} description={p.description} items={p.item} image={p.image}/>
    )


})}

    </div>
)

}
function Footer() {
    return (
    <h4>Escrito por: Suely Lopez Coronel©</h4>
    )
    }
export default Blog;
export {Footer};
