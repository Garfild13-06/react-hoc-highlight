interface VideoProps {
    url: string;
    views: number;
}

export function Video({url, views}: VideoProps) {
    return (
        <div className="item item-video">
            <iframe
                src={url}
                allow="autoplay; encrypted-media"
                allowFullScreen
            ></iframe>
            <p className="views">Просмотров: {views}</p>
        </div>
    );
}