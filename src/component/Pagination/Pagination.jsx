import ReactPaginate from 'react-paginate';
import styles from './pagination.module.scss';
import PropTypes from 'prop-types';

function Pagination({ onChangePage }) {
    return (
        <div>
            <ReactPaginate
                className={styles.root}
                breakLabel='...'
                nextLabel='>'
                onPageChange={(event) => onChangePage(event.selected + 1)}
                pageRangeDisplayed={4}
                pageCount={3}
                previousLabel='<'
                renderOnZeroPageCount={null}
            ></ReactPaginate>
        </div>
    );
}

Pagination.propTypes = {
    onChangePage: PropTypes.number.isRequired,
};

export default Pagination;
