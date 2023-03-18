import style from './Title.module.css';

interface Props {
  title: string;
}

export const Title = (props: Props): JSX.Element => {
  return (
    <div>
      <h2 className={style.title}>{props.title}</h2>
    </div>
  );
};
