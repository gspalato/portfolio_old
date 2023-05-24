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
	distributedWater: number; // in mililiters
	economizedPlastic: number; // in grams
	bottleQuantityEquivalent: number; // in units
};

const DateAxisSettings = {
	tickValues: 3,
	legend: "Date",
	legendPosition: "middle",
	legendOffset: +40
};

const DataAxisSettings = (legend: string, offset?: number) => ({
	tickValues: 4,
	legend: legend,
	legendPosition: "middle",
	legendOffset: offset ?? -50,
});

const UPx: React.FC = () => {
	const [durationChartData, setDurationChartData] = useState<any>([]);
	const [plasticChartData, setPlasticChartData] = useState<any>([]);
	const [waterChartData, setWaterChartData] = useState<any>([]);
	const [bottleChartData, setBottleChartData] = useState<any>([]);

	console.log("Rendered UPx page.");

	const { loading, data, error } = useQuery<{ resumes: RawResumeData[] }>(GET_RESUMES, {
		onCompleted: (data) => {
			const resumes: RawResumeData[] = data.resumes;

			const durationChartData = [
				{
					id: "Total Duration",
					color: "#ddddff",
					data: resumes.map(
						(resume: RawResumeData) => ({
							x: resume.date,
							y: Math.round(resume.totalDuration / 60).toFixed(2)
						})
					)
				}
			];

			const plasticChartData = [
				{
					id: "Economized Plastic Waste",
					color: "#590995",
					data: resumes.map(
						(resume: RawResumeData) => ({
							x: resume.date,
							y: resume.economizedPlastic.toFixed(2)
						})
					)
				}
			];

			const waterChartData = [
				{
					id: "Distributed Water",
					color: "#0066ff",
					data: resumes.map(
						(resume: RawResumeData) => ({
							x: resume.date,
							y: (resume.distributedWater / 1000).toFixed(2)
						})
					)
				}
			];

			const bottleChartData = [
				{
					id: "Bottle Quantity Equivalent",
					color: "#03c4a1",
					data: resumes.map(
						(resume: RawResumeData) => ({
							x: resume.date,
							y: Math.round(resume.bottleQuantityEquivalent)
						})
					)
				}
			];

			setDurationChartData(durationChartData);
			setPlasticChartData(plasticChartData);
			setWaterChartData(waterChartData);
			setBottleChartData(bottleChartData);
		}
	});

	if (loading)
		return (
			<Page>
				<section className={Styles.loading}>
					<h1 style={{ fontFamily: "Space Grotesk" }}>Loading...</h1>
				</section>
			</Page>
		);
	else if (error)
		return (
			<Page>
				<section className={Styles.loading}>
					<h1 style={{ fontFamily: "Space Grotesk" }}>Error while fetching API.</h1>
				</section>
			</Page>
		);
	else
		return (
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
											axisLeft={DataAxisSettings("Total Duration (min)", -50) as any}
											axisBottom={DateAxisSettings as any}
											margin={{ top: 50, bottom: 50, left: 60, right: 50 }}
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
										<h1 className={Styles.title}>Economized Plastic</h1>
										<Chart
											className={Styles.chartWrapper}
											data={plasticChartData}
											margin={{ top: 50, right: 50, bottom: 50, left: 70 }}
											axisLeft={DataAxisSettings("Economized Plastic (g)", -60) as any}
											axisBottom={DateAxisSettings as any}
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
										<h1 className={Styles.title}>Distributed Water</h1>
										<Chart
											data={waterChartData}
											margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
											axisLeft={DataAxisSettings("Distributed Water (L)") as any}
											axisBottom={DateAxisSettings as any}
										/>
									</motion.div>
								)
							}
							{
								(bottleChartData.length > 0) && (
									<motion.div className={Styles.box}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
									>
										<h1 className={Styles.title}>Bottle Quantity Equivalent</h1>
										<Chart
											data={bottleChartData}
											margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
											axisLeft={DataAxisSettings("Bottles") as any}
											axisBottom={DateAxisSettings as any}
										/>
									</motion.div>
								)
							}
						</AnimatePresence>
					</div>
				</section>
			</Page>
  		);
}

export default UPx;