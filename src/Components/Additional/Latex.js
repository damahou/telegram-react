/*
 *  Copyright (c) 2021-present, J Miguel Farto
 *
 * This source code is licensed under the GPL v.3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useRef, useLayoutEffect } from 'react';

const MathJax = window.MathJax;

const clearElementMath = (elements) => {
    MathJax.typesetClear(elements);
}

function Latex(props) {
    const node = useRef();
    const text = props.children;

    useLayoutEffect(() => {
        const element = [node.current];

        MathJax.typeset(element);

        return () => {
            MathJax.typesetClear(element);
        }
    },
    [text]);

    return (
        <span ref={node} class='latex'>
            {text}
        </span>
    );}

export default Latex;
