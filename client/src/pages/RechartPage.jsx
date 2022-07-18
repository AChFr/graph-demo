import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine, ReferenceDot } from 'recharts';
import { AuthContext } from '../context/auth.context';



import smallJson from "../data/json2.json"
import bigJson from "../data/json1.json"


const data = smallJson.x.map((elm, idx) => {
    return {
        name: `Group ${elm}`,
        real: smallJson.real[idx], predicted: smallJson.predicted[idx], average: smallJson.average, lift: smallJson.lift
    }
})


const data2 = bigJson.y.map((elm, idx) => {
    return {
        y: elm,

    }
})



const groups = { first: 10, second: 22, third: 34, fourth: 34 }
const a = Math.ceil(((bigJson.y.length - 1) * groups.first) / 100)
const b = Math.ceil(((bigJson.y.length - 1) * groups.second) / 100)
const c = Math.ceil(((bigJson.y.length - 1) * groups.third) / 100)


const RechartPage = () => {


    const { user } = useContext(AuthContext)



    return (
        <>
            {user ? <div>Hello {user.username}</div> : <div>no hay user</div>}

            <br></br>

            <div style={{ width: "1000px", height: "400px", padding: "50px" }}>

                <LineChart width={750} height={250} data={data2} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <YAxis />
                    <XAxis />
                    <Tooltip />


                    <ReferenceLine stroke="black" segment={[{ x: 0, y: data2[0].y }, { x: data2.length - 1, y: data2[data2.length - 1].y }]} />


                    <Line type="monotone" dataKey="y" stroke="#00ff00" strokeWidth={1} dot={{ r: 1 }} />
                    <ReferenceDot x={a} y={data2[a].y} label="A" r={7} />
                    <ReferenceDot x={a + b} y={data2[a + b].y} label="A+B" r={7} />
                    <ReferenceDot x={a + b + c} y={data2[a + b + c].y} label="A+B+C" r={7} />

                    <ReferenceLine stroke="red" strokeDasharray="3 3" segment={[{ x: a + b, y: data2[a + b].y }, { x: a + b, y: 0 }]} />
                    <ReferenceLine stroke="red" strokeDasharray="3 3" segment={[{ x: a + b, y: data2[a + b].y }, { x: 11348, y: data2[a + b].y }]} />
                    <ReferenceDot x={11348} y={data2[a + b].y} r={5} />
                    <ReferenceLine stroke="blue" strokeDasharray="3 3" segment={[{ x: 11348, y: data2[a + b].y }, { x: 11348, y: 0 }]} />
                </LineChart>

            </div>

            <div >
                <p style={{ width: "1000px", margin: "auto", fontFamily: "Arial, Helvetica, sans-serif" }}>Sin tantas opciones gráficas como otras librerías, esta es, sin embargo, una de las más funcionales. Permite dibujar lineas dfe referencia,
                    ,puntos sueltos en un gráfico y muchas mas opciones a la hora de representar datos
                </p>
            </div>
            <br />
            <br />
            <Container>
                <div style={{ width: "1000px", height: "400px", }}>

                    <ResponsiveContainer>

                        <LineChart width={500} height={500} data={data}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis

                            />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="linear" dataKey="predicted" stroke="#ff00ff" />
                            <Line type="linear" dataKey="real" stroke="#00ff00" />
                            <Line type="linear" dataKey="average" stroke="#000000" />
                        </LineChart>

                    </ResponsiveContainer>
                </div>
            </Container>
        </>

    )
}

export default RechartPage
