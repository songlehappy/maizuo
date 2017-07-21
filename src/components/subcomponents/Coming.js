import React, { Component } from 'react';
import $ from 'jquery';

import { connect } from 'react-redux';

import { Button } from 'antd-mobile';

class uComing extends Component {

    render() {

        var that = this;
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
                                            <div className="filmgrade" style={{ fontSize: '0.5rem' }}>{that.props.getFilm(value.premiereAt)}上映</div>
                                        </div>
                                    </li>
                                </a>
                            )
                        })
                    }
                </ul>
                <div className="morefilm">
                    <Button type="ghost" inline size="large" href='http://localhost:3000/video#2' >更多即将上映电影</Button>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.props.getData();

    }
}

var Coming = connect(
    function (state) {
        return {
            data: state.data_coming,
        }
    },
    function (dispatch) {
        return {
            getData: function () {
                dispatch({
                    type: 'DATA_START'
                })

                setTimeout(function () {
                    $.get('http://localhost:8080/coming', function (res) {
                        // console.log(res);
                        var list = res.data.films;
                        dispatch({
                            type: 'COME_DATA_END',
                            data: list
                        })
                    })
                }, 2000)
            },
            getFilm: function (time) {
                var d = new Date();
                d.setTime(time);
                return d.toLocaleDateString();
            }
        }
    }
)(uComing);
export default Coming;