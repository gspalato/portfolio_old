const font = "'IBM Plex Mono', monospace";
const detailColor = '#444';

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
