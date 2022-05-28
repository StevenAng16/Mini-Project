
import ListCart from './ListItem'
import './list.css'

const ListJudul = (props) => {
    const {data, hapusCart} = props

    return (
<div>
        <div>
            {/* <!-- CSS only --> */}
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
            {/* <!-- JavaScript Bundle with Popper --> */}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"/>
            
            <table cellPadding="5px" cellSpacing="4px" style={{"width":"100%", "border":"1px solid black"}}>
                <thead>
                   <th>Harga</th>
                </thead>
                <tbody>
                    
                    
                </tbody>
            </table>
            
        </div>
        </div>
    )
}

export default ListJudul