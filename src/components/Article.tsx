interface ArticleProps {
    title: string;
    views: number;
}

export function Article({title, views}: ArticleProps) {
    return (
        <div className="item item-article">
            <h3>
                <a href="#">{title}</a>
            </h3>
            <p className="views">Прочтений: {views}</p>
        </div>
    );
}