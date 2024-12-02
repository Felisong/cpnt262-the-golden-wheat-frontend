// placeholder. I am unable to get to the logic of this right now.

import Button from "./Button";

export default function OrderForm() {
  return (
    <>
      <form className="flex flex-col m-6">
        <>
          <div>
            <label htmlFor="products">Product:</label>
            <select name="products" id="products" className="rounded-full p-2">
              <option value="bread">Breads</option>
              <option value="bun">Buns</option>
              <option value="pastries">Pastries</option>
            </select>
            <br />
          </div>
          <label>Item</label>
          <select name="products" id="products" className="rounded-full p-2">
            <option value="bread">Breads</option>
            <option value="bun">Buns</option>
            <option value="pastries">Pastries</option>
          </select>
          <label>quantity</label>
          <input type="number" className="rounded-full p-2 mb-4"></input>
          <Button
            backgroundColor="darkBlue"
            borderColor="yellowBright"
            text="Order"
            textColor="yellowBright"
            isHidden="md:block"
          />
        </>
      </form>
    </>
  );
}
