import {Component} from "react"
export default class Footer1 extends Component{
    state={
        filter:'',
        data:[
            {country:'India',capital:'Delhi',population:1000},
            {country:'Japan',capital:'Tokyo',population:2000},
            {country:'Sri Lanka',capital:'Colombia',population:500},
        ]
    }
    searchData(e){
        this.setState({
            filter:e.target.value
        })
    }
    render(){
        let {filter,data}=this.state
        let dataSearch=data.filter(item=>{
            return Object.keys(item).some(key=>
                item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
        })
        return(
            <div>
                <h3>Search App</h3>
                <input type='text' value={filter} placeholder='enter data search' onChange={this.searchData.bind(this)}/>
                <hr/><hr/>
                <table>
                    <tr>
                        <th>Country</th>
                        <th>Captial</th>
                        <th>Population</th>
                    </tr>
                    {
                        (dataSearch.map(item=>
                            <tr>
                                <td>{item.country}</td>
                                <td>{item.capital}</td>
                                <td>{item.population}</td>
                            </tr>
                            ))
                    }
                    </table>
                <hr/>
            </div>
        )
    }
}