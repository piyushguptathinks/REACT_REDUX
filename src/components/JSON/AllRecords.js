import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchJSON} from '../../actions/postActions';


class AllRecords extends Component {
    componentDidMount(){
        this.props.fetchJSON();
    }

    createUser(){
           return this.props.allJSONData.map((user)=>{
                return(                   
                        <tr>
                            <td>{user.Username}</td>
                            <td>{user.Email}</td>
                        </tr>
                )
            })
    }
    render() {
        if (typeof this.props.allJSONData !== 'undefined' && this.props.allJSONData.length > 1) {
        debugger;
        return (
                <div> 
                    <h1>All Records</h1>
                    <table>
                        <th>User Name</th>
                        <th>Email</th>
                        {this.createUser()}
                    </table>
                    
                </div>
            
         );
        }
        else{
            return(<h1>No Data</h1>)
        }
    }
}

const mapStateToProps=state=>({
    allJSONData:state.jsondata.allJSONData
  })
 
export default connect(mapStateToProps,{fetchJSON})(AllRecords);