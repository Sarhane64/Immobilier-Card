/* eslint-disable react/prop-types */
import Card from "./Card.jsx";

const SideBar = ({ data,isChecked }) => {
  if(isChecked) {
    data.sort((a, b) => a.prix - b.prix)
  }
  return (
    <div>
      {data
        .map((item, index) => (
          <Card key={index} {...item} />
        ))}
    </div>
  );
};

export default SideBar;
