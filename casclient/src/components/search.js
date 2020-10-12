import React, { Component } from 'react'
import styles from "./search.module.css"

export default class Search extends Component {

    searchForIt = (event) => {
        this.props.SetSearchResult(event.target.value)
        if(event.target.value == "<empty string>" || event.target.value == "0"){
            this.props.SetSearchResult(this.props.items)
        }
        else{
            let array = []
            this.props.items.map((item)=> {
                if(item.AddressInfo.Title.includes(event.target.value) || item.AddressInfo.AddressLine1.includes(event.target.value) || item.UsageCost.includes(event.target.value) ){
                   array.push(item) 
                }
            })
            this.props.SetSearchResult(array)
        }
        console.log(this.props.searchResult)
    }

    render() {

        return (

            <div className={styles.contentbox}>
                <p>Looking for something?</p>
                <input type={"text"} onChange={this.searchForIt}  ></input>
                
            </div>
        )
    }
}
