import React, { Component } from 'react';
import $ from 'jquery';
// ui组件一定要关联一个 容器组件 且用connect 方法
import { connect } from 'react-redux';







var pageIndex = 1;
var count = 7;


class uListnow extends Component {

    render() {
        // console.log(this.props.data)
        return (
            <div className='film'>

                {
                    this.props.data.map(function (value, index) {
                        return (
                            <a href={'/detail#' + value.id} key={index} style={{display:'block'}}>
                                <div className="nowfilm">
                                    <img style={{ height: '3.5rem', width: '2.5rem' }} src={value.poster.origin} alt={value.name} />
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', padding: '0 1rem', width: '100%' }}>
                                        <div style={{ fontSize: '0.7rem' }}>
                                            <span>{value.name} </span>
                                            <span style={{ float: 'right', color: '#fc7103' }}>{value.grade} </span>
                                        </div>
                                        <div style={{ fontSize: '0.5rem', color: '#999' }}>{value.intro} </div>
                                        <div style={{ fontSize: '0.5rem', color: '#999' }}>{value.cinemaCount}家影院上映　　　{value.watchCount}人购票</div>
                                    </div>
                                </div>
                            </a>
                        )
                    })
                }


            </div>
        );


    }

    componentDidMount() {
        // console.log(111);
        // $('.am-drawer-content').off('scroll');
        var that = this;
        // 使用传过来的getdata
        this.props.getData();
        $('.am-drawer-content').on({
            scroll: function () {
                // console.log(2332);
                if (($(this).find('.film .nowfilm').length - 4) * 200 <= $(this).scrollTop() && that.props.flag === false) {
                    that.props.getData();
                }
                // console.log($(this).find('.film .nowfilm').height(),22222);
                // console.log($(this).scrollTop());
                // console.log(($(this).find('.film .nowfilm').length-4)*200,1111111)
            }
        })

    }

    componentWillUnmount() {
        // console.log('jiesh')
        $('.am-drawer-content').off('scroll');
    }

}

var Listnow = connect(
    function (state) {
        return {
            data: state.data_list_now,
            flag: state.animating,
        }
    },
    function (dispatch) {
        return {
            getData: function () {
                // console.log(222);
                dispatch({
                    type: 'LIST_NOW_DATA_START',
                })

                //请求数据
                setTimeout(function () {
                    $.get('http://localhost:8080/list/now?page=' + (pageIndex++) + '&count=' + count, function (res) {
                        var list = res.data.films;
                        // console.log(list);
                        dispatch({
                            type: 'LIST_NOW_DATA_END',
                            data: list,
                        })
                    })
                }, 300)
            },
            // listener:function(){
            //     $('.video').scroll(function(){
            //         console.log(11);
            //     })
            // }

        }
    }
)(uListnow);

export default Listnow;