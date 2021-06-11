import React from 'react';
import FooterCmp from '../Footer/Footer';
import Header from '../Header/Header';
import ResultBox from '../ResultBox/ResultBox';
import SearchBox from '../Search/SearchBox';
import './App.css'
const nameLib = require('@rstacruz/startup-name-generator')
class App extends React.Component {

    state = {
        headerTitle: "Name Me !",
        headerExpanded: true,
        suggestionName: []
    }

    handleInputChange = (inputText) => {
        this.setState({ headerExpanded: !inputText, suggestionName: inputText ? nameLib(inputText) : [] })
    }

    render() {
        return (
            <div>
                <Header headerTitle={this.state.headerTitle} headerExpanded={this.state.headerExpanded} />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultBox suggestionName={this.state.suggestionName} />
                <FooterCmp />
            </div>
        )
    }
}



export default App