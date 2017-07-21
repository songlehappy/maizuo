import React, { Component } from 'react';
import $ from 'jquery';
// ui组件一定要关联一个 容器组件 且用connect 方法
import { connect } from 'react-redux';






var pageIndex = 1;
var count = 7;




class uListcoming extends Component {

    render() {
        var that = this;

        // console.log(this.props.data)
        // var that = this;
        return (
            <div className='film'>

                {
                    this.props.data.map(function (value, index) {
                        return (
                            <a href={'/detail#' + value.id} key={index} style={{display:'block'}}>
                                <div className="subfilm" >
                                    <img style={{ height: '3.5rem', width: '2.5rem' }} src={value.poster.origin || value.poster.thumbnail} alt={value.name} />
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', padding: '0 1rem', width: '100%' }}>
                                        <div style={{ fontSize: '0.7rem' }}>
                                            <span>{value.name} </span>
                                            <span style={{ float: 'right', color: '#ccc' }}>&gt; </span>
                                        </div>
                                        <div style={{ fontSize: '0.5rem', color: '#999' }}>{value.intro} </div>
                                        <div style={{ fontSize: '0.55rem', color: '#fc7103' }}>{that.props.getFilm(value.premiereAt)}上映</div>
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
        // $('.am-drawer-content').off('scroll');
        var that = this;
        // 使用传过来的getdata
        this.props.getData();
        $('.am-drawer-content').on({
            scroll: function () {
                if (($(this).find('.film .subfilm').length - 4) * 200 <= $(this).scrollTop() && that.props.flag === false) {
                    that.props.getData();
                }
                // console.log($(this).find('.film .subfilm').height(),22222);
                // console.log($(this).scrollTop());
                // console.log(($(this).find('.film .subfilm').length-4)*200,1111111)
            }
        })



    }


    componentWillUnmount() {
        $('.am-drawer-content').off('scroll');
    }


}

var Listcoming = connect(
    function (state) {
        return {
            data: state.data_list_coming,
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
                    $.get('http://localhost:8080/list/coming?page=' + (pageIndex++) + '&count=' + count, function (res) {
                        var list = res.data.films;
                        // console.log(list);
                        dispatch({
                            type: 'LIST_COME_DATA_END',
                            data: list,
                        })
                    })
                }, 300)
            },
            // listener:function(){
            //     $('.video').scroll(function(){
            //         console.log(11);
            //     })
            // },
            getFilm: function (time) {
                var d = new Date();
                d.setTime(time);
                return d.toLocaleDateString();
            }

        }
    }
)(uListcoming);

export default Listcoming;