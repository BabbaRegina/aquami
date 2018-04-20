import * as Color from 'color';
const themeColors = {
  blue: '#3a92ff',
  indigo: '#6610f2',
  purple: '#8a75f2',
  pink: '#e83e8c',
  red: '#eb4c5d',
  orange: '#fd780a',
  yellow: '#ffc411',
  green: '#1cbd35',
  teal: '#26c1b2',
  cyan: '#17a2b8'
};

let colors = { };
for (let c in themeColors) {
    colors[c] = Color(themeColors[c]);
}

export { Color, colors, themeColors };
