const font = "'Inter', monospace";
const detailColor = '#373737';

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
				stroke: detailColor,
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
