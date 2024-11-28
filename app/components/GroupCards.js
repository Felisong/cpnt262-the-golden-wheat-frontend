const { default: Cards } = require("./Cards");

export default function GroupCards() {
  return (
    <div className="flex-col md:flex-row">
      <Cards
        imgSrc={"/bread1.png"}
        Title={"The Coldest Sunset"}
        bosyText={"Hello"}
      />
      <Cards
        imgSrc={"/bread1.png"}
        Title={"The Coldest Sunset"}
        bosyText={"Hello"}
      />
      <Cards
        imgSrc={"/bread1.png"}
        Title={"The Coldest Sunset"}
        bosyText={"Hello"}
      />
    </div>
  );
}
