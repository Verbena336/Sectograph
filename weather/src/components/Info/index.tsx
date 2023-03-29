import styles from './Info.module.scss';

type Props = {
  icon: string;
  value: string;
  name: string;
};

export default function Info(props: Props) {
  return (
    <div className={styles.content}>
      <span
        className="material-symbols-outlined"
        style={{
          color: 'rgb(22, 62, 85)',
          gridArea: 'a',
          fontSize: '30px',
          alignSelf: 'center',
        }}
      >
        {props.icon}
      </span>
      <p className={styles.content_title}>{props.value}</p>
      <p className={styles.content_subtitle}>{props.name}</p>
    </div>
  );
}
