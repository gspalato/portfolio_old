import { useQuery } from '@apollo/client';
import { linearGradientDef } from '@nivo/core';
import { useState } from 'react';
import { AreaChart } from '@tremor/react';

import Page from '@/components/Page';
import { Tab, Tabs, TabButton, TabContent, TabList } from '@/components/Tabs';

import { Card, CardContent, CardHeader } from '@/components/Card';
import { ResponsiveLineChart as Chart } from '@/components/Chart';

import { useAuth } from '@/lib/auth/useAuth';
import classes from '@/lib/classes';
import { GET_RESUMES } from '@/lib/graphql/queries';

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
	const [plLineChartasticChartData, setPlasticChartData] = useState<any>([]);
	const [waterChartData, setWaterChartData] = useState<any>([]);
	const [bottleChartData, setBottleChartData] = useState<any>([]);

	const [ticks, setTicks] = useState<any>([]);

	const { user } = useAuth();
	console.log(user);

	const { loading, error } = useQuery<{ resumes: any[] }>(GET_RESUMES, {
		onCompleted: (data) => {
			const resumes: any[] = data.resumes;

			console.log('Fetched data from Reality:');
			console.log(resumes);

			let firstDate = resumes[0].date;
			let lastDate = resumes[resumes.length - 1].date;

			setTicks([firstDate, lastDate]);

			// @tremor/react
			/*
			const durationChartData = resumes.map((resume: any) => ({
				date: resume.date,
				'Total Duration': (resume.totalDuration / 1000 / 60).toFixed(2), // in minutes
			}));

			const plasticChartData = resumes.map((resume: any) => ({
				date: resume.date,
				'Economized Plastic Waste': (
					resume.economizedPlastic / 1000
				).toFixed(2),
			}));

			const waterChartData = resumes.map((resume: any) => ({
				date: resume.date,
				'Distributed Water': (resume.distributedWater / 1000).toFixed(
					2
				),
			}));

			const bottleChartData = resumes.map((resume: any) => ({
				date: resume.date,
				'Bottle Quantity Equivalent': Math.round(
					resume.bottleQuantityEquivalent
				),
			}));

			setDurationChartData(durationChartData);
			setPlasticChartData(plasticChartData);
			setWaterChartData(waterChartData);
			setBottleChartData(bottleChartData);
			*/

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
	else
		return (
			<Page className='block p-[2rem] pt-[6rem] !font-title md:pt-[7.5rem]'>
				<h1 className='text-gradient mb-6 text-center font-exotic !text-2xl font-bold md:!text-5xl'>
					Welcome back, {user.username}
				</h1>
				<Card className='mx-auto min-h-[30rem] min-w-full max-w-lg !font-display'>
					<Tabs defaultTab='chart'>
						<CardHeader separate>
							<h1 className='font-exotic text-2xl font-semibold text-foreground'>
								UPx Refill Station
							</h1>
							<TabList>
								<TabButton text='Chart' value='chart' />
								<TabButton text='Test' value='test' />
							</TabList>
						</CardHeader>
						<CardContent className='mt-0 pt-0'>
							<TabContent>
								<Tab className='h-full' value='chart'>
									<Chart
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
								</Tab>
								<Tab value='test'>
									<h1>Test</h1>
								</Tab>
							</TabContent>
						</CardContent>
					</Tabs>
				</Card>
			</Page>
			/*
			<Page className='!font-title block p-[2rem] pt-[6rem] md:pt-[7.5rem]'>
				<Title className='text-gradient font-exotic mb-6 text-center !text-2xl font-bold md:!text-5xl'>
					Welcome back, {'unreaalism!'}
				</Title>
				<Flex>
					<Card className='!font-display mx-auto min-w-[100%] max-w-lg'>
						<Title className='text-gradient font-exotic'>
							UPx Refill Station
						</Title>
						<TabGroup>
							<TabList defaultValue={1} className='mt-6'>
								<Tab value={1}>Duration</Tab>
								<Tab value={2}>Plastic</Tab>
								<Tab value={3}>Water</Tab>
								<Tab value={4}>Bottles</Tab>
							</TabList>
							<TabPanels>
								<TabPanel>
									<AreaChart
										className='mt-6'
										data={durationChartData}
										index='date'
										categories={['Total Duration']}
										colors={['zinc']}
										valueFormatter={getFormatter('min')}
										curveType='natural'
										yAxisWidth={50}
										maxValue={durationChartData.reduce(
											(max: number, item: any) =>
												Math.max(
													max,
													item['Total Duration']
												),
											0
										)}
									/>
								</TabPanel>
								<TabPanel>
									<AreaChart
										className='mt-6'
										data={plasticChartData}
										index='date'
										categories={[
											'Economized Plastic Waste',
										]}
										colors={['purple']}
										valueFormatter={getFormatter('kg')}
										curveType='natural'
										yAxisWidth={50}
										maxValue={plasticChartData.reduce(
											(max: number, item: any) =>
												Math.max(
													max,
													item[
														'Economized Plastic Waste'
													]
												),
											0
										)}
									/>
								</TabPanel>
								<TabPanel>
									<AreaChart
										className='mt-6'
										data={waterChartData}
										index='date'
										categories={['Distributed Water']}
										colors={['blue']}
										valueFormatter={getFormatter('L')}
										curveType='natural'
										yAxisWidth={50}
										maxValue={waterChartData.reduce(
											(max: number, item: any) =>
												Math.max(
													max,
													item['Distributed Water']
												),
											0
										)}
									/>
								</TabPanel>
								<TabPanel>
									<AreaChart
										className='mt-6'
										data={bottleChartData}
										index='date'
										categories={[
											'Bottle Quantity Equivalent',
										]}
										colors={['teal']}
										valueFormatter={getFormatter('')}
										curveType='natural'
										yAxisWidth={50}
										maxValue={bottleChartData.reduce(
											(max: number, item: any) =>
												Math.max(
													max,
													item[
														'Bottle Quantity Equivalent'
													]
												),
											0
										)}
									/>
								</TabPanel>
							</TabPanels>
						</TabGroup>
					</Card>
				</Flex>
			</Page>
			*/
		);
};

export default Component;
