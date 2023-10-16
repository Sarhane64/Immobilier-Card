/* eslint-disable react/prop-types */
import Card from './Card.jsx';

const SideBar = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};

export default SideBar;
