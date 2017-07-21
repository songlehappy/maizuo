import React, { Component } from 'react';

// ui组件一定要关联一个 容器组件 且用connect 方法
import { connect } from 'react-redux';

class uSubCinema extends Component {
    render() {
        // console.log(this.props.list);
        var data = this.props.data;
        var place_cinema = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i].district.name === this.props.list) {
                place_cinema.push(data[i])
            }
        }
        // console.log(place_cinema);
        return (
            <div style={{display:'flex', flexDirection:'column'}}>
                {
                    place_cinema.map(function (value, index) {
                        return (
                            <div key={index} style={{padding:'0.5rem 1rem', height:'4rem', display:'flex', flexDirection:'column',justifyContent:'space-around', borderBottom:'2px solid #ccc'}}>
                                <div style={{fontSize:'0.65rem', lineHeight:'1rem'}}>
                                    <span style={{marginRight:'0.3rem'}}>{value.name}</span>
                                    <i style={{fontSize:'0.5rem', marginRight:'0.3rem', display:'inline-block', height:'1rem', width:'1rem', border:'1px solid #fc8558', textAlign:'center',borderRadius:'50%',color:'#fc8558'}}>座</i>
                                    <i style={{fontSize:'0.5rem', marginRight:'0.3rem', display:'inline-block', height:'1rem', width:'1rem', border:'1px solid #88aec8', textAlign:'center',borderRadius:'50%',color:'#88aec8'}}>通</i>
                                    <span style={{float:'right', color:'#ccc'}}>&gt;</span>
                                </div>
                                <div style={{fontSize:'0.45rem'}}>
                                    {
                                        value.labels.map(function (item, num) {
                                            var arr=[];
                                            if (item.type === 'SUNDRY') {
                                                
                                                arr.push(<span key={num} style={{display:'inline-block', margin:'0 0.2rem', padding:'0 0.2rem', background:'#88aec8', color:'#fff'}}>可乐爆米花</span>)
                                                
                                            }
                                            if (item.type === 'DISCOUNT') {
                                                
                                                arr.push(<span key={num} style={{display:'inline-block', margin:'0 0.2rem', padding:'0 0.2rem', background:'#fc8558', color:'#fff'}}>{item.name}</span>)
                                                
                                            }
                                            return arr;

                                        })
                                    }
                                </div>
                                <div style={{fontSize:'0.5rem', color:'#999'}}>{value.address}</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    componentDidMount() {
        this.props.getData(this.props.list);
        // console.log(this.props.data)
    }
}

var SubCinema = connect(
    function (state) {
        return {
            data: state.data_cinema,
        }
    },
    function (dispatch) {
        return {
            getData: function (data) {
                // console.log(data)
                // dispatch({
                //     type: 'FILM_AREA',
                //     list: data,
                // })
            }
        }
    }
)(uSubCinema);


export default SubCinema;