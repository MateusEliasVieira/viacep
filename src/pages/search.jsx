import FetchCep from "../components/fetchcep/FetchCep";
import Viacep from "../assets/images/viacep.png"

const Search = ()=>{
    return(
        <div>
            <img src={Viacep} style={{width:"100%"}}/>
            <FetchCep
                placeholderInput={"Digite o cep"}
                typeInput={"number"}
            />
        </div>
    )
}

export default Search;