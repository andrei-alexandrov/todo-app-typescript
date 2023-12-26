import "./GlowingText.css";

interface Props {
    title: string
}

const GlowingText: React.FC<Props> = ({ title }) => {
    return (
        <div className="content">
            <h1 className="title">{title}
                <div className="aurora">
                    <div className="aurora-item">
                    </div>
                    <div className="aurora-tem">
                    </div>
                    <div className="aurora-item">
                    </div>
                    <div className="aurora-item">
                    </div>
                </div>
            </h1>
        </div>
    )
}

export default GlowingText;