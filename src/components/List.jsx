import Video from './Video';
import Article from './Article';
import withWrapper from './withWrapper';

/**
 * @param {object} props.list массив объектов с данными видео файлов и статей
 */
const List = (props) => {
  const { list } = props;


  return list.map((item) => {
    switch(item.type) {
      case 'video':
        return withWrapper(Video)({...item});
        //break;
      case 'article':
        return withWrapper(Article)({...item});
        //break;
    }
  });
};

export default List;
