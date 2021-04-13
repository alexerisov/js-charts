import { chart } from './chart';
import data from './data.json'
import './../css/styles.scss'

const tgChart = chart(document.getElementById
('chart'), data[1])
tgChart.init()