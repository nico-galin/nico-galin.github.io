import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

const ScrollDrag = ({ children }) => {
    const [isScrolling, setScrolling] = useState(false);
    const [clientX, setClientX] = useState(0);
    const [clientY, setClientY] = useState(0);
    const [scrollX, setScrollX] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const ref = useRef();

    const onMouseDown = e => {
        setScrolling(true);
        setClientX(e.clientX);
        setClientY(e.clientY);
    };

    const onMouseUp = () => {
        setScrolling(false);
    };

    const onMouseMove = e => {
        if (isScrolling) {
            ref.current.scrollLeft = scrollX + e.clientX - clientX;
            setScrollX(scrollX + e.clientX - clientX);
            setClientX(e.clientX);

            ref.current.scrollUp = scrollY + e.clientY - clientY;
            setScrollY(scrollY + e.clientY - clientY)
            setClientY(e.clientY)
        }
    };

    const { childRef, rootClass } = this.props;
    return (
        <div
            ref={childRef}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            className={rootClass}
            >
            {React.Children.map(children, child => React.Children.only(child))}
        </div>
    );
}

ScrollDrag.defaultProps = {
  ref: { current: {} },
  rootClass: '',
};

ScrollDrag.propTypes = {
  ref: PropTypes.object,
  rootClass: PropTypes.string,
  children: PropTypes.string,
};

export default ScrollDrag;