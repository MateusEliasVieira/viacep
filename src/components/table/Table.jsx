import PropTypes from "prop-types"
import "./Table.css"

const Table = (props)=>{
    return(
        <div className="box-table">      
            <table className="table">
                <thead className="table-light">
                    <tr>
                        <td>Estado</td>
                        <td>Cidade</td>
                        <td>Bairro</td>
                        <td>Logradouro</td>
                        <td>Complemento</td>
                        <td>DDD</td>
                        <td>Cep</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.data.uf}</td>  
                        <td>{props.data.localidade}</td>
                        <td>{props.data.bairro}</td>
                        <td>{props.data.logradouro}</td>
                        <td>{props.data.complemento}</td>
                        <td>{props.data.ddd}</td>
                        <td>{props.data.cep}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

Table.propTypes = {
    data: PropTypes.object.isRequired
}

export default Table