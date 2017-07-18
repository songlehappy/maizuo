import React, { Component } from 'react';

import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';

class MyCarousel extends Component {

    state = {
        data: ['sakdjf;lasjd', 'sadfasdfa', 'asdfasdfa'],
        initialHeight: 200,
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }
    render() {
        const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
        return (
            <WingBlank>
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <div className="sub-title">normal</div>
                <Carousel
                    className="my-carousel"
                    autoplay={false}
                    infinite
                    selectedIndex={1}
                    swipeSpeed={35}
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {this.state.data.map(ii => (
                        <a href="http://www.baidu.com" key={ii} style={hProp}>
                            <img
                                src={`https://zos.alipayobjects.com/rmsportal/${ii || 'QcWDkUhvYIVEcvtosxMF'}.png`}
                                alt="icon"
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({
                                        initialHeight: null,
                                    });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>

                <WhiteSpace />
            </WingBlank>
        )
    }
}

export default MyCarousel;