import StickyNote from "@/components/ui/stickyNote";
import styles from "./singleNoteStickyPage.module.scss"

interface Props {
    noteImageSrc: any,
    circleImageSrc: any;
    noteWidth?: number;
    noteHeight?: number
    noteText: string;
    className?: string
}
const SingleStickyNotePage = ({ noteImageSrc, circleImageSrc, noteWidth, noteHeight, noteText, className }: Props) => {
    console.log(noteWidth)
    return (
        <div className={`${styles.singleStickyContainer} ${className}`}>
            <div className={styles.stickyWrapper}>
                <StickyNote noteImageSrc={noteImageSrc} circleImageSrc={circleImageSrc} noteText={noteText} noteWidth={noteWidth} noteHeight={noteHeight}/>
            </div>
        </div>
    )
}

export default SingleStickyNotePage