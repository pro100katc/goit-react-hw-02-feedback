import PropTypes from 'prop-types';
import styles from 'components/FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return <div className={styles.feedback}>{options.map((option) => {
        const capitalizedOption = option.charAt(0).toUpperCase() + option.slice(1);
        return <button className={styles.button} type="button" key={option} name={option} onClick={onLeaveFeedback}>{capitalizedOption}</button>
    })}
    </div>
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}