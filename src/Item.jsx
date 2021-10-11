

function Item({ item }) {

    return (
        <div >
            <div >
                <div >
                    <h5 >{item.pavadinimas}</h5>
                    <h6>{item.kiekis}</h6>
                    
                    <div>
                        <button type="button" className="btn btn-danger m-1">Delete</button>
                      
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  export default Item;