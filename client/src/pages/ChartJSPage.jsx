
import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

import { Line } from "react-chartjs-2";

import smallJson from "../data/json2.json"
import bigJson from "../data/json1.json"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
const options1 = {
    responsive: true,
    scales: {
        y: {
            position: "left",
            title: {
                display: true,
                text: "Conversions",
                font: {
                    size: 20
                },
                padding: { top: 20, left: 0, right: 0, bottom: 0 }
            }
        },
        x: {
            position: "bottom",
            title: {
                display: true,
                text: "Leads treated",
                font: {
                    size: 20
                },
                padding: { top: 20, left: 0, right: 0, bottom: 0 }
            }
        }
    },


    plugins: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: "Graph 1",
            align: "start",
            font: {
                size: 25
            }

        }
    }
};

const data1 = {
    labels: bigJson.x,
    datasets: [
        {
            label: "Conversion Rate",
            data: bigJson.y,
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)"
        },

    ],
    spanGaps: true
};

const options2 = {
    responsive: true,
    scales: {
        y: {
            position: "left",
            title: {
                display: true,
                text: "Conversion percentage",
                font: {
                    size: 20
                },
                padding: { top: 20, left: 0, right: 0, bottom: 0 }
            }
        },
        x: {
            position: "bottom",
            title: {
                display: true,
                text: "Group",
                font: {
                    size: 20
                },
                padding: { top: 20, left: 0, right: 0, bottom: 0 }
            }
        }
    },


    plugins: {
        legend: {
            display: "top"
        },
        title: {
            display: true,
            text: "Graph 2",
            align: "start",
            font: {
                size: 25
            }

        }
    }
};

const data2 = {
    labels: smallJson.x,
    datasets: [
        {
            label: "Predicted",
            data: smallJson.predicted,
            borderColor: "rgba(0, 156, 76,0.6)",
            backgroundColor: "rgb(0, 156, 76)"
        },
        {
            label: "Real",
            data: smallJson.real,
            borderColor: "rgba(0,0,255,0.6)",
            backgroundColor: "rgb(0,0,255)"
        },
        {
            label: "Average",
            data: [smallJson.average, smallJson.average, smallJson.average],
            borderColor: "000000",
            backgroundColor: "000000"
        },

    ],
    spanGaps: true
};



const ChartJSPage = () => {
    return (
        <>
            <div style={{ display: "flexbox" }}>


                <div style={{ width: "1000px", margin: "auto", padding: 100 }}>

                    <Line options={options1} data={data1} />

                </div>

                <div >
                    <p style={{ width: "1000px", margin: "auto", fontFamily: "Arial, Helvetica, sans-serif" }}>"GraphJS", ya sea su versión para react o en canvas, permite una mayor personalización estética de los graficos,
                        pero carece de la funcionalida de "recharts". En este caso, es imposible trazar lineas de referencia en los gráficos, por lo que el primer gráfico queda incompleto

                    </p>
                </div>
                <br></br><br></br>
                <div style={{ width: "1000px", margin: "auto" }}>

                    <Line options={options2} data={data2} />


                </div>

            </div>
        </>

    )
}

export default ChartJSPage
