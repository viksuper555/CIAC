import styles from "./table.module.scss";

interface Props {
    tableImg: string;
    className?: string;
}

export const Table = ({ className, tableImg }: Props) => {
    return (
        <div className={`${className} ${styles.politicsTableContainer}`}>
            <img src={tableImg} className={styles.table}/>
        </div>
    )
}