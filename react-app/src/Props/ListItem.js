import { FaTrash } from "react-icons/fa"

const ListItem = ({item, hapusCart}) => {
    return (
        
        <tr>
            <td><p>{item.title}</p></td>
            <td>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            </td>
            <td>
                <button type="button" class="btn btn-danger" onClick={() => {hapusCart(item.id)}}><FaTrash icon="fa-solid fa-trash-can" /></button>
            </td>
        </tr>
    )
}

export default ListItem
