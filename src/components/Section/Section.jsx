import PropTypes from 'prop-types';
import styles from 'components/Section/Section.module.css'

export const Section = ({title, children}) => {
    return <div className={styles.section}>
    <h2>{title}</h2>
    {children}
    </div>
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
}