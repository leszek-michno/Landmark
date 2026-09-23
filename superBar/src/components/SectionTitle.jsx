
import PropTypes from 'prop-types';

const SectionTitle = ({ text }) => {
  return (
    <div className='text-center' >
    <h2 className='text-6xl mb-10 px-4 font-medium inline-block text-amber-500' style={{ fontFamily: "cursive" }}>{text}</h2>
    </div>
  );
};


SectionTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SectionTitle;