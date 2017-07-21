import React, { Component } from 'react';
import $ from 'jquery';

import { connect } from 'react-redux';

import { Button } from 'antd-mobile';

class uNow extends Component {
    render() {
        // console.log(this.props.data);
        return (
            <div>
                <ul className="nowplay">
                    {
                        this.props.data.map(function (value, index) {
                            return (
                                <a key={index} href={'/detail#' + value.id}>
                                    <li >
                                        <img src={value.cover.origin} alt={value.name} />
                                        <div>
                                            <div>
                                                <div className="filmname">{value.name}</div>
                                                <div className="filmmessage">
                                                    {value.cinemaCount}家影院上映 {value.watchCount}人购票
                                            </div>
                                            </div>
                                            <div className="filmgrade">{value.grade}</div>
                                        </div>
                                    </li>
                                </a>
                            )
                        })
                    }
                </ul>
                <div className="morefilm">
                    <Button type="ghost" inline size="large" href='http://localhost:3000/video' >更多热映电影</Button>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.props.getData();
    }
}

var Now = connect(
    function (state) {
        return {
            data: state.data_nowing,
        }
    },
    function (dispatch) {
        return {
            getData: function () {
                dispatch({
                    type: 'DATA_START'
                })


                $.get('http://localhost:8080/now', function (res) {
                    // console.log(res);
                    var list = res.data.films;
                    dispatch({
                        type: 'NOW_DATA_END',
                        data: list
                    })
                })

            }
        }
    }
)(uNow);
export default Now;