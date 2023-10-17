 /* eslint-disable react/prop-types */

const Filterd = ({isChecked,setIsChecked}) => {
    return (
        <div className="button-container" >
            <input 
            onClick={() => setIsChecked(!isChecked)}
            type="button" 
            value="Trier par ordre croissant"
            className="button-trie"
            />
        </div>
    );
};

export default Filterd;