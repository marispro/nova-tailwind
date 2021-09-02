module.exports = {
  purge: false,
  theme: {
    extend: {},
    boxShadow: {
      xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    },
    margin: {
      5: '1.25rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      32: '8rem',
      40: '10rem',
      48: '12rem',
      56: '14rem',
      64: '16rem',
      '-5': '-1.25rem',
      '-10': '-2.5rem',
      '-12': '-3rem',
      '-16': '-4rem',
      '-20': '-5rem',
      '-24': '-6rem',
      '-32': '-8rem',
      '-40': '-10rem',
      '-48': '-12rem',
      '-56': '-14rem',
      '-64': '-16rem',
    },
    maxWidth: {
      none: 'none',
      '6xl': '110rem',
    },
    width: {
      6: '1.5rem',
      10: '2.5rem',
      24: '6rem',
      32: '8rem',
      64: '16rem',
      '1/2': '50%',
      '2/4': '50%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
    },
    borderRadius: {
      md: '0.375rem',
    },
  },
  plugins: [],
  corePlugins: {
    fontSize: false,
    fontFamily: false,
    fontWeight: false,
    lineHeight: false,
    textAlign: false,
    alignSelf: false,
    float: false,
    fill: false,
    stroke: false,
    borderWidth: false,
    cursor: false,
    maxHeight: false,
    minWidth: false,
  },
  variants: {},
  options: {
    prefix: '',
    important: false,
    separator: ':',
  },
};
