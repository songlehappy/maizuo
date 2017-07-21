import React, { Component } from 'react';
import $ from 'jquery';

// ui组件一定要关联一个 容器组件 且用connect 方法
import { connect } from 'react-redux';
import { Button } from 'antd-mobile';
class uDetail extends Component {
    render() {
        var that = this;
        // console.log(this.props.list);
        return (
            <div>
                {
                    this.props.list.map(function (value, index) {
                        return (
                            <div key={index} style={{ fontSize: '0.5rem' }}>
                                <img src={value.cover.origin} alt={value.name} style={{ width: '100%', }} />
                                <div style={{ margin: '1rem 0', borderLeft: '0.5rem solid #fe8233', fontSize: '0.7rem', textIndent: '0.5em' }}>影片简介</div>
                                <div style={{ padding: '0 1rem 0.5rem', }}>导演：{value.director}</div>
                                <div style={{ padding: '0 1rem 0.5rem', }}>主演：
                                    {
                                        value.actors.map(function (item, num) {
                                            return (<span key={num}> {item.name} |</span>)
                                        })
                                    }
                                </div>
                                <div style={{ padding: '0 1rem 0.5rem', }}>地区语言：{value.nation}({value.language})</div>
                                <div style={{ padding: '0 1rem 0.5rem', }}>类型：{value.category}</div>
                                <div style={{ padding: '0 1rem 0.5rem', }}>上映日期：{that.props.getFilm(value.premiereAt)}上映</div>
                                <div style={{ padding: '0 1rem 0.5rem', }}>{value.synopsis}</div>
                            </div>
                        )
                    })
                }
                <div className="login" style={{ textAlign: 'center' }}>
                    <Button href='http://localhost:3000/cinema' type="primary" inline style={{ fontSize: '0.6rem' }} >立即购票</Button>
                </div>
            </div>
        )
    }

    componentDidMount() {
        var id = window.location.hash.slice(1);
        // console.log(id);
        this.props.getData(id);
        // this.props.changeHead();
    }



}

var Detail = connect(
    function (state) {
        return {
            list: state.data_detail,
        }
    },
    function (dispatch) {
        return ({
            getData: function (id) {
                dispatch({
                    type: 'DATA_START',
                })

                //请求数据
                setTimeout(function () {
                    $.get('http://localhost:8080/detail?id=' + id, function (res) {
                        var list = res.data.film;
                        // console.log(list);
                        dispatch({
                            type: 'DETAIL_DATA_END',
                            data: list,
                        })
                        dispatch({
                            type: 'CHANGE_HEAD',
                            data: list.name,
                        })
                    })
                }, 300)
            },
            getFilm: function (time) {
                var d = new Date();
                d.setTime(time);
                return d.toLocaleDateString();
            }
        })
    }
)(uDetail);


export default Detail;