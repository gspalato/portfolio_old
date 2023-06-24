import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

import { Card, Col, Grid, LineChart, Text, Title } from '@tremor/react';

import Page from '@/components/Page';

import { GET_RESUMES } from '@/lib/graphql/queries';

import Styles from './dashboard.module.sass';



const Component: React.FC = () => {
	const [durationChartData, setDurationChartData] = useState<any>([]);
	const [plasticChartData, setPlasticChartData] = useState<any>([]);
	const [waterChartData, setWaterChartData] = useState<any>([]);
	const [bottleChartData, setBottleChartData] = useState<any>([]);

	const [chartData, setChartData] = useState<any>([]);

	const [ticks, setTicks] = useState<any>([]);

	const { loading, error } = useQuery<{ resumes: any[] }>(GET_RESUMES, {
		onCompleted: (data) => {
			const resumes: any[] = data.resumes;

			console.log("Fetched data from Reality:");
			console.log(resumes);

			let firstDate = resumes[0].date;
			let lastDate = resumes[resumes.length - 1].date;

			setTicks([firstDate, lastDate]);

			const chartData = resumes.map((resume: any) => ({
				date: resume.date,
				"Total Duration": (resume.totalDuration / 1000 / 60).toFixed(2), // in minutes
				"Economized Plastic Waste": (resume.economizedPlastic / 1000).toFixed(2), // in kilograms
				"Distributed Water": (resume.distributedWater / 1000).toFixed(2), // in liters
				"Bottle Quantity Equivalent": Math.round(resume.bottleQuantityEquivalent)
			}));
			setChartData(chartData);

			const durationChartData = resumes.map(
				(resume: any) => ({
					date: resume.date,
					"Total Duration": (resume.totalDuration / 1000 / 60).toFixed(2) // in minutes
				})
			);

			const plasticChartData = resumes.map(
				(resume: any) => ({
					date: resume.date,
					"Economized Plastic Waste": (resume.economizedPlastic / 1000).toFixed(2)
				})
			);

			const waterChartData = resumes.map(
				(resume: any) => ({
					date: resume.date,
					"Distributed Water": (resume.distributedWater / 1000).toFixed(2)
				})
			);

			const bottleChartData = resumes.map(
				(resume: any) => ({
					date: resume.date,
					"Bottle Quantity Equivalent": Math.round(resume.bottleQuantityEquivalent)
				})
			);

			setDurationChartData(durationChartData);
			setPlasticChartData(plasticChartData);
			setWaterChartData(waterChartData);
			setBottleChartData(bottleChartData);
		}
	});

	const durationFormatter = (number: number) => `${Intl.NumberFormat("us").format(number).toString()}min`;
	const plasticFormatter = (number: number) => `${Intl.NumberFormat("us").format(number).toString()}kg`;
	const waterFormatter = (number: number) => `${Intl.NumberFormat("us").format(number).toString()}L`;
	const bottleFormatter = (number: number) => `${Intl.NumberFormat("us").format(number).toString()}`;

	if (loading)
		return (
			<Page>
				<section className={Styles.loading}>
					<h1 style={{ fontFamily: "Space Grotesk" }}>Loading...</h1>
				</section>
			</Page>
		);
	else
		return (
			<Page className="!font-title flex items-center justify-center">
				<Grid numItems={1} numItemsSm={1} numItemsMd={4} numItemsLg={4} className='w-full m-4 gap-4 flex-shrink-0 w-fit'>
					<Card>
						<LineChart
							className="mt-6"
							data={durationChartData}
							index="date"
							categories={["Total Duration"]}
							colors={["zinc"]}
							valueFormatter={durationFormatter}
							yAxisWidth={20}
						/>
					</Card>
					<Col numColSpan={1} numColSpanMd={2}>
						<Card>
							<LineChart
								className="mt-6"
								data={plasticChartData}
								index="date"
								categories={["Economized Plastic Waste"]}
								colors={["purple"]}
								valueFormatter={plasticFormatter}
								yAxisWidth={20}
							/>
						</Card>
					</Col>
					<Col numColSpan={1} numColSpanMd={2}>
					<Card>
						<LineChart
							className="mt-6"
							data={waterChartData}
							index="date"
							categories={["Distributed Water"]}
							colors={["blue"]}
							valueFormatter={plasticFormatter}
							yAxisWidth={20}
						/>
					</Card>
					</Col>
					<Card>
						<LineChart
							className="mt-6"
							data={bottleChartData}
							index="date"
							categories={["Bottle Quantity Equivalent"]}
							colors={["teal"]}
							valueFormatter={plasticFormatter}
							yAxisWidth={20}
						/>
					</Card>
				</Grid>
			</Page>
		);
}

export default Component;