function Main() {
    return <HornedBeasts title={'Horned Beast'} description="Description soon" />

}

function HornedBeasts(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <img src={"./img/dog.jpg"} alt={"Other Horned Beast"} title={"Other"} />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <img src={"./img/dog.jpg"} alt={"Other Horned Beast"} title={"Other"} />
        </div>
    );
}

export default Main;

