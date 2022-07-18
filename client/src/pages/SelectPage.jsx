

import { Link } from "react-router-dom"


const SelectPage = () => {







    return (
        <>



            <div style={{ display: "flexbox", textAlign: "center" }}>
                <div style={{ marginTop: "250px" }}>

                    <br />
                    <Link to="/user/nice"> Charts made with ChartJS</Link>
                    <br />
                    <Link to="/user/ugly"> Charts made with Rechart</Link>

                </div>
            </div>
        </>

    )
}

export default SelectPage