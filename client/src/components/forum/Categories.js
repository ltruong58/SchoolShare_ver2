import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";


class ForumCategories extends Component {
    render() {
        let cat = null;
        const categories = [{
            name: 'General',
            link: 'general'
        },
        {
            name: 'Homework',
            link: 'homework'
        },
        {
            name: 'Feedback',
            link: 'feedback'
        }
    ]
        if (categories !== null) {
            cat = categories.map(category => {
                return (
                    <div style= {{marginBottom: "20px"}}>           
                    <Fragment key={category._id}>
                        <Link to={'/forum/'+category.link} 
                        style={{ fontSize: 18, 
                        fontFamily: "Urbana",
                        //fontWeight: "bold",
                        letterSpacing: "1px",
                        border: '1px solid #2BB673', 
                        padding: 10, 
                        borderRadius: "10px" }} >{category.name}</Link>
                        <br />
                        <br />
                    </Fragment>
                    </div>
                )
            })
        }
        return (
            <div className="container">
                <div className="card white" style={{ padding: 5 }}>
                <div className="row">
                <div className="col l9">
                <h4 className="center-text" 
                    style ={{marginBottom: "50px", 
                    marginLeft: "10px",
                    fontFamily: "Urbana" }}>Discussion Forum</h4>
                </div>
                <div className="col l3">
                </div>
                </div>

                    <div className="row">
                        <div className="col l9">
                            {cat}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(ForumCategories);