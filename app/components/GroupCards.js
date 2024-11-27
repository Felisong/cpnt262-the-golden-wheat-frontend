const { default: Cards } = require("./Cards");

export default function GroupCards() {
  return (
    <>
      <Cards
        imgSrc={"/bread1.png"}
        Title={"The Coldest Sunset"}
        bosyText={"Hello"}
      />
      <Cards />
      <Cards />
    </>
  );
}
