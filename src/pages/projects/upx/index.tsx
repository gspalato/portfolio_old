import { useEffect, useState} from 'react';
import { useQuery } from '@apollo/client';
import { ParentSize } from '@visx/responsive';

import Background from '@/components/Background';
import Page from '@/components/Page';

import { ResponsiveLineChart as Chart } from '@/components/Chart';

import { GET_RESUMES } from '@/graphql/queries';

import Styles from './upx.module.sass';

type RawResumeData = {
	date: string;
	totalDuration: number; // in seconds
	economizedPlastic: number; // in grams
	economizedWater: number; // in mililiters
};

type ParsedResumeData = {
	ticks: number; 
	dateString: string;
	totalDuration: number; // in hours
	economizedPlastic: number; // in kilograms
	economizedWater: number; // in liters
}

const UPx: React.FC = () => {
	const [resumeData, setResumeData] = useState<object[]>([]);

	const [allChartData, setAllChartData] = useState<any>([]);
	const [durationChartData, setDurationChartData] = useState<any>([]);
	const [plasticChartData, setPlasticChartData] = useState<any>([]);
	const [waterChartData, setWaterChartData] = useState<any>([]);

	const { loading, data, error } = useQuery<{ resume: RawResumeData[] }>(GET_RESUMES, {
		onCompleted: (data) => {
			const resumes: RawResumeData[] = data.resume;

			const durationChartData = [
				{
					id: "Total Duration",
					color: "#ddddff",
					data: resumes.map(
						(resume: RawResumeData) => ({
							x: resume.date,
							y: Math.round(resume.totalDuration / 60 / 60)
						})
					)
				}
			];

			const plasticChartData = [
				{
					id: "Economized Plastic Waste",
					color: "#ff0000",
					data: resumes.map(
						(resume: RawResumeData) => ({
							x: resume.date,
							y: resume.economizedPlastic / 1000
						})
					)
				}
			]

			const waterChartData = [
				{
					id: "Economized Water",
					color: "#0066ff",
					data: resumes.map(
						(resume: RawResumeData) => ({
							x: resume.date,
							y: Math.round(resume.economizedWater / 1000)
						})
					)
				}
			]

			const parsed = resumes.map(
				(resume: RawResumeData) => ({
					date: resume.date,
					totalDuration: Math.round(resume.totalDuration / 60 / 60),
					economizedPlastic: Math.round(resume.economizedPlastic / 1000),
					economizedWater: Math.round(resume.economizedWater / 1000)
				})
			);

			setResumeData(parsed);

			setDurationChartData(durationChartData);
			setPlasticChartData(plasticChartData);
			setWaterChartData(waterChartData);

			setAllChartData(([] as any[]).concat(durationChartData, plasticChartData, waterChartData));

			console.log(resumes);
		}
	});

  	return loading
		? (
			<Page>
				
			</Page>
		)
		: (
			<Page className={Styles.page}>
				<Background src="">
					{/* <motion.div className={Styles.bubble} /> */}
				</Background>
				<section className={Styles.boxes}>
					<div className={Styles.chartGrid}>
						<div className={Styles.box}>
							<h1 className={Styles.title}>Total Duration</h1>
							<Chart
								className={[Styles.chartWrapper, Styles.gridDouble].join(' ')}
								data={durationChartData}
								axisLeft={{
									tickPadding: 5,
									legend: "Total Duration (h)",
									legendPosition: "middle",
									legendOffset: -40
								}}
								axisBottom={{
									legend: "Date",
									legendPosition: "middle",
									legendOffset: +40
								}}
							/>
						</div>
						<div className={Styles.box}>
							<h1 className={Styles.title}>Plastic</h1>
							<Chart
								className={Styles.chartWrapper}
								data={plasticChartData}
								margin={{ top: 50, right: 50, bottom: 50, left: 70 }}
								axisLeft={{
									tickPadding: 5,
									legend: "Economized Plastic (kg)",
									legendPosition: "middle",
									legendOffset: -60
								}}
								axisBottom={{
									legend: "Date",
									legendPosition: "middle",
									legendOffset: +40
								}}
							/>
						</div>
						
						<div className={Styles.box}>
							<h1 className={Styles.title}>Water</h1>
							<Chart
								data={waterChartData}
								margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
								axisLeft={{
									tickPadding: 5,
									legend: "Economized Water (L)",
									legendPosition: "middle",
									legendOffset: -50
								}}
								axisBottom={{
									legend: "Date",
									legendPosition: "middle",
									legendOffset: +40
								}}
							/>
						</div>
						{/*
						<Chart
							style={{ gridArea: "a" } as React.CSSProperties}
							data={resumeData}
							accessors={{ x: (p) => p.date, y: (p) => p.economizedWater }}
							xKeyName="Date"
							yKeyName="Economized Water"
						/>
						<Chart
							style={{ gridArea: "b" } as React.CSSProperties}
							data={resumeData}
							accessors={{ x: (p) => p.date, y: (p) => p.totalDuration }}
							xKeyName="Date"
							yKeyName="Total Duration"
						/>
						<Chart
							tyle={{ gridArea: "c" } as React.CSSProperties}
							data={resumeData}
							accessors={{ x: (p) => p.date, y: (p) => p.economizedPlastic }}
							xKeyName="Date"
							yKeyName="Economized Plastic"
						/>
						*/}
					</div>
				</section>
			</Page>
  		)
}

export default UPx;