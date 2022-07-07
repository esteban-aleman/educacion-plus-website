import classnames from 'classnames';
import styles from './Title.module.scss';
import { TitleProps } from './TitleProps';

const Title = (props: TitleProps) => {
  const { title, type, level, className } = props;
  const Tag = level;
  return <Tag className={classnames(styles[type], className)}>{title}</Tag>;
};

export default Title;
