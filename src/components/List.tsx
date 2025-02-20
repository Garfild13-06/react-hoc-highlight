import {HighlightedArticle} from '../App';
import {HighlightedVideo} from '../App';

interface ListItem {
    type: string;

    [key: string]: any;
}

interface ListProps {
    list: ListItem[];
}

export function List({list}: ListProps) {
    return (
        <>
            {list.map((item, index) => {
                switch (item.type) {
                    case 'video':
                        return <HighlightedVideo url={''} views={0} key={index} {...item} />;
                    case 'article':
                        return <HighlightedArticle title={''} views={0} key={index} {...item} />;
                    default:
                        return null;
                }
            })}
        </>
    );
}