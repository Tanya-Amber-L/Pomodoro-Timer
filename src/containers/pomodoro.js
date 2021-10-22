import Hello from "../components/hello";

const Pomodoro = () => {
    const name = "Joe";
    return (
        <div className={"columns is-mobile is-centered"}>
            <div className={"column is-half"}>
                <Hello name={name} />
            </div>
        </div>
    );
};
export default Pomodoro;
