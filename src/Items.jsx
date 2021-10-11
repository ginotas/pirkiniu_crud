import Item from './Item';


function Items({items}) {



    return (
        <>
            <div>
                <div>
                    {items.map(item => <Item key={item.id} item={item} />)}
                </div>
            </div>
        </>
    );
}

export default Items;