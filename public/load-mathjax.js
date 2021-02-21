/*
 *  Copyright (c) 2021-present, J Miguel Farto
 *
 * (Based on examples published in the MathJax docs: https://docs.mathjax.org/)
 *
 * This source code is licensed under the GPL v.3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

window.MathJax = {
    startup: {
        typeset: false,
    },
    loader: {
        load:  [
            'ui/safe',
        ],
    },
    options: {
        enableMenu: true,
        menuOptions: {
            settings: {
                zoom: 'Click',
            },
        },
        safeOptions: {
              allow: {
                  URLs:    'safe',
                  classes: 'safe',
                  cssIDs:  'safe',
                  styles:  'safe',
              },
              safeProtocols: {
                  http: true,
                  https: true,
                  file: true,
                  javascript: false,
                  data: false,
              },
              safeStyles: {
                  color: true,
                  backgroundColor: true,
                  border: true,
                  cursor: true,
                  margin: true,
                  padding: true,
                  textShadow: true,
                  fontFamily: true,
                  fontSize: true,
                  fontStyle: true,
                  fontWeight: true,
                  opacity: true,
                  outline: true
              },
              lengthMax: 3,
              scriptsizemultiplierRange: [.6, 1],
              scriptlevelRange: [-2, 2],
              classPattern: /^mjx-[-a-zA-Z0-9_.]+$/,
              idPattern: /^mjx-[-a-zA-Z0-9_.]+$/,
              dataPattern: /^data-mjx-/,
        },
    },
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        tags: 'ams',
        macros: {
            fres: ['\\fbox{$\\displaystyle#1$}', 1],
            comentario: ['\\hspace{2cm}\\left(\\text{#1}\\right)', 1],
  
            N: '\\mathbb{N}',
            Z: '\\mathbb{Z}',
            Q: '\\mathbb{Q}',
            R: '\\mathbb{R}',
            Rinf: '\\R\\cup\\{-\\infty,\\infty\\}',
            Cc: '\\mathbb{C}',
            K: '\\mathbb{K}',
  
            Frac: ['\\displaystyle\\frac{#1}{#2}', 2],
  
            newfun: ['\\mathop{\\mathrm{#1}}\\nolimits', 1],
            sen: '\\newfun{sen}',
            arcsen: '\\newfun{arcsen}',
            kernel: '\\newfun{Ker}',
  
            clase: ['{\\cal C}^{#1}', 1],
            parcial: ['\\frac{\\partial #1}{\\partial #2}', 2],
            con: ['\\left\\{#1\\left/\\,#2\\right.\\right\\}', 2],
            vas: ['\\left|#1\\right|', 1],
            di: ['\\,\\mathrm{d}#1', 1],
            inte: ['\\int_{#1}^{#2}#3\\di{#4}', 4],
            barrow: ['\\left.#3\\right|_{#1}^{#2}', 3],
            inted: ['\\iint_{#1}#2\\di{#3}\\di{#4}', 4],
            intet: ['\\iiint_{#1}#2\\di{#3}\\di{#4}\\di{#5}', 5],
  
            mat: ['\\mathrm{#1}', 1],
            ve: ['\\left(#1\\right)', 1],
            vn: ['\\boldsymbol{#1}', 1],
            se: ['\\boldsymbol{{\\cal #1}}', 1],
            tln: ['\\boldsymbol{#1}', 1],
            sis: ['[#1]', 1],
            matriz: ['\\left(\\begin{array}{#1}#2\\end{array}\\right)', 2],
            determinante: ['\\left|\\begin{array}{#1}#2\\end{array}\\right|', 2],
            sistema: ['\\left\\{\\begin{array}{#1}#2\\end{array}\\right.', 2],
            polcar: ['P_{#1}(#2)', 2],
            mapopel: ['\\xrightarrow{#1}', 1],
            eqopel: ['\\stackrel{#1}{=}', 1],
        },
    },
};

(function () {
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js';
  script.async = true;
  document.head.appendChild(script);
})();
