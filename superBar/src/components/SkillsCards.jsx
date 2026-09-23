import PropTypes from 'prop-types';

const SkillsCards = ({icon, title, text}) => {
  return (
    <article className='text-center'>
      <span>{icon}</span>
      <h1 className='mt-6 font-bold'>{title}</h1>
      <p className='mt-2'>{text}</p>
    </article>
  )
}

SkillsCards.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default SkillsCards

