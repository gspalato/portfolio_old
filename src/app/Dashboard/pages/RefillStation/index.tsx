import { useLazyQuery, useQuery } from '@apollo/client';
import { linearGradientDef } from '@nivo/core';
import { useEffect, useState } from 'react';

import Loading from '@/app/Loading';

import { ResponsiveLineChart as Chart } from '@components/Chart';
import Page from '@components/Page';

import { Tab, TabButton, TabContent, TabList, Tabs } from '@/components/Tabs';

import { GetResumes } from '@/lib/graphql/queries';

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

type ChartData = {
	uses: any[];
	duration: any[];
	water: any[];
	plastic: any[];
	bottles: any[];
};

type TickData = {
	uses: number;
	duration: number;
	water: number;
	plastic: number;
	bottles: number;
};

const Component: React.FC = () => {
	const [chartData, setChartData] = useState<ChartData>({
        uses: [],
        duration: [],
        water: [],
        plastic: [],
        bottles: [],
    });

    const [maxTicks, setMaxTicks] = useState<any>({
        uses: 0,
        duration: 0,
        water: 0,
        plastic: 0,
        bottles: 0,
    });

	const [dateTicks, setDateTicks] = useState<any>([]);

	const [fetch, { data }] = useLazyQuery<GetResumes.ReturnType>(
		GetResumes.Query
	);

	useEffect(() => {
		fetch();
	}, []);

	useEffect(() => {
        if (!data) return;

		const resumes = data.resumes;

		console.log('Fetched data from Foundation:');
		console.log(resumes);

        let chartData: ChartData = {
			uses: [],
			duration: [],
			plastic: [],
			water: [],
			bottles: [],
		};

        let maxTicks: TickData  = {
			uses: 0,
			duration: 0,
			plastic: 0,
			water: 0,
			bottles: 0,
		};

		if (resumes.length === 0)
			setChartData(chartData);

		const timestampToDateString = (timestamp: number): string => {
			let date = new Date(timestamp * 1000);
			let formatted = date.toLocaleDateString('pt-BR');

			return formatted;
		};

		let firstDate = timestampToDateString(resumes[0].timestamp);
		let lastDate = timestampToDateString(
			resumes[resumes.length - 1].timestamp
		);

		setDateTicks([firstDate, lastDate]);

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
        chartData.uses = useChartData;
        maxTicks.uses = Math.max(...useChartData[0].data.map((xy: any) => xy.y));

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
        chartData.duration = durationChartData;
        maxTicks.duration = Math.max(...durationChartData[0].data.map((xy: any) => xy.y));

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
        chartData.plastic = plasticChartData;
        maxTicks.plastic = Math.max(...plasticChartData[0].data.map((xy: any) => xy.y));

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
        chartData.water = waterChartData;
        maxTicks.water = Math.max(...waterChartData[0].data.map((xy: any) => xy.y));

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
        chartData.bottles = bottleChartData;
        maxTicks.bottles = Math.max(...bottleChartData[0].data.map((xy: any) => xy.y));

		setChartData(chartData);
        setMaxTicks(maxTicks);
	}, [data]);

	if (!data) return <Loading />;

	return (
		<Page className='h-full flex-col'>
			<h1 className='text-gradient mt-0 md:mt-8 w-full text-center font-exotic !text-3xl font-bold @md/subpage:!text-4xl'>
				UPx Refill Station
			</h1>
			<Tabs defaultTab='Water'>
				<TabList className='mb-8 mt-4 shadow-md @2xl:mt-0'>
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

				<div className='w-full !min-w-0 !max-w-full flex-1 rounded-lg'>
					<TabContent animate={false}>
						<Tab
							className='h-full min-h-full min-w-full'
							value='Uses'
						>
							<Chart
								data={chartData.uses}
								axisLeft={{
									...(getDataAxisSettings('Uses') as any),
									tickValues: [
										0,
										maxTicks.uses,
									],
								}}
								axisBottom={getDateAxisSettings(dateTicks) as any}
								margin={{
									top: 15,
									right: 0,
									bottom: 0,
									left: 0,
								}}
								enableArea
								defs={chartAreaDefs}
								fill={[
									{
										match: '*',
										id: 'gradient',
									},
								]}
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
								axisBottom={getDateAxisSettings(dateTicks) as any}
								margin={{
									top: 15,
									right: 0,
									bottom: 0,
									left: 0,
								}}
								enableArea
								defs={chartAreaDefs}
								fill={[
									{
										match: '*',
										id: 'gradient',
									},
								]}
							/>
						</Tab>
						<Tab
							className='h-full min-h-full min-w-full'
							value='Water'
						>
							<Chart
								data={chartData.water}
								margin={{
									top: 15,
									right: 0,
									bottom: 0,
									left: 0,
								}}
								axisLeft={
									getDataAxisSettings(
										'Distributed Water (L)'
									) as any
								}
								axisBottom={getDateAxisSettings(dateTicks) as any}
								enableArea
								defs={chartAreaDefs}
								fill={[
									{
										match: '*',
										id: 'gradient',
									},
								]}
							/>
						</Tab>
						<Tab
							className='h-full min-h-full min-w-full'
							value='Plastic'
						>
							<Chart
								data={chartData.plastic}
								margin={{
									top: 15,
									right: 0,
									bottom: 0,
									left: 0,
								}}
								axisLeft={
									getDataAxisSettings(
										'Economized Plastic (kg)'
									) as any
								}
								axisBottom={getDateAxisSettings(dateTicks) as any}
								enableArea
								defs={chartAreaDefs}
								fill={[
									{
										match: '*',
										id: 'gradient',
									},
								]}
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
								axisLeft={getDataAxisSettings('Bottles') as any}
								axisBottom={getDateAxisSettings(dateTicks) as any}
								enableArea
								defs={chartAreaDefs}
								fill={[
									{
										match: '*',
										id: 'gradient',
									},
								]}
							/>
						</Tab>
					</TabContent>
				</div>
			</Tabs>
		</Page>
	);
};

Component.displayName = 'Refill Station';

export default Component;
