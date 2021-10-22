import Display from "../components/display";

const Pomodoro = () => {
    const timerSeconds = 1500;
    return (
        <div className={"columns is-mobile is-centered"}>
            <div className={"column is-half"}>
                <Display seconds={timerSeconds} />
            </div>
        </div>
    );
};
export default Pomodoro;
