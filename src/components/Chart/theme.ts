const font = "'Inter', monospace";
const detailColor = '#ffffff44';

const BaseChartTheme = {
	grid: {
		line: {
			stroke: detailColor,
		},
	},
	axis: {
		legend: {
			text: {
				fill: detailColor,
				fontSize: 12,
				fontFamily: font,
				fontWeight: 300,
				letterSpacing: '0.025rem',
			},
		},
		ticks: {
			text: {
				fill: detailColor,
				fontSize: 12,
				fontFamily: font,
			},
			line: {
				stroke: detailColor,
				strokeWidth: 1,
			},
		},
		domain: {
			line: {
				stroke: 'transparent',
				strokeWidth: 1,
			},
		},
	},
	crosshair: {
		line: {
			stroke: detailColor,
			strokeWidth: 1,
			strokeOpacity: 0.35,
		},
	},
};

export { BaseChartTheme };
