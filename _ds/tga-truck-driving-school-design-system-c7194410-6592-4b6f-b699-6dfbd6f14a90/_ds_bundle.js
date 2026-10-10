/* @ds-bundle: {"format":4,"namespace":"TGATruckDrivingSchoolDesignSystem_c71944","components":[{"name":"Badge","sourcePath":"components/badge/Badge.jsx"},{"name":"Button","sourcePath":"components/button/Button.jsx"},{"name":"Kicker","sourcePath":"components/kicker/Kicker.jsx"}],"sourceHashes":{"components/badge/Badge.jsx":"fb21ac11b657","components/button/Button.jsx":"2a66da66b393","components/kicker/Kicker.jsx":"3b037e1ae4d9","ui_kits/forms/AttendanceSheet.jsx":"e6834f00806b","ui_kits/forms/InspectionSheet.jsx":"a143a46e737b","ui_kits/website/Chrome.jsx":"74c48896dc7c","ui_kits/website/Sections.jsx":"354db248579e","ui_kits/website/app.jsx":"bfb0ac368536","ui_kits/website/ui.jsx":"78f20cacc009"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TGATruckDrivingSchoolDesignSystem_c71944 = window.TGATruckDrivingSchoolDesignSystem_c71944 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/badge/Badge.jsx
try { (() => {
const badgeTones = {
  maroon: {
    background: '#5C1A1D',
    color: '#fff',
    border: '1px solid #5C1A1D'
  },
  amber: {
    background: '#E8A22E',
    color: '#3a2a08',
    border: '1px solid #E8A22E'
  },
  green: {
    background: '#E6F0E9',
    color: '#2E7D46',
    border: '1px solid #CFE3D5'
  },
  soft: {
    background: '#F0ECE7',
    color: '#4A4541',
    border: '1px solid #E4DFD9'
  },
  onDark: {
    background: 'rgba(255,255,255,.12)',
    color: '#fff',
    border: '1px solid rgba(255,255,255,.22)'
  }
};
function Badge({
  tone = 'soft',
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 12px',
      borderRadius: 999,
      fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      lineHeight: 1.3,
      ...(badgeTones[tone] || badgeTones.soft)
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badge/Badge.jsx", error: String((e && e.message) || e) }); }

// components/button/Button.jsx
try { (() => {
const buttonVariants = {
  primary: {
    bg: '#C0202A',
    hover: '#9C1820',
    color: '#fff',
    border: '#C0202A'
  },
  maroon: {
    bg: '#5C1A1D',
    hover: '#2A1110',
    color: '#fff',
    border: '#5C1A1D'
  },
  outline: {
    bg: '#fff',
    hover: '#F0ECE7',
    color: '#5C1A1D',
    border: '#5C1A1D'
  },
  ghost: {
    bg: 'transparent',
    hover: '#F0ECE7',
    color: '#5C1A1D',
    border: 'transparent'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  type = 'button',
  onClick,
  children
}) {
  const v = buttonVariants[variant] || buttonVariants.primary;
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const lg = size === 'lg';
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      minHeight: lg ? 52 : 44,
      padding: lg ? '0 28px' : '0 20px',
      fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
      fontWeight: 700,
      fontSize: lg ? 18 : 16,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      background: hover ? v.hover : v.bg,
      color: v.color,
      border: '2px solid ' + v.border,
      borderRadius: 5,
      cursor: 'pointer',
      transform: press ? 'translateY(1px)' : hover ? 'translateY(-1px)' : 'none',
      transition: 'background 170ms cubic-bezier(.2,.7,.2,1), transform 170ms cubic-bezier(.2,.7,.2,1)'
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/button/Button.jsx", error: String((e && e.message) || e) }); }

// components/kicker/Kicker.jsx
try { (() => {
function Kicker({
  onDark = false,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: onDark ? '#E8A22E' : '#C0202A'
    }
  }, children);
}
Object.assign(__ds_scope, { Kicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/kicker/Kicker.jsx", error: String((e && e.message) || e) }); }

// ui_kits/forms/AttendanceSheet.jsx
try { (() => {
/* AttendanceSheet.jsx — TGA branded student Attendance Record (form SS-09.1).
   Recreates the real week-by-week sign-in sheet on-brand. */

