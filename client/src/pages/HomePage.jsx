import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine, ReferenceDot } from 'recharts';
import { AuthContext } from '../context/auth.context';



import smallJson from "../data/json2.json"
import bigJson from "../data/json1.json"


const data = []

const dataformer = async (object) => {

    try {
        object.x.forEach((elm, idx) => {
            const point = { name: elm, real: object.real[idx], predicted: object.predicted[idx], average: object.average, lift: object.lift }
            data.push(point)

        })

    } catch (error) {
        console.log(error)
    }

}
dataformer(smallJson)

const data2 = []

const dataformer2 = async (json) => {

    try {
        json.y.forEach((elm, idx) => {
            const point = { y: elm }
            data2.push(point)
        })


    } catch (error) {
        console.log(error)
    }
}
dataformer2(bigJson)

const groups = { first: 10, second: 22, third: 34, fourth: 34 }
const a = Math.ceil(((data2.length - 1) * groups.first) / 100)
const b = Math.ceil(((data2.length - 1) * groups.second) / 100)
const c = Math.ceil(((data2.length - 1) * groups.third) / 100)
console.log(a, b, c)

const HomePage = () => {


    const { user } = useContext(AuthContext)



    return (
        <>
            {user ? <div>Hello {user.username}</div> : <div>no hay user</div>}

            {/* comment from here to disable forst huge graphic */}

            <div style={{ width: "1000px", height: "400px", backgroundColor: "silver" }}>

                <LineChart width={750} height={250} data={data2} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <YAxis />
                    <XAxis />
                    <Tooltip />


                    <ReferenceLine stroke="black" segment={[{ x: 0, y: data2[0].y }, { x: data2.length - 1, y: data2[data2.length - 1].y }]} />


                    <Line type="monotone" dataKey="y" stroke="#00ff00" strokeWidth={1} />
                    <ReferenceDot x={a} y={data2[a].y} label="A" r={5} />
                    <ReferenceDot x={a + b} y={data2[a + b].y} label="A+B" r={5} />
                    <ReferenceDot x={a + b + c} y={data2[a + b + c].y} label="A+B+C" r={5} />

                    <ReferenceLine stroke="red" strokeDasharray="3 3" segment={[{ x: a + b, y: data2[a + b].y }, { x: a + b, y: 0 }]} />
                    <ReferenceLine stroke="red" strokeDasharray="3 3" segment={[{ x: a + b, y: data2[a + b].y }, { x: 11348, y: data2[a + b].y }]} />
                    <ReferenceDot x={11348} y={data2[a + b].y} r={5} />
                    <ReferenceLine stroke="blue" strokeDasharray="3 3" segment={[{ x: 11348, y: data2[a + b].y }, { x: 11348, y: 0 }]} />
                </LineChart>

            </div>

            {/* up to here */}

            <Container>
                <div style={{ width: "1000px", height: "400px", backgroundColor: "azure" }}>

                    <ResponsiveContainer>

                        <LineChart width={500} height={500} data={data}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="predicted" stroke="#ff00ff" />
                            <Line type="monotone" dataKey="real" stroke="#00ff00" />
                            <Line type="dotted" dataKey="average" stroke="#000" />
                        </LineChart>

                    </ResponsiveContainer>
                </div>
            </Container>
        </>

    )
}

export default HomePage
