import Header from "../Shared/Header";

export default function Home() {
    return (
        <>
            <div className="home">

                <div className="trip">
                    <div className="trip-label">
                        <label>Source :</label>
                        <label>Destination :</label>
                    </div>
                    <div className="trip-input">
                        <input id="source" type='text'></input>
                        <input id="destination" type="text"></input>
                    </div>
                </div>

                <div className="journey-date"></div>
            </div>
        </>
    )
}