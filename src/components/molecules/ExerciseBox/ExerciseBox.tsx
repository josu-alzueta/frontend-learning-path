import styles from './ExerciseBox.module.css'

type ExerciseBoxProps = {
  children: React.ReactNode
}

export const ExerciseBox: React.FC<ExerciseBoxProps> = ({ children }) => {
  return <article className={styles.ExerciseBox}>{children}</article>
}
