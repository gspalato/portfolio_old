import { useQuery } from '@apollo/client';
import { linearGradientDef } from '@nivo/core';
import { useEffect, useState } from 'react';

import Loading from '@app/Loading';

import { Card, CardContent, CardHeader } from '@components/Card';
import { ResponsiveLineChart as Chart } from '@components/Chart';
import Page from '@components/Page';
import { Tab, TabButton, TabContent, TabList, Tabs } from '@components/Tabs';

import { useAuth } from '@lib/auth';
import { GetResumes } from '@lib/graphql/queries';
import { useLayout } from '@lib/layout';

/* Constants */
const getDateAxisSettings = (ticks: string[]) => ({
	tickValues: ticks,
	legend: 'Date',
	legendPosition: 'middle',
	legendOffset: -15,
	//tickPadding: -25,
});

const getDataAxisSettings = (legend: string) => ({
	tickValues: 4,
	legend: legend,
	legendPosition: 'middle',
	legendOffset: 15,
	//tickPadding: -15,
	tickRotation: -90,
	tickSize: 0,
});

const chartAreaDefs = [
	linearGradientDef('gradient', [
		{ offset: 0, color: 'inherit' },
		{ offset: 100, color: 'inherit', opacity: 0.15 },
	]),
];

const Component: React.FC = () => {
	const [chartData, setChartData] = useState<any>([]);

	const [ticks, setTicks] = useState<any>([]);

	const { user } = useAuth();

	const {
		enableDefaultNavbar,
		disableDefaultNavbar,
		enableContentScrolling,
		disableContentScrolling,
	} = useLayout();

	const { loading } = useQuery<GetResumes.ReturnType>(GetResumes.Query, {
		onCompleted: (data) => {
			const resumes = data.resumes;

			console.log('Fetched data from Reality:');
			console.log(resumes);

			const timestampToDateString = (timestamp: number): string => {
				let date = new Date(timestamp * 1000);
				let formatted = date.toLocaleDateString('pt-BR');

				return formatted;
			};

			let firstDate = timestampToDateString(resumes[0].timestamp);
			let lastDate = timestampToDateString(
				resumes[resumes.length - 1].timestamp
			);

			setTicks([firstDate, lastDate]);

			const useChartData = [
				{
					id: 'Total Uses',
					color: '#ddddff',
					data: resumes.map((resume: any) => ({
						x: timestampToDateString(resume.timestamp),
						y: resume.totalUses,
					})),
				},
			];

			const durationChartData = [
				{
					id: 'Total Duration',
					color: '#ff0000',
					data: resumes.map((resume: any) => ({
						x: timestampToDateString(resume.timestamp),
						y: (resume.totalDuration / 1000 / 60).toFixed(2), // in minutes
					})),
				},
			];

			const plasticChartData = [
				{
					id: 'Economized Plastic Waste',
					color: '#590995',
					data: resumes.map((resume: any) => ({
						x: timestampToDateString(resume.timestamp),
						y: (resume.economizedPlastic / 1000).toFixed(2),
					})),
				},
			];

			const waterChartData = [
				{
					id: 'Distributed Water',
					color: '#0066ff',
					data: resumes.map((resume: any) => ({
						x: timestampToDateString(resume.timestamp),
						y: (resume.distributedWater / 1000).toFixed(2),
					})),
				},
			];

			const bottleChartData = [
				{
					id: 'Bottle Quantity Equivalent',
					color: '#03c4a1',
					data: resumes.map((resume: any) => ({
						x: timestampToDateString(resume.timestamp),
						y: Math.round(resume.bottleQuantityEquivalent),
					})),
				},
			];

			setChartData({
				uses: useChartData,
				duration: durationChartData,
				plastic: plasticChartData,
				water: waterChartData,
				bottles: bottleChartData,
			});
		},
	});

	useEffect(() => {
		enableContentScrolling();
		disableDefaultNavbar();

		return () => {
			disableContentScrolling();
			enableDefaultNavbar();
		};
	});

	console.log(chartData);

	if (loading) return <Loading />;

	return (
		<Page className='mx-4 flex flex-col items-center !justify-start pt-8 !font-title md:mx-8'>
			<h1 className='text-gradient mb-8 w-full text-center font-exotic !text-xl font-bold md:!text-4xl'>
				Welcome back, {user.Username}.
			</h1>
			<div className='md:auto-rows-minmax grid w-full flex-1 grid-flow-row auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-1 md:grid-flow-col md:grid-cols-2'>
				<Card className='mb-4 !min-h-[30rem] min-w-full max-w-lg !pb-0 !font-display @container md:col-span-3 md:mb-8'>
					<Tabs defaultTab='Water'>
						<CardHeader separate className='flex-col @2xl:flex-row'>
							<h1 className='text-foreground font-exotic text-2xl font-semibold'>
								UPx Refill Station
							</h1>
							<TabList className='mt-4 shadow-md @2xl:mt-0'>
								<TabButton
									className='min-w-[60px] !px-3 shadow-md'
									text='Uses'
									value='Uses'
								/>
								<TabButton
									className='min-w-[60px] !px-3 shadow-md'
									text='Duration'
									value='Duration'
								/>
								<TabButton
									className='min-w-[60px] !px-3 shadow-md'
									text='Water'
									value='Water'
								/>
								<TabButton
									className='min-w-[60px] !px-3 shadow-md'
									text='Plastic'
									value='Plastic'
								/>
								<TabButton
									className='min-w-[60px] !px-3 shadow-md'
									text='Bottles'
									value='Bottles'
								/>
							</TabList>
						</CardHeader>
						<CardContent className='mt-0 !px-0 pt-8'>
							<TabContent animate={false}>
								<Tab
									className='h-full min-h-full min-w-full'
									value='Uses'
								>
									<Chart
										data={chartData.uses}
										axisLeft={{
											...(getDataAxisSettings(
												'Uses'
											) as any),
											tickValues: [
												0,
												Math.max(
													...chartData.uses[0].data.map(
														(xy: any) => xy.y
													)
												),
											],
										}}
										axisBottom={
											getDateAxisSettings(ticks) as any
										}
										margin={{
											top: 10,
											right: 0,
											bottom: 0,
											left: 0,
										}}
										enableArea
										defs={chartAreaDefs}
										fill={[{ match: '*', id: 'gradient' }]}
									/>
								</Tab>
								<Tab
									className='h-full min-h-full min-w-full'
									value='Duration'
								>
									<Chart
										data={chartData.duration}
										axisLeft={
											getDataAxisSettings(
												'Total Duration (min)'
											) as any
										}
										axisBottom={
											getDateAxisSettings(ticks) as any
										}
										margin={{
											top: 10,
											right: 0,
											bottom: 0,
											left: 0,
										}}
										enableArea
										defs={chartAreaDefs}
										fill={[{ match: '*', id: 'gradient' }]}
									/>
								</Tab>
								<Tab
									className='h-full min-h-full min-w-full'
									value='Water'
								>
									<Chart
										data={chartData.water}
										margin={{
											top: 10,
											right: 0,
											bottom: 0,
											left: 0,
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
								</Tab>
								<Tab
									className='h-full min-h-full min-w-full'
									value='Plastic'
								>
									<Chart
										data={chartData.plastic}
										margin={{
											top: 10,
											right: 0,
											bottom: 0,
											left: 0,
										}}
										axisLeft={
											getDataAxisSettings(
												'Economized Plastic (kg)'
											) as any
										}
										axisBottom={
											getDateAxisSettings(ticks) as any
										}
										enableArea
										defs={chartAreaDefs}
										fill={[{ match: '*', id: 'gradient' }]}
									/>
								</Tab>
								<Tab
									className='h-full min-h-full min-w-full'
									value='Bottles'
								>
									<Chart
										data={chartData.bottles}
										margin={{
											top: 10,
											right: 0,
											bottom: 0,
											left: 0,
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
								</Tab>
							</TabContent>
						</CardContent>
					</Tabs>
				</Card>
			</div>
		</Page>
	);
};

export default Component;
