/* eslint-disable react/prop-types */
/**
 * @param {object} props.children содержимое между открывающим и закрывающим тегом
 */
const New = (props) => {
    const { children } = props;

    return (
        <div className="wrap-item wrap-item-new">
            <span className="label">New!</span>
            {children}
        </div>
    );
};

export default New;
