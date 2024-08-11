import { Models } from 'appwrite';
import Loader from './Loader';
import GridPostList from './GridPostList';

type SearchResultProps = {
    isSearchFetching: boolean;
    isSearchPosts: Models.Document[];
};

const SearchResult = ({ isSearchFetching, isSearchPosts }: SearchResultProps) => {
    if (isSearchFetching) return <Loader />;

    if (isSearchPosts && isSearchPosts.length > 0) {
        return <GridPostList posts={isSearchPosts} />;
    }

    return (
        <p className="text-light-4 mt-10 text-center w-full">No results found</p>
    );
};

export default SearchResult;
