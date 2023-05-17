import { useEffect, useState} from 'react';
import { useQuery } from '@apollo/client';
import { AnimatePresence, motion } from 'framer-motion';

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

	console.log("Rendered UPx page.");

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

	// Add blur to navbar so it looks better on mobile.
	document.getElementById("navbar")?.classList.add("blur");

  	return loading
		? (
			<Page>
				<h1 style={{ fontFamily: "Space Grotesk" }}>Loading...</h1>
			</Page>
		)
		: (
			<Page className={Styles.page}>
				<Background src="">
					{/* <motion.div className={Styles.bubble} /> */}
				</Background>
				<section className={Styles.boxes}>
					<div className={Styles.chartGrid}>
						<AnimatePresence>
							{
								(durationChartData.length > 0) && (
									<motion.div className={Styles.box}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
									>
										<h1 className={Styles.title}>Total Duration</h1>
										<Chart
											className={[Styles.chartWrapper, Styles.gridDouble].join(' ')}
											data={durationChartData}
											axisLeft={{
												tickValues: 4,
												legend: "Total Duration (h)",
												legendPosition: "middle",
												legendOffset: -40,
											}}
											axisBottom={{
												tickValues: "every 7 days",
												legend: "Date",
												legendPosition: "middle",
												legendOffset: +40
											}}
										/>
									</motion.div>
								)
							}
							{
								(plasticChartData.length > 0) && (
									<motion.div className={Styles.box}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
									>
										<h1 className={Styles.title}>Plastic</h1>
										<Chart
											className={Styles.chartWrapper}
											data={plasticChartData}
											margin={{ top: 50, right: 50, bottom: 50, left: 70 }}
											axisLeft={{
												tickValues: 4,
												legend: "Economized Plastic (kg)",
												legendPosition: "middle",
												legendOffset: -60
											}}
											axisBottom={{
												tickValues: "every 7 days",
												legend: "Date",
												legendPosition: "middle",
												legendOffset: +40
											}}
										/>
									</motion.div>
								)
							}
							{
								(waterChartData.length > 0) && (
									<motion.div className={Styles.box}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
									>
										<h1 className={Styles.title}>Water</h1>
										<Chart
											data={waterChartData}
											margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
											axisLeft={{
												tickValues: 5,
												legend: "Economized Water (L)",
												legendPosition: "middle",
												legendOffset: -50
											}}
											axisBottom={{
												tickValues: "every 7 days",
												legend: "Date",
												legendPosition: "middle",
												legendOffset: +40
											}}
										/>
									</motion.div>
								)
							}
						</AnimatePresence>
					</div>
				</section>
			</Page>
  		)
}

export default UPx;