import Masonry from 'react-masonry-css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { startLoadingNotes } from '../../actions/notes';
import { Notes } from './components/Note';

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    770: 2,
    500: 1,
};

export const CardsList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(startLoadingNotes())
    }, [dispatch]);

    const { notes } = useSelector((state: any) => state.notes);

    return (
        <>
            <div className="container py-2">
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {notes.map((note: any, idxNote: any) => (
                        <Notes note={note} key={idxNote} />
                    )
                    )}
                </Masonry>
            </div>
        </>
    );
};
