import React from 'react'

const Categories = () => {
    const [value, setValue] = React.useState('category');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
    return (
        <div>
            <label for="categories">Categories:
            <select value={value} onChange={handleChange}>
                <option value="Automobile">Automobile</option>
                <option value="Books">Books</option>
                <option value="Clothing">Clothing</option>
                <option value="Electronics">Electronics</option>
                <option value="Fast Food">Fast Food</option>
                <option value="Furniture">Furniture</option>
                <option value="Gaming">Gaming</option>
                <option value="Grocery">Grocery</option>
                <option value="Home">Home</option>
                <option value="Appliance">Appliance</option>
                <option value="Laptop Accessories">Laptop Accessories</option>
                <option value="Men's Fashion">Men's Fashion</option>
                <option value=" Pets"> Pets</option>
                <option value="Phone Accessories">Phone Accessories</option>
                <option value="Phones & Tablets">Phones & Tablets</option>
                <option value="Services">Services</option>
                <option value="Sporting kits">Sporting kits</option>
                <option value="Women's Fashion">Women's Fashion</option>
                <option value="Others">Others</option>
            </select>
            </label>   
        </div>
    )
}

export default Categories