/* eslint-disable react/prop-types */
import New from './New';
import Popular from './Popular';
import { nanoid } from 'nanoid';

/**
 * @param {number} props.views количество просмотров
 */
// eslint-disable-next-line react/display-name
const withWrapper = (Component) => (props) => {
  const { views } = props;

  if (views > 1000) {
    return (
      <Popular key={nanoid()}>
        <Component key={nanoid()} {...props} />
      </Popular>
    );
  } else if (views < 100) {
    return (
      <New key={nanoid()}>
        <Component key={nanoid()} {...props} />
      </New>
    );
  } else {
    return <Component key={nanoid()} {...props} />;
  }
};

export default withWrapper;
