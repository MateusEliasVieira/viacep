import {useState} from "react"
import PropTypes from "prop-types";
import axios from "axios";
import Alert from "../alert/Alert"
import Table from "../table/Table"
import "./FetchCep.css"

const FetchCep = (props)=>{

    const[cep,setCep]=useState("")
    const[data,setData]=useState({})
    const[loading,setLoading]=useState(false)
    const[alert,setAlert]=useState("")
    const[msg,setMsg]=useState("")
   
    const showMessage = (classAlert,message)=>{
        setMsg(message)
        setAlert(classAlert)
        setTimeout(()=>{
            setMsg("")
            setAlert("")
        },5000)
    }

    const findCep = ()=>{
        if(cep){
            setLoading(true)
            axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response)=>{
                setData(response.data)
                setLoading(false)           
            }).catch(()=>{
                setLoading(false) 
                showMessage("alert alert-danger",`Este CEP(${cep}) não existe!`)         
            })
        }else{
            showMessage("alert alert-warning","Informe o CEP de 8 dígitos e sem hífen(-) !")         
        }
        setCep("")
    }

    return(
        <>
            <Alert alert={alert} msg={msg}/>
   
            <div className="box-input-button">
                <input 
                    id="input-id-search-cep"
                    className="form-control"
                    type={props.typeInput} 
                    value={cep} 
                    onChange={(event) =>{ setCep(event.target.value) }}
                    placeholder={props.placeholderInput}
                    />
                <button  onClick={(event)=>{ event.preventDefault(); findCep() }} className="btn btn-primary" type="button" disabled={loading ? "disabled" : ""}>
                    <span className={loading ? "spinner-border spinner-border-sm": ""} role="status" aria-hidden="true"></span>
                    <span className="sr-only"> {loading ? "Loading..." : "Search"} </span>
                </button>
            </div>
            
            <Table data={data}/>
        </>
    )
}

FetchCep.propTypes = {
    typeInput: PropTypes.string, // Adicione a validação para a propriedade 'type'
    placeholderInput: PropTypes.string
};

export default FetchCep;