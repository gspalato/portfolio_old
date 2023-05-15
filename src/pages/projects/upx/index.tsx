import { useEffect, useState} from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@apollo/client';

import Background from '@/components/Background';
import Page from '@/components/Page';

import ResponsiveChart from './chart';

import { GET_RESUMES } from '@/graphql/queries';

import Styles from './upx.module.sass';
import { Serie } from '@nivo/line';


type RawResumeData = {
	timestamp: number;
	totalDuration: number;
	economizedPlastic: number;
	economizedWater: number;
};

type ResumeData = {
	date: string;
	totalDuration: number;
	economizedPlastic: number;
	economizedWater: number;
};

type RawUseData = {
	startTimestamp: number;
	endTimestamp: number;
	duration: number;
	economizedPlastic: number;
	economizedWater: number;
};

export default function Login() {
	const [resumeData, setResumeData] = useState<ResumeData[]>([]);
	const [chartData, setChartData] = useState<Serie[]>([]);

	const { loading, data, error } = useQuery<{ resume: RawResumeData[] }>(GET_RESUMES, {
		onCompleted: (data) => {
			const resumes: RawResumeData[] = data.resume;

			const resumeData: ResumeData[] = resumes.map((resume) => {
				return {
					date: new Date(resume.timestamp).toLocaleDateString(),
					totalDuration: resume.totalDuration,
					economizedPlastic: resume.economizedPlastic,
					economizedWater: resume.economizedWater
				};
			});

			let chartData: Serie[] = [
				{ id: "Plastic", data: [] },
				{ id: "Water", data: [] },
			];

			resumeData.map((resume: ResumeData) => {
				chartData[0].data.push({
					x: resume.date,
					y: resume.economizedPlastic
				});
			});
	
			resumeData.map((resume: ResumeData) => {
				chartData[1].data.push({
					x: resume.date,
					y: resume.economizedWater
				});
			});

			setResumeData(resumeData);
			setChartData(chartData);
		}
	});

  	return loading
		? (
			<Page>
				
			</Page>
		)
		: (
			<Page>
				<Background src="">
					{/* <motion.div className={Styles.bubble} /> */}
				</Background>
				<section className={Styles.content}>
					<div className={Styles.chartWrapper}>
						<ResponsiveChart data={chartData} />
					</div>
				</section>
			</Page>
  		)
}