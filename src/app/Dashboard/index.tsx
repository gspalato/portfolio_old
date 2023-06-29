import { useQuery } from '@apollo/client';
import { linearGradientDef } from '@nivo/core';
import { useEffect, useState } from 'react';

import Loading from '@/app/Loading';

import { Gradient as Button } from '@/components/Button';
import { Card, CardContent, CardHeader } from '@/components/Card';
import { ResponsiveLineChart as Chart } from '@/components/Chart';
import Page from '@/components/Page';
import { Tab, Tabs, TabButton, TabContent, TabList } from '@/components/Tabs';

import { useAuth } from '@/lib/auth';
import { GetResumes } from '@/lib/graphql/queries';
import { useLayout } from '@/lib/layout';

import { Resume } from '@/types/Resume';
import { AnimatePresence } from 'framer-motion';

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
		<Page className='mx-[2rem] flex flex-col items-center !justify-start pt-8 !font-title'>
			<h1 className='text-gradient mb-8 w-full text-center font-exotic !text-xl font-bold md:!text-4xl'>
				Welcome back, {user.Username}.
			</h1>
			<div className='md:auto-rows-minmax grid w-full flex-1 grid-flow-row auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-1 md:grid-flow-col md:grid-cols-2'>
				<Card className='mb-4 min-h-full min-w-full max-w-lg !font-display @container md:col-span-3 md:mb-8'>
					<Tabs defaultTab='Water'>
						<CardHeader separate className='flex-col @2xl:flex-row'>
							<h1 className='font-exotic text-2xl font-semibold text-foreground'>
								UPx Refill Station
							</h1>
							<TabList className='mt-4 shadow-md @2xl:mt-0'>
								<TabButton
									className='min-w-[60px] !px-1 shadow-md @2xl:text-sm'
									text='Uses'
									value='Uses'
								/>
								<TabButton
									className='min-w-[60px] !px-1 shadow-md @2xl:text-sm'
									text='Duration'
									value='Duration'
								/>
								<TabButton
									className='min-w-[60px] !px-1 shadow-md @2xl:text-sm'
									text='Water'
									value='Water'
								/>
								<TabButton
									className='min-w-[60px] !px-1 shadow-md @2xl:text-sm'
									text='Plastic'
									value='Plastic'
								/>
								<TabButton
									className='min-w-[60px] !px-1 shadow-md @2xl:text-sm'
									text='Bottles'
									value='Bottles'
								/>
							</TabList>
						</CardHeader>
						<CardContent className='mt-0 pt-0'>
							<TabContent animate={false}>
								<Tab className='h-full' value='Uses'>
									<Chart
										data={chartData.uses}
										axisLeft={
											getDataAxisSettings('Uses') as any
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
								<Tab className='h-full' value='Duration'>
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
										data={chartData.water}
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
										data={chartData.plastic}
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
										data={chartData.bottles}
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
