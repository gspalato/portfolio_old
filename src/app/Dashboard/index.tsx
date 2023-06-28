import { useQuery } from '@apollo/client';
import { linearGradientDef } from '@nivo/core';
import { useEffect, useState } from 'react';

import Page from '@/components/Page';
import { Tab, Tabs, TabButton, TabContent, TabList } from '@/components/Tabs';

import { Card, CardContent, CardHeader } from '@/components/Card';
import { ResponsiveLineChart as Chart } from '@/components/Chart';

import { useAuth } from '@/lib/auth';
import { GET_RESUMES } from '@/lib/graphql/queries';
import { useLayout } from '@/lib/layout';

/* Constants */
const getDateAxisSettings = (ticks: string[]) => ({
	tickValues: ticks,
	legend: 'Date',
	legendPosition: 'middle',
	legendOffset: +20,
});

const getDataAxisSettings = (legend: string, offset?: number) => ({
	tickValues: 4,
	legend: legend,
	legendPosition: 'middle',
	legendOffset: offset ?? -30,
	tickPadding: 10,
	tickRotation: -90,
	tickSize: 0,
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

	const { user } = useAuth();
	const {
		enableDefaultNavbar,
		disableDefaultNavbar,
		enableContentScrolling,
		disableContentScrolling,
	} = useLayout();

	const { loading } = useQuery<{ resumes: any[] }>(GET_RESUMES, {
		onCompleted: (data) => {
			const resumes: any[] = data.resumes;

			console.log('Fetched data from Reality:');
			console.log(resumes);

			let firstDate = resumes[0].date;
			let lastDate = resumes[resumes.length - 1].date;

			setTicks([firstDate, lastDate]);

			const durationChartData = [
				{
					id: 'Total Duration',
					color: '#ddddff',
					data: resumes.map((resume: any) => ({
						x: resume.date,
						y: (resume.totalDuration / 1000 / 60).toFixed(2), // in minutes
					})),
				},
			];

			const plasticChartData = [
				{
					id: 'Economized Plastic Waste',
					color: '#590995',
					data: resumes.map((resume: any) => ({
						x: resume.date,
						y: (resume.economizedPlastic / 1000).toFixed(2),
					})),
				},
			];

			const waterChartData = [
				{
					id: 'Distributed Water',
					color: '#0066ff',
					data: resumes.map((resume: any) => ({
						x: resume.date,
						y: (resume.distributedWater / 1000).toFixed(2),
					})),
				},
			];

			const bottleChartData = [
				{
					id: 'Bottle Quantity Equivalent',
					color: '#03c4a1',
					data: resumes.map((resume: any) => ({
						x: resume.date,
						y: Math.round(resume.bottleQuantityEquivalent),
					})),
				},
			];

			setDurationChartData(durationChartData);
			setPlasticChartData(plasticChartData);
			setWaterChartData(waterChartData);
			setBottleChartData(bottleChartData);
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

	const getFormatter = (suffix: string) => (number: number) =>
		`${Intl.NumberFormat('us').format(number).toString()}${suffix}`;

	if (loading)
		return (
			<Page>
				<section className='bg-black text-foreground'>
					<h1 style={{ fontFamily: 'Space Grotesk' }}>Loading...</h1>
				</section>
			</Page>
		);

	return (
		<Page className='mx-[2rem] flex flex-col items-center !justify-start pt-8 !font-title'>
			<h1 className='text-gradient mb-8 w-full text-center font-exotic !text-xl font-bold md:!text-4xl'>
				Welcome back, {user.username}.
			</h1>
			<div className='md:auto-rows-minmax grid w-full flex-1 grid-flow-row auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-1 md:grid-flow-col md:grid-cols-2'>
				<Card className='mb-4 min-h-full min-w-full max-w-lg !font-display @container md:col-span-3 md:mb-8'>
					<Tabs defaultTab='Duration'>
						<CardHeader separate className='flex-col @2xl:flex-row'>
							<h1 className='font-exotic text-2xl font-semibold text-foreground'>
								UPx Refill Station
							</h1>
							<TabList className='mt-4 shadow-md @2xl:mt-0'>
								<TabButton
									className='min-w-[70px] !px-1 shadow-md @2xl:text-sm'
									text='Duration'
									value='Duration'
								/>
								<TabButton
									className='min-w-[70px] !px-1 shadow-md @2xl:text-sm'
									text='Water'
									value='Water'
								/>
								<TabButton
									className='min-w-[70px] !px-1 shadow-md @2xl:text-sm'
									text='Plastic'
									value='Plastic'
								/>
								<TabButton
									className='min-w-[70px] !px-1 shadow-md @2xl:text-sm'
									text='Bottles'
									value='Bottles'
								/>
							</TabList>
						</CardHeader>
						<CardContent className='mt-0 pt-0'>
							<TabContent animate={false}>
								<Tab className='h-full' value='Duration'>
									<Chart
										data={durationChartData}
										axisLeft={
											getDataAxisSettings(
												'Total Duration (min)'
											) as any
										}
										axisBottom={
											getDateAxisSettings(ticks) as any
										}
										margin={{
											top: 30,
											right: 35,
											bottom: 25,
											left: 35,
										}}
										enableArea
										defs={chartAreaDefs}
										fill={[{ match: '*', id: 'gradient' }]}
									/>
								</Tab>
								<Tab className='h-full' value='Water'>
									<Chart
										data={waterChartData}
										margin={{
											top: 30,
											right: 35,
											bottom: 25,
											left: 35,
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
								<Tab className='h-full' value='Plastic'>
									<Chart
										data={plasticChartData}
										margin={{
											top: 30,
											right: 35,
											bottom: 25,
											left: 35,
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
								<Tab className='h-full' value='Bottles'>
									<Chart
										data={bottleChartData}
										margin={{
											top: 30,
											right: 35,
											bottom: 25,
											left: 35,
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
				<Card className='mb-8 min-h-full min-w-full md:col-span-1'>
					<CardHeader separate className='flex-col md:flex-row'>
						<h1 className='font-exotic text-2xl font-semibold text-foreground'>
							Example card
						</h1>
					</CardHeader>
					<CardContent></CardContent>
				</Card>
			</div>
		</Page>
	);
};

export default Component;