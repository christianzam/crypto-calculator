import React, { Component } from 'react'

class Search extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const searchResults = this.props.searchResults.map( curr => <li key={curr.id} data-id={curr.id} onClick={this.props.handleSelect} className="currency-list-item"><a href="#" className="currency"><span>{curr.name}</span><span className="currency_symbol"> {curr.currency_symbol}</span></a></li>)
    return(
      <div>
        <h1>Crypto Currency Savings Calculator</h1>
        <h2>Pon aqui tu lana en Bitcoin o lo que sea</h2>
        <form>
          <div className = "form-group">
            <label> Search for a currency: osea buscale que crypto moneda </label><br/>
            <input onChange= {this.props.handleChange} autoComplete="off" type="text" name="name" placeholder="eg. Bitcoin, Litecoin..." value={this.props.name} className="field"/>
          </div>
          <div className="currency-list">
            {searchResults}
          </div>
        </form>
      </div>
    )
  }
}

export default Search
