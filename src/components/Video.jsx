/* eslint-disable react/prop-types */
/**
 * @param {string} props.url адрес видео
 * @param {number} props.views количество просмотров
 */
const Video = (props) => {
  const { url, views } = props;
  return (
    <div className="item item-video">
        <iframe src={url} allow="autoplay; encrypted-media" allowFullScreen></iframe>
        <p className="views">Просмотров: {views}</p>
    </div>
  );
};

export default Video;
