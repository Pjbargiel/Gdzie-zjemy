import React, {Component} from 'react'
import ScrollButton from 'react-scroll-button'

class ScrollComponent extends Component {
    render() {
        return (
            <ScrollButton
                targetId={'up'}
                behavior={'smooth'}
                buttonBackgroundColor={'#A92725'}
                iconType={'chevron-up'}
                style= {{fontSize: '24px', boxShadow: "1px 1px 4px #8D2220"}}
            />
        );
    }
}

export default ScrollComponent;