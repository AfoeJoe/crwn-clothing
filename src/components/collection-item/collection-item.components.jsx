import './collection-item.styles.scss'

const CollectionItem = ({id,name,price,imageUrl})=>{
    return (<div className="collection-item">
        <div className="image"
        style={{
            backgroundImage:`url(${imageUrl})`
        }}></div>
        <div>
            <span className="name">
                {name}
            </span>
            <span className="price">
                {price}
            </span>
        </div>
    </div>)
};
export default CollectionItem;