function AttendanceSheet() {
  const weeks = ['Week One', 'Week Two', 'Week Three', 'Week Four', 'Week Five'];
  const cols = ['Date', 'Hours', 'Extra Hrs', 'Student Sign.', 'Instructor Sign.', 'P / A'];
  const fees = [{
    h: 'Medical Certificate (DOT) & Drug Screening',
    f1: 'Date of Exam',
    f2: 'Paid by',
    opts: ['TGA', 'Self']
  }, {
    h: "Commercial Learner's Permit (CLP) Fee",
    f1: 'Date Attended',
    f2: 'Method',
    opts: ['Check', 'Zelle', 'Self']
  }, {
    h: 'Hazardous Materials Background Fee',
    f1: 'Date Attended',
    f2: 'Method',
    opts: ['Check', 'Zelle']
  }];
  const Line = ({
    w
  }) => /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: w,
      borderBottom: '1px solid var(--asphalt-400)',
      height: 13
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "page",
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16,
      background: "url('../../assets/tread-motif.png') repeat-x left center/auto 100%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 44px 14px',
      borderBottom: '2px solid var(--tga-oxblood)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/tga-logo.png",
    alt: "TGA",
    style: {
      height: 42
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: '1px solid var(--asphalt-300)',
      paddingLeft: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '.04em',
      fontSize: 11,
      color: 'var(--fg-3)'
    }
  }, "Transportation Guidance & Assistance"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      textTransform: 'uppercase',
      fontSize: 22,
      color: 'var(--tga-oxblood)',
      lineHeight: 1.05
    }
  }, "Attendance Record"))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 13,
      color: 'var(--tga-maroon)',
      background: 'var(--asphalt-100)',
      padding: '5px 10px',
      borderRadius: 4
    }
  }, "SS-09.1")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      padding: '16px 44px',
      background: 'var(--concrete)',
      borderBottom: '1px solid var(--asphalt-200)'
    }
  }, [['Student Name', 2], ['Contact #', 1], ['Schedule', 1]].map(([l, fl]) => /*#__PURE__*/React.createElement("label", {
    key: l,
    style: {
      flex: fl,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      fontSize: 11,
      color: 'var(--asphalt-700)'
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      borderBottom: '1px solid var(--asphalt-400)',
      height: 16
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 44px 0'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: '15%'
    }
  }), cols.map(c => /*#__PURE__*/React.createElement("th", {
    key: c,
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.04em',
      fontSize: 10.5,
      color: 'var(--asphalt-600)',
      textAlign: 'center',
      padding: '0 4px 7px'
    }
  }, c)))), /*#__PURE__*/React.createElement("tbody", null, weeks.map((w, i) => /*#__PURE__*/React.createElement("tr", {
    key: w,
    style: {
      background: i % 2 ? 'var(--concrete)' : '#fff'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 800,
      textTransform: 'uppercase',
      fontSize: 14,
      color: 'var(--tga-maroon)',
      padding: '12px 8px',
      borderTop: '1px solid var(--asphalt-200)'
    }
  }, w), cols.map((c, j) => /*#__PURE__*/React.createElement("td", {
    key: j,
    style: {
      borderTop: '1px solid var(--asphalt-200)',
      borderLeft: '1px solid var(--asphalt-100)',
      padding: '12px 6px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      borderBottom: '1px solid var(--asphalt-300)',
      height: 14
    }
  })))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 44px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, fees.map(fee => /*#__PURE__*/React.createElement("div", {
    key: fee.h,
    style: {
      border: '1px solid var(--asphalt-200)',
      borderRadius: 'var(--r-sm)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--tga-oxblood)',
      color: '#fff',
      fontFamily: 'var(--font-condensed)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      fontSize: 12.5,
      padding: '7px 14px'
    }
  }, fee.h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 24,
      padding: '12px 14px'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 700,
      textTransform: 'uppercase',
      fontSize: 10.5,
      color: 'var(--asphalt-600)'
    }
  }, fee.f1), /*#__PURE__*/React.createElement("span", {
    style: {
      borderBottom: '1px solid var(--asphalt-400)',
      height: 14
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 700,
      textTransform: 'uppercase',
      fontSize: 10.5,
      color: 'var(--asphalt-600)',
      display: 'block',
      marginBottom: 6
    }
  }, fee.f2), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, fee.opts.map(o => /*#__PURE__*/React.createElement("span", {
    key: o,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      border: '1.5px solid var(--asphalt-500)',
      borderRadius: 3,
      display: 'inline-block'
    }
  }), o)))), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 700,
      textTransform: 'uppercase',
      fontSize: 10.5,
      color: 'var(--asphalt-600)'
    }
  }, "Student Signature"), /*#__PURE__*/React.createElement("span", {
    style: {
      borderBottom: '1px solid var(--asphalt-400)',
      height: 14
    }
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: '14px 44px',
      borderTop: '1px solid var(--asphalt-200)',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-mono)',
      fontSize: 11.5,
      color: 'var(--fg-3)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Transportation Guidance & Assistance \xB7 All Rights Reserved"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: 'var(--tga-maroon)'
    }
  }, "SS-09.1")));
}
window.AttendanceSheet = AttendanceSheet;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/forms/AttendanceSheet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/forms/InspectionSheet.jsx
try { (() => {
/* InspectionSheet.jsx — TGA branded pre-trip / external inspection study sheet.
   Recreates a single page of the real "EXTERNAL VEHICLE INSPECTION" guide on-brand. */
const {
  useState: useStateI,
  useEffect: useEffectI,
  useRef: useRefI
} = React;
function InspectionSheet() {
  const sections = [{
    title: 'Engine Area',
    num: '2',
    items: [{
      h: 'Coolant Reservoir',
      pts: ['securely mounted, not cracked, not leaking', 'fluids at proper level between add & full (sight glass)', 'cap not missing and tight', 'hoses clamped — not bubbled, cut, cracked, frayed, or leaking']
    }, {
      h: 'Power Steering Reservoir',
      pts: ['securely mounted, not cracked, not leaking', 'fluids at proper level between add & full', 'hoses clamped, not bubbled, cut, cracked, or leaking']
    }, {
      h: 'Oil Dipstick Line',
      pts: ['securely mounted — not bent, broken, or cracked (BBC)', 'oil level between add & full marks', 'this ensures engine lubrication']
    }, {
      h: 'Fluid Leaks',
      pts: ['no puddles on the ground beneath the vehicle', 'no leaks around / under the engine and transmission']
    }, {
      h: 'Air Hoses / Leaks',
      pts: ['listen for air leaks; lines securely connected', 'fittings connected, not worn or leaking']
    }]
  }];
  const s = sections[0];
  return /*#__PURE__*/React.createElement("div", {
    className: "page",
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16,
      background: "url('../../assets/tread-motif.png') repeat-x left center/auto 100%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 44px 16px',
      borderBottom: '2px solid var(--tga-oxblood)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/tga-logo.png",
    alt: "TGA",
    style: {
      height: 46
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      textTransform: 'uppercase',
      fontSize: 22,
      color: 'var(--tga-oxblood)',
      lineHeight: 1
    }
  }, "External Vehicle Inspection"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.1em',
      fontSize: 12,
      color: 'var(--tga-red)',
      marginTop: 5
    }
  }, "Pre-Trip Study Guide \xB7 Page 2 of 9"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '16px 44px',
      background: 'var(--tga-maroon)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--r-sm)',
      background: 'rgba(255,255,255,.14)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(FormIcon, {
    name: "wrench",
    size: 22,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      textTransform: 'uppercase',
      fontSize: 26,
      color: '#fff',
      letterSpacing: '.01em'
    }
  }, s.title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      fontFamily: 'var(--font-condensed)',
      fontWeight: 800,
      fontSize: 40,
      color: 'var(--tga-amber)',
      lineHeight: 1
    }
  }, s.num)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '26px 44px 10px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '22px 34px',
      flex: 1
    }
  }, s.items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.h,
    style: {
      breakInside: 'avoid'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.04em',
      fontSize: 15,
      color: 'var(--tga-oxblood)',
      borderBottom: '1px solid var(--asphalt-200)',
      paddingBottom: 5,
      marginBottom: 9
    }
  }, it.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, it.pts.map((p, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 9,
      fontSize: 13,
      lineHeight: 1.4,
      color: 'var(--asphalt-800)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 1,
      color: 'var(--tga-red)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(FormIcon, {
    name: "square-check",
    size: 15,
    color: "var(--tga-red)"
  })), /*#__PURE__*/React.createElement("span", null, p)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '2px dashed var(--asphalt-300)',
      borderRadius: 'var(--r-md)',
      padding: '16px',
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      background: 'var(--concrete)',
      alignSelf: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 62,
      height: 62,
      background: '#fff',
      border: '1px solid var(--asphalt-300)',
      borderRadius: 6,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(FormIcon, {
    name: "qr-code",
    size: 40,
    color: "var(--tga-oxblood)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.08em',
      fontSize: 13,
      color: 'var(--tga-red)'
    }
  }, "Scan to Watch"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--fg-2)',
      marginTop: 2
    }
  }, "Engine-area walkthrough video")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: '12px 44px',
      borderTop: '1px solid var(--asphalt-200)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 11.5,
      color: 'var(--fg-3)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Transportation Guidance & Assistance \xB7 All Rights Reserved"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: 'var(--tga-maroon)'
    }
  }, "www.truckdriversed.com")));
}
window.InspectionSheet = InspectionSheet;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/forms/InspectionSheet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
/* Chrome.jsx — TopBar, Header, Footer, EnrollModal */
const NAV = [{
  label: 'Programs',
  id: 'programs'
}, {
  label: 'Why TGA',
  id: 'why'
}, {
  label: 'How It Works',
  id: 'how'
}, {
  label: 'Locations',
  id: 'locations'
}, {
  label: 'Careers',
  id: 'careers'
}];
function TopBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--tga-oxblood)',
      color: 'var(--fg-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 38,
      fontSize: 13,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      fontFamily: 'var(--font-condensed)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '.06em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 14,
    color: "var(--tga-amber)"
  }), " State-Licensed \xB7 Since 1991"), /*#__PURE__*/React.createElement("span", {
    className: "hide-sm",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      opacity: .8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "badge-check",
    size: 14,
    color: "var(--tga-amber)"
  }), " ELDT Approved")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      fontFamily: 'var(--font-condensed)',
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "hide-sm",
    style: {
      opacity: .8,
      textTransform: 'uppercase',
      letterSpacing: '.06em'
    }
  }, "Se habla espa\xF1ol"), /*#__PURE__*/React.createElement("a", {
    href: "tel:3237971841",
    style: {
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 14,
    color: "var(--tga-amber)"
  }), " 323-797-1841"))));
}
function Header({
  onEnroll
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', f);
    return () => window.removeEventListener('scroll', f);
  }, []);
  const go = id => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({
      top: el.offsetTop - 64,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: '#fff',
      borderBottom: '1px solid var(--asphalt-200)',
      boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
      transition: 'box-shadow .2s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 74
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    onClick: e => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/tga-logo.png",
    alt: "TGA Truck Driving School",
    style: {
      height: 44
    }
  })), /*#__PURE__*/React.createElement("nav", {
    className: "hide-md",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 30
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    href: '#' + n.id,
    onClick: e => {
      e.preventDefault();
      go(n.id);
    },
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.04em',
      fontSize: 15.5,
      color: 'var(--fg-1)'
    }
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "hide-sm",
    href: "tel:3237971841",
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 700,
      color: 'var(--tga-maroon)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 16,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16
  }), " 323-797-1841"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onEnroll
  }, "Enroll Now"), /*#__PURE__*/React.createElement("button", {
    className: "show-md",
    onClick: () => setOpen(o => !o),
    "aria-label": "Menu",
    style: {
      background: 'none',
      border: 'none',
      display: 'none',
      color: 'var(--fg-1)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: open ? 'x' : 'menu',
    size: 26
  })))), open && /*#__PURE__*/React.createElement("div", {
    className: "show-md",
    style: {
      borderTop: '1px solid var(--asphalt-200)',
      padding: '8px 0 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    href: '#' + n.id,
    onClick: e => {
      e.preventDefault();
      go(n.id);
    },
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.04em',
      fontSize: 17,
      color: 'var(--fg-1)',
      padding: '12px 0',
      borderBottom: '1px solid var(--asphalt-100)'
    }
  }, n.label)), /*#__PURE__*/React.createElement("a", {
    href: "tel:3237971841",
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 700,
      color: 'var(--tga-maroon)',
      padding: '14px 0',
      fontSize: 18
    }
  }, "Call 323-797-1841"))));
}
function Footer() {
  const cols = [{
    h: 'Programs',
    items: ['CDL Class A', 'CDL Class B', 'Permit Prep', 'Endorsements']
  }, {
    h: 'Campuses',
    items: ['Torrance', 'Downey', 'Lancaster', 'El Monte']
  }, {
    h: 'School',
    items: ['Why TGA', 'Financial Aid', 'Job Placement', 'Reviews']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--tga-oxblood)',
      color: 'var(--fg-on-dark-muted)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tread-rule",
    style: {
      opacity: .55
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      padding: '56px 24px 30px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(3, 1fr)',
      gap: 36
    },
    className: "footer-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/tga-logo-white.png",
    alt: "TGA",
    style: {
      height: 46,
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.6,
      maxWidth: 290,
      color: 'var(--fg-on-dark-muted)'
    }
  }, "Transportation Guidance & Assistance Truck Driving School. Family-owned, training Southern California drivers since 1991."), /*#__PURE__*/React.createElement("a", {
    href: "tel:3237971841",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      color: '#fff',
      fontFamily: 'var(--font-condensed)',
      fontWeight: 700,
      fontSize: 20,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 18,
    color: "var(--tga-amber)"
  }), " 323-797-1841")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.1em',
      fontSize: 13,
      color: '#fff',
      marginBottom: 14
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--fg-on-dark-muted)',
      fontSize: 14.5
    }
  }, i))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,.12)',
      marginTop: 40,
      paddingTop: 20,
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 10,
      fontSize: 12.5
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Transportation Guidance & Assistance. All rights reserved \xB7 CA #432825"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--fg-on-dark-muted)'
    }
  }, "Proud partner of El Camino College")))));
}
function EnrollModal({
  open,
  onClose
}) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    name: '',
    phone: '',
    campus: 'Torrance — South Bay',
    program: 'CDL Class A · 160-hr'
  });
  useEffect(() => {
    if (open) {
      setStep(0);
    }
  }, [open]);
  if (!open) return null;
  const set = (k, v) => setData(d => ({
    ...d,
    [k]: v
  }));
  const steps = ['Your Info', 'Pick a Campus', 'Choose Program', 'Done'];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(27,17,16,.6)',
      backdropFilter: 'blur(3px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: '#fff',
      borderRadius: 'var(--r-lg)',
      width: 'min(460px, 100%)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tread-rule"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 26px 26px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Start Your CDL \xB7 Step ", Math.min(step + 1, 3), " of 3"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--asphalt-500)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 20
  }))), step < 3 && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '6px 0 18px'
    }
  }, steps[step]), step === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Full Name"
  }, /*#__PURE__*/React.createElement("input", {
    className: "fld",
    value: data.name,
    onChange: e => set('name', e.target.value),
    placeholder: "Jordan Rivera"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Phone"
  }, /*#__PURE__*/React.createElement("input", {
    className: "fld",
    value: data.phone,
    onChange: e => set('phone', e.target.value),
    placeholder: "323-555-0100"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => setStep(1)
  }, "Continue ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 18
  }))), step === 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, ['Torrance — South Bay', 'Downey — Gateway Cities', 'Lancaster — Antelope Valley', 'El Monte — San Gabriel Valley'].map(c => /*#__PURE__*/React.createElement(ChoiceRow, {
    key: c,
    active: data.campus === c,
    onClick: () => set('campus', c),
    icon: "map-pin"
  }, c)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setStep(0)
  }, "Back"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setStep(2),
    className: "grow"
  }, "Continue"))), step === 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, ['CDL Class A · 160-hr', 'CDL Class B', 'Permit Prep (CLP)', 'Endorsements · HazMat / Tank'].map(c => /*#__PURE__*/React.createElement(ChoiceRow, {
    key: c,
    active: data.program === c,
    onClick: () => set('program', c),
    icon: "truck"
  }, c)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setStep(1)
  }, "Back"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setStep(3),
    className: "grow"
  }, "Submit"))), step === 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '14px 0 6px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 62,
      height: 62,
      borderRadius: '50%',
      background: '#E6F0E9',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 16px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 32,
    color: "#2E7D46",
    strokeWidth: 2.5
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 8px'
    }
  }, "You're on the road!"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 auto 18px',
      color: 'var(--fg-2)',
      fontSize: 15,
      maxWidth: 320
    }
  }, "Thanks", data.name ? ', ' + data.name.split(' ')[0] : '', ". An enrollment advisor from our ", /*#__PURE__*/React.createElement("strong", null, data.campus.split(' — ')[0]), " campus will call you about the ", /*#__PURE__*/React.createElement("strong", null, data.program.split(' · ')[0]), " program."), /*#__PURE__*/React.createElement(Button, {
    variant: "maroon",
    size: "lg",
    onClick: onClose
  }, "Close")))));
}
function Field({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      fontSize: 12,
      color: 'var(--asphalt-700)',
      display: 'block',
      marginBottom: 6
    }
  }, label), children);
}
function ChoiceRow({
  active,
  onClick,
  icon,
  children
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      width: '100%',
      textAlign: 'left',
      padding: '13px 15px',
      borderRadius: 'var(--r-sm)',
      cursor: 'pointer',
      border: '2px solid ' + (active ? 'var(--tga-maroon)' : 'var(--asphalt-200)'),
      background: active ? 'rgba(92,26,29,.05)' : '#fff',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 500,
      color: 'var(--fg-1)',
      transition: 'all var(--dur) var(--ease)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18,
    color: active ? 'var(--tga-maroon)' : 'var(--asphalt-500)'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, children), active && /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18,
    color: "var(--tga-maroon)"
  }));
}
Object.assign(window, {
  TopBar,
  Header,
  Footer,
  EnrollModal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
/* Sections.jsx — page content blocks */

function Hero({
  onEnroll
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: 'relative',
      background: 'var(--tga-oxblood)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/truck-el-camino.jpg",
    alt: "TGA training truck",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: '60% center',
      opacity: .92
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg, rgba(27,17,16,.93) 0%, rgba(27,17,16,.80) 42%, rgba(27,17,16,.30) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      position: 'relative',
      padding: '92px 24px 100px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Kicker, null, "California CDL Training \xB7 Est. 1991"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      margin: '18px 0 0',
      fontSize: 'clamp(40px, 6vw, 70px)'
    }
  }, "Start Your ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--tga-amber)'
    }
  }, "Truck Driving"), " Career"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--fg-on-dark)',
      fontSize: 20,
      lineHeight: 1.5,
      margin: '20px 0 0',
      maxWidth: 520
    }
  }, "Real training. Real trucks. Real results. Get your Class A CDL with expert instructors, modern equipment, and a 1:1 ratio \u2014 then drive into a high-demand career."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap',
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onEnroll
  }, "Enroll Now ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 18
  })), /*#__PURE__*/React.createElement("a", {
    href: "tel:3237971841"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost-light",
    size: "lg"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 17
  }), " 323-797-1841"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "onDark",
    icon: "badge-check"
  }, "ELDT Approved"), /*#__PURE__*/React.createElement(Badge, {
    tone: "onDark",
    icon: "shield-check"
  }, "State Licensed"), /*#__PURE__*/React.createElement(Badge, {
    tone: "onDark",
    icon: "briefcase"
  }, "Job Placement"), /*#__PURE__*/React.createElement(Badge, {
    tone: "onDark",
    icon: "dollar-sign"
  }, "Financial Aid"))))));
}
function TrustStats() {
  const stats = [{
    n: '1991',
    l: 'Family-owned since'
  }, {
    n: '160',
    u: 'hr',
    l: 'ELDT CDL-A program'
  }, {
    n: '1:1',
    l: 'Student-to-instructor'
  }, {
    n: '4',
    l: 'SoCal campuses'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--tga-maroon)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap stats-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 0
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '30px 18px',
      textAlign: 'center',
      borderLeft: i ? '1px solid rgba(255,255,255,.14)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 800,
      fontSize: 'clamp(36px,4.4vw,52px)',
      lineHeight: .9,
      color: '#fff'
    }
  }, s.n, s.u && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '.45em',
      color: 'var(--tga-amber)'
    }
  }, s.u)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '.07em',
      fontSize: 12.5,
      color: 'var(--fg-on-dark-muted)',
      marginTop: 8
    }
  }, s.l)))));
}
function Programs({
  onEnroll
}) {
  const progs = [{
    tag: 'Most Popular',
    icon: 'truck',
    name: 'CDL Class A',
    desc: 'Our flagship 160-hour ELDT program. Classroom, range, and behind-the-wheel on modern automatic semis.',
    points: ['Permit prep & ELDT', 'Pre-trip + backing', 'Real road training'],
    featured: true
  }, {
    icon: 'route',
    name: 'CDL Class B',
    desc: 'Straight-truck and bus training for local routes, delivery, and municipal driving careers.',
    points: ['Air brakes', 'Vehicle inspection', 'Skills test prep']
  }, {
    icon: 'graduation-cap',
    name: 'Permit & Endorsements',
    desc: 'CLP permit prep plus HazMat, Tank, and Doubles/Triples endorsements to grow your earning power.',
    points: ['Written exam prep', 'HazMat / Tank', 'Doubles / Triples']
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "programs",
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Programs"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14
    }
  }, "Pick the road that fits you"), /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: {
      marginTop: 12
    }
  }, "State-licensed, ELDT-approved training built around real trucks and one-on-one coaching."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 22,
      marginTop: 40
    },
    className: "prog-grid"
  }, progs.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: p.name,
    delay: i * 90
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--asphalt-200)',
      borderRadius: 'var(--r-md)',
      overflow: 'hidden',
      boxShadow: p.featured ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      outline: p.featured ? '2px solid var(--tga-maroon)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 5,
      background: p.featured ? "url('../../assets/tread-motif.png') repeat-x center/auto 100%" : 'var(--asphalt-200)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '26px 24px 28px',
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 50,
      height: 50,
      borderRadius: 'var(--r-sm)',
      background: 'var(--asphalt-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 26,
    color: "var(--tga-maroon)"
  })), p.tag && /*#__PURE__*/React.createElement(Badge, {
    tone: "amber"
  }, p.tag)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 8px'
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--fg-2)',
      fontSize: 15,
      lineHeight: 1.5
    }
  }, p.desc), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '18px 0 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, p.points.map(pt => /*#__PURE__*/React.createElement("li", {
    key: pt,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      fontSize: 14.5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    color: "var(--tga-red)",
    strokeWidth: 2.5
  }), " ", pt))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: p.featured ? 'primary' : 'outline',
    onClick: onEnroll,
    className: "grow"
  }, "Get Started")))))))));
}
function Why() {
  const feats = [{
    icon: 'truck',
    h: 'Real Trucks, Real Roads',
    d: 'Train on modern automatic Volvo semis — many on clean CNG — not simulators.'
  }, {
    icon: 'users',
    h: '1:1 Coaching',
    d: 'A true one-to-one student-to-instructor ratio so you get real seat time.'
  }, {
    icon: 'shield-check',
    h: 'State Licensed & ELDT',
    d: 'Fully licensed by California and FMCSA-approved for entry-level driver training.'
  }, {
    icon: 'briefcase',
    h: 'Job Placement',
    d: 'We work with leading carriers to help graduates land their first driving job.'
  }, {
    icon: 'dollar-sign',
    h: 'Financial Aid',
    d: 'Workforce funding and financial aid options to make training affordable.'
  }, {
    icon: 'calendar',
    h: 'Flexible Scheduling',
    d: 'Morning and afternoon classes across four campuses, close to home.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "why",
    className: "section",
    style: {
      background: 'var(--concrete)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 50,
      alignItems: 'center'
    },
    className: "why-grid"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Kicker, null, "Why TGA"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14
    }
  }, "A family school that takes your career personally"), /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: {
      marginTop: 14
    }
  }, "Since 1991 we've trained thousands of Southern California drivers. We keep classes hands-on, instructors experienced, and the path to your CDL clear."), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--r-md)',
      overflow: 'hidden',
      marginTop: 26,
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/team-hero.jpg",
    alt: "TGA instructors and staff",
    style: {
      width: '100%',
      display: 'block'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    },
    className: "feat-grid"
  }, feats.map((f, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: f.h,
    delay: i * 70
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--asphalt-200)',
      borderRadius: 'var(--r-md)',
      padding: '20px 18px',
      height: '100%',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 'var(--r-sm)',
      background: 'var(--asphalt-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 13
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: f.icon,
    size: 22,
    color: "var(--tga-maroon)"
  })), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 5px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 17,
      textTransform: 'none',
      letterSpacing: 0
    }
  }, f.h), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13.5,
      color: 'var(--fg-2)',
      lineHeight: 1.5
    }
  }, f.d))))))));
}
function HowItWorks() {
  const steps = [{
    n: '01',
    h: 'Get Your Permit',
    d: 'Classroom permit prep gets you ready to pass the written exams and earn your CLP.'
  }, {
    n: '02',
    h: 'Train the Range',
    d: 'Master pre-trip inspection, straight-line and offset backing, and the alley dock.'
  }, {
    n: '03',
    h: 'Hit the Road',
    d: 'Real behind-the-wheel driving in traffic, on highways, and through real conditions.'
  }, {
    n: '04',
    h: 'Pass & Get Hired',
    d: 'Take your CDL skills test, then lean on our job-placement network to start driving.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "how",
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "How It Works"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14
    }
  }, "Four steps to your CDL"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 18,
      marginTop: 38
    },
    className: "steps-grid"
  }, steps.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: s.n,
    delay: i * 80
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      paddingTop: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 4,
      background: "url('../../assets/tread-motif.png') repeat-x left center/auto 100%",
      opacity: i === 0 ? 1 : .4
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 800,
      fontSize: 46,
      color: 'var(--tga-maroon)',
      lineHeight: 1
    }
  }, s.n), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '8px 0 6px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 19,
      textTransform: 'none',
      letterSpacing: 0
    }
  }, s.h), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14.5,
      color: 'var(--fg-2)',
      lineHeight: 1.5
    }
  }, s.d)))))));
}
function Locations() {
  const locs = [{
    city: 'Torrance',
    region: 'South Bay & Harbor Gateway',
    note: 'CNG Volvo fleet · paved lit yard'
  }, {
    city: 'Downey',
    region: 'Gateway Cities',
    note: 'Classroom · yard · road'
  }, {
    city: 'Lancaster',
    region: 'Antelope Valley',
    note: 'Serving Palmdale & Quartz Hill'
  }, {
    city: 'El Monte',
    region: 'San Gabriel Valley',
    note: 'Enrollment center in Montebello'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "locations",
    className: "section",
    style: {
      background: 'var(--concrete)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Locations"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14
    }
  }, "Train locally. Drive professionally."), /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: {
      marginTop: 12
    }
  }, "Four campuses across Southern California, each with modern equipment and experienced instructors."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 18,
      marginTop: 38
    },
    className: "loc-grid"
  }, locs.map((l, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: l.city,
    delay: i * 70
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--asphalt-200)',
      borderRadius: 'var(--r-md)',
      padding: '22px 20px',
      boxShadow: 'var(--shadow-sm)',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 22,
    color: "var(--tga-red)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '12px 0 3px',
      fontSize: 22
    }
  }, l.city), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      fontSize: 12.5,
      color: 'var(--tga-maroon)'
    }
  }, l.region), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      fontSize: 13.5,
      color: 'var(--fg-2)'
    }
  }, l.note)))))));
}
function Careers() {
  const partners = ['Werner Enterprises', "America's Job Center", 'SASSFA', 'WorkSource California', 'El Camino College'];
  return /*#__PURE__*/React.createElement("section", {
    id: "careers",
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr 1fr',
      gap: 50,
      alignItems: 'center'
    },
    className: "why-grid"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--r-md)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/grad-werner.jpg",
    alt: "TGA graduate with carrier partner",
    style: {
      width: '100%',
      display: 'block'
    }
  }))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement(Kicker, null, "Careers & Placement"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14
    }
  }, "From the classroom to the cab"), /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: {
      marginTop: 14
    }
  }, "We host carrier hiring events and partner with workforce programs so graduates can move straight from training into a paying driving job."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      margin: '22px 0'
    }
  }, [['handshake', 'On-campus carrier hiring events'], ['dollar-sign', 'Workforce funding & financial aid'], ['badge-check', 'Resume & job-readiness support']].map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 'var(--r-sm)',
      background: 'var(--asphalt-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 19,
    color: "var(--tga-maroon)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.1em',
      fontSize: 12,
      color: 'var(--fg-3)',
      marginBottom: 12
    }
  }, "Hiring & workforce partners"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px 22px'
    }
  }, partners.map(p => /*#__PURE__*/React.createElement("span", {
    key: p,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 17,
      color: 'var(--asphalt-600)'
    }
  }, p)))))));
}
function CTABand({
  onEnroll
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--tga-oxblood)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tread-rule",
    style: {
      opacity: .5
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      padding: '64px 24px',
      position: 'relative',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      fontSize: 'clamp(30px,4vw,48px)'
    }
  }, "Train Smarter. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--tga-amber)'
    }
  }, "Drive Sooner.")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--fg-on-dark)',
      fontSize: 19,
      maxWidth: 560,
      margin: '14px auto 28px'
    }
  }, "Your new career on the road starts with one call. Talk to an enrollment advisor today."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onEnroll
  }, "Enroll Now ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 18
  })), /*#__PURE__*/React.createElement("a", {
    href: "tel:3237971841"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost-light",
    size: "lg"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 17
  }), " 323-797-1841"))))));
}
Object.assign(window, {
  Hero,
  TrustStats,
  Programs,
  Why,
  HowItWorks,
  Locations,
  Careers,
  CTABand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
/* app.jsx — compose the TGA marketing site */
function App() {
  const [enroll, setEnroll] = useState(false);
  const open = () => setEnroll(true);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopBar, null), /*#__PURE__*/React.createElement(Header, {
    onEnroll: open
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    onEnroll: open
  }), /*#__PURE__*/React.createElement(TrustStats, null), /*#__PURE__*/React.createElement(Programs, {
    onEnroll: open
  }), /*#__PURE__*/React.createElement(Why, null), /*#__PURE__*/React.createElement(HowItWorks, null), /*#__PURE__*/React.createElement(Locations, null), /*#__PURE__*/React.createElement(Careers, null), /*#__PURE__*/React.createElement(CTABand, {
    onEnroll: open
  })), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(EnrollModal, {
    open: enroll,
    onClose: () => setEnroll(false)
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ui.jsx
try { (() => {
/* ui.jsx — shared primitives for the TGA website kit */
const {
  useState,
  useEffect,
  useRef
} = React;

// Lucide icon as React component
function Icon({
  name,
  size = 18,
  color,
  strokeWidth = 2,
  style
}) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          stroke: color || 'currentColor',
          'stroke-width': strokeWidth
        },
        nameAttr: 'data-lucide'
      });
    }
  }, [name, size, color, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      lineHeight: 0,
      ...style
    }
  });
}
function Button({
  variant = 'primary',
  size,
  children,
  onClick,
  type,
  className = ''
}) {
  const cls = `btn btn-${variant} ${size === 'lg' ? 'btn-lg' : ''} ${className}`;
  return /*#__PURE__*/React.createElement("button", {
    type: type || 'button',
    className: cls,
    onClick: onClick
  }, children);
}
function Kicker({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "kicker"
  }, children);
}
function Badge({
  tone = 'soft',
  icon,
  children
}) {
  const tones = {
    maroon: {
      background: 'var(--tga-maroon)',
      color: '#fff'
    },
    amber: {
      background: 'var(--tga-amber)',
      color: '#3a2a08'
    },
    green: {
      background: '#E6F0E9',
      color: '#2E7D46'
    },
    soft: {
      background: 'var(--asphalt-100)',
      color: 'var(--asphalt-700)',
      border: '1px solid var(--asphalt-200)'
    },
    onDark: {
      background: 'rgba(255,255,255,.12)',
      color: '#fff',
      border: '1px solid rgba(255,255,255,.22)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    className: "badge",
    style: tones[tone]
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 14
  }), children);
}

// Scroll reveal wrapper
function Reveal({
  children,
  delay = 0,
  className = '',
  style
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(ents => {
      ents.forEach(e => {
        if (e.isIntersecting) {
          setTimeout(() => setShown(true), delay);
          io.unobserve(el);
        }
      });
    }, {
      threshold: 0.12
    });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: `reveal ${shown ? 'in' : ''} ${className}`,
    style: style
  }, children);
}
Object.assign(window, {
  Icon,
  Button,
  Kicker,
  Badge,
  Reveal,
  useState,
  useEffect,
  useRef
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ui.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Kicker = __ds_scope.Kicker;

})();
