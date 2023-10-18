const Shimmer = () => {
    return (
        <div className="flex flex-wrap m-14">
            {Array(10).fill("").map((e, index) => <div key={index} className="bg-gray-200 h-52 m-5 w-52"></div>)};
        </div>
    )
};
export default Shimmer;