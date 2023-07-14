import styles from "@/components/policy/policy.module.scss";
import React from "react";

interface Props {
    hasButton?: boolean;
}

const ReadMoreBtn = ({ hasButton }: Props) => {
    return (
        <>
            {hasButton &&
                <div className={styles.button}>
                    Виж още
                </div>
            }
        </>
    )
}

export default ReadMoreBtn