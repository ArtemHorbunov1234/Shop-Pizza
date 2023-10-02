import ReactPaginate from 'react-paginate';
import styles from './pagination.module.scss';
import { setCurrentPage } from '../../redux/slices/filterSlice';

function Pagination() {
    return (
        <div>
            <ReactPaginate
                className={styles.root}
                breakLabel='...'
                nextLabel='>'
                onPageChange={(event) => setCurrentPage(event.selected + 1)}
                pageRangeDisplayed={4}
                pageCount={3}
                previousLabel='<'
                renderOnZeroPageCount={null}
            ></ReactPaginate>
        </div>
    );
}

export default Pagination;
