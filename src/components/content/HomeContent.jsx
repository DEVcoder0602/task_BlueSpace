import Computers from "../../assets/computers.png";

const HomeContent = () => {
  return (
    <div className="flex flex-row justify-around mx-10">
      <div className="left flex-1">
        <div
          className="left-heading"
          style={{
            fontFamily: "HolidayFree",
            color: "#0052CC",
            fontSize: "28px",
          }}
        >
          Our Services
        </div>
        <div
          style={{
            fontWeight: 900,
            fontSize: "80px",
            lineHeight: "80px",
            margin: "12px 0",
          }}
        >
          <span style={{ color: "#2684FF" }}>Website </span>
          <span>Development</span>
        </div>
        <div className="info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          adipisci ab enim mollitia accusamus ipsum nemo debitis ullam magni
          quas quibusdam eligendi, odit, ad corrupti explicabo, nostrum velit
          placeat ducimus a molestias blanditiis voluptas. Odio sapiente quod
          cumque cupiditate architecto possimus minima nesciunt iure enim
          doloribus! Nobis impedit pariatur enim.
        </div>
      </div>
      <div className="right flex-1">
        <img src={Computers} alt="" />
      </div>
    </div>
  );
};

export default HomeContent;
