import React, { Component } from 'react';

import { Carousel, WingBlank } from 'antd-mobile';
import { connect } from 'react-redux';
import $ from 'jquery';
class uMyCarousel extends Component {



    render() {
        // const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
        return (
            <WingBlank>
                <Carousel
                    className="my-carousel"
                    autoplay={true}
                    infinite
                    selectedIndex={2}
                    swipeSpeed={100}
                >
                    {this.props.data.map(ii => (

                        <a href="http://www.baidu.com" key={ii} >

                            <img
                                style={{ width: '100%', height: '100%' }}
                                src={ii.imageUrl}
                                alt="icon"

                            />
                        </a>
                    ))}
                </Carousel>
            </WingBlank>
        )
    }

    componentDidMount() {
        this.props.getData();
    }
}

var MyCarousel = connect(
    function (state) {
        return {
            data: state.data_carousel,
        }
    },
    function (dispactch) {
        return {
            getData: function () {
                dispactch({
                    type: 'DATA_START'
                })


                $.get('http://localhost:8080/lunbo', function (res) {
                    var list = res.data.billboards;
                    dispactch({
                        type: 'DATA_END',
                        data: list
                    })
                })

            }
        }
    }
)(uMyCarousel);

export default MyCarousel;