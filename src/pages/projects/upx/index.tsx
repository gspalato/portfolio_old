import { useEffect, useState} from 'react';
import { useQuery } from '@apollo/client';

import Background from '@/components/Background';
import Page from '@/components/Page';

import LineGraph from './graph';

import { GET_RESUMES } from '@/graphql/queries';

import Styles from './upx.module.sass';


type ResumeData = {
	timestamp: number;
	totalDuration: number;
	economizedPlastic: number;
	economizedWater: number;
};

export default function Login() {
	const [resumeData, setResumeData] = useState<ResumeData[]>([]);
	const [chartData, setChartData] = useState<{x:number,y:number}[][]>([]);

	const { loading, data, error } = useQuery<{ resume: ResumeData[] }>(GET_RESUMES, {
		onCompleted: (data) => {
			const resumes: ResumeData[] = data.resume;

			type Point = { x: number, y: number };
			let chartData: [Point[], Point[]] = [[], []];

			resumes.map((resume: ResumeData) => {
				chartData[0].push({
					x: resume.timestamp,
					y: resume.economizedPlastic
				});
			});

			resumes.map((resume: ResumeData) => {
				chartData[1].push({
					x: resume.timestamp,
					y: resume.economizedWater
				});
			});

			setResumeData(resumes);
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
					<LineGraph data={chartData} />
				</section>
			</Page>
  		)
}