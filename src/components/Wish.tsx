import { IWish } from '../constants'
import styles from './wish.module.css'

interface Props {
  congratulation: IWish
}

export default function Wish({ congratulation }: Props) {
  const { name, avatar, wish, tg, tgLink, video } = congratulation

  return (
    <div className={styles.wish}>
      {!video ? (
        <>
          <img className={styles.avatar} src={avatar} width={100} height={100} alt={name} />
          <span className={styles.name}>{name}</span>
          <a className={styles.telegram} href={tgLink}>
            {tg}
          </a>
          <p className={styles.wishText}>{wish}</p>
        </>
      ) : (
        <>
          <span className={styles.name}>{name}</span>
          <a className={styles.telegram} href={tgLink}>
            {tg}
          </a>
          <video className={styles.video} src={video} preload="auto" controls />
        </>
      )}
    </div>
  )
}
