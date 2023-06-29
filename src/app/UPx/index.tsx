import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { AnimatePresence, motion } from 'framer-motion';
import { linearGradientDef } from '@nivo/core';

import { ResponsiveLineChart as Chart } from '@/components/Chart';
import Page from '@/components/Page';

import classes from '@/lib/classes';
import { GetResumes } from '@/lib/graphql/queries';

import Styles from './upx.module.sass';

import { Resume } from '@/types/Resume';

/* Constants */
const getDateAxisSettings = (ticks: string[]) => ({
	tickValues: ticks,
	legend: 'Date',
	legendPosition: 'middle',
	legendOffset: +40,
});

const getDataAxisSettings = (legend: string, offset?: number) => ({
	tickValues: 4,
	legend: legend,
	legendPosition: 'middle',
	legendOffset: offset ?? -50,
});

const chartAreaDefs = [
	linearGradientDef('gradient', [
		{ offset: 0, color: 'inherit' },
		{ offset: 100, color: 'inherit', opacity: 0.1 },
	]),
];

const Component: React.FC = () => {
	const [durationChartData, setDurationChartData] = useState<any>([]);
	const [plasticChartData, setPlasticChartData] = useState<any>([]);
	const [waterChartData, setWaterChartData] = useState<any>([]);
	const [bottleChartData, setBottleChartData] = useState<any>([]);

	const [ticks, setTicks] = useState<any>([]);

	console.log('Rendered UPx page.');

	const { loading, error } = useQuery<GetResumes.ReturnType>(
		GetResumes.Query,
		{
			onCompleted: (data) => {
				const resumes = data.resumes;

				console.log('Fetched data from Reality:');
				console.log(resumes);

				const timestampToDateString = (timestamp: number): string => {
					let date = new Date(timestamp * 1000);
					let formatted = date.toLocaleDateString('pt-BR');
	
					return formatted;
				}

				let firstDate = timestampToDateString(resumes[0].timestamp);
				let lastDate = timestampToDateString(resumes[resumes.length - 1].timestamp);

				setTicks([firstDate, lastDate]);

				const durationChartData = [
					{
						id: 'Total Duration',
						color: '#ddddff',
						data: resumes.map((resume) => ({
							x: timestampToDateString(resume.timestamp),
							y: (resume.totalDuration / 1000 / 60).toFixed(2), // in minutes
						})),
					},
				];

				const plasticChartData = [
					{
						id: 'Economized Plastic Waste',
						color: '#590995',
						data: resumes.map((resume) => ({
							x: timestampToDateString(resume.timestamp),
							y: (resume.economizedPlastic / 1000).toFixed(2),
						})),
					},
				];

				const waterChartData = [
					{
						id: 'Distributed Water',
						color: '#0066ff',
						data: resumes.map((resume) => ({
							x: timestampToDateString(resume.timestamp),
							y: (resume.distributedWater / 1000).toFixed(2),
						})),
					},
				];

				const bottleChartData = [
					{
						id: 'Bottle Quantity Equivalent',
						color: '#03c4a1',
						data: resumes.map((resume) => ({
							x: timestampToDateString(resume.timestamp),
							y: Math.round(resume.bottleQuantityEquivalent),
						})),
					},
				];

				setDurationChartData(durationChartData);
				setPlasticChartData(plasticChartData);
				setWaterChartData(waterChartData);
				setBottleChartData(bottleChartData);
			},
		}
	);

	if (loading)
		return (
			<Page>
				<section className={Styles.loading}>
					<h1 style={{ fontFamily: 'Space Grotesk' }}>Loading...</h1>
				</section>
			</Page>
		);
	else if (error)
		return (
			<Page>
				<section className={Styles.loading}>
					<h1 style={{ fontFamily: 'Space Grotesk' }}>
						Error while fetching API.
					</h1>
				</section>
			</Page>
		);
	else
		return (
			<Page className={Styles.page}>
				<section className={Styles.boxes}>
					<div className={Styles.chartGrid}>
						<AnimatePresence>
							{durationChartData.length > 0 && (
								<motion.div
									className={Styles.box}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
								>
									<h1 className={Styles.title}>
										Total Duration
									</h1>
									<Chart
										className={classes(
											Styles.chartWrapper,
											Styles.gridDouble
										)}
										data={durationChartData}
										axisLeft={
											getDataAxisSettings(
												'Total Duration (min)',
												-50
											) as any
										}
										axisBottom={
											getDateAxisSettings(ticks) as any
										}
										margin={{
											top: 50,
											bottom: 50,
											left: 60,
											right: 50,
										}}
										enableArea
										defs={chartAreaDefs}
										fill={[{ match: '*', id: 'gradient' }]}
									/>
								</motion.div>
							)}
							{plasticChartData.length > 0 && (
								<motion.div
									className={Styles.box}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
								>
									<h1 className={Styles.title}>
										Economized Plastic
									</h1>
									<Chart
										className={Styles.chartWrapper}
										data={plasticChartData}
										margin={{
											top: 50,
											right: 50,
											bottom: 50,
											left: 70,
										}}
										axisLeft={
											getDataAxisSettings(
												'Economized Plastic (kg)',
												-60
											) as any
										}
										axisBottom={
											getDateAxisSettings(ticks) as any
										}
										enableArea
										defs={chartAreaDefs}
										fill={[{ match: '*', id: 'gradient' }]}
									/>
								</motion.div>
							)}
							{waterChartData.length > 0 && (
								<motion.div
									className={Styles.box}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
								>
									<h1 className={Styles.title}>
										Distributed Water
									</h1>
									<Chart
										data={waterChartData}
										margin={{
											top: 50,
											right: 50,
											bottom: 50,
											left: 60,
										}}
										axisLeft={
											getDataAxisSettings(
												'Distributed Water (L)'
											) as any
										}
										axisBottom={
											getDateAxisSettings(ticks) as any
										}
										enableArea
										defs={chartAreaDefs}
										fill={[{ match: '*', id: 'gradient' }]}
									/>
								</motion.div>
							)}
							{bottleChartData.length > 0 && (
								<motion.div
									className={Styles.box}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
								>
									<h1 className={Styles.title}>
										Bottle Quantity Equivalent
									</h1>
									<Chart
										data={bottleChartData}
										margin={{
											top: 50,
											right: 50,
											bottom: 50,
											left: 60,
										}}
										axisLeft={
											getDataAxisSettings(
												'Bottles'
											) as any
										}
										axisBottom={
											getDateAxisSettings(ticks) as any
										}
										enableArea
										defs={chartAreaDefs}
										fill={[{ match: '*', id: 'gradient' }]}
									/>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</section>
			</Page>
		);
};

export default Component;
