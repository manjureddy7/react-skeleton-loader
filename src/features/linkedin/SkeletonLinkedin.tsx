import Skeleton from "../../components/skeleton/Skeleton";
import './SkeletonLinkedin.css';

function SkeletonLinkedin() {
    return <>
        <div className="pane">
            <div className="profile-container">
                <div className="profile">
                    <Skeleton type="circle" 
                        style={{ 
                            width: '50px', 
                            height: '50px',
                        }}
                    />
                    <div className="sub-texts">
                        <Skeleton type="text-sm" />
                        <Skeleton type="text-md" />
                    </div>
                </div>
                <Skeleton type="text-lg" />
                <Skeleton type="text-lg" style={{ 
                            width: '90%', 
                        }}/>
            </div>
            <div className="right-pane">
            <div className="connections">
                <Skeleton type="placeholder" style={{width: '50px', height: '50px'}}/>
                <div className="sub-texts">
                    <Skeleton type="text-sm" />
                    <Skeleton type="text-md" />
                </div>
            </div>
            <div className="connections">
                <Skeleton type="placeholder" style={{width: '50px', height: '50px'}}/>
                <div className="sub-texts">
                    <Skeleton type="text-sm" />
                    <Skeleton type="text-md" />
                </div>
            </div>
            </div>
           
        </div>
    </>
}

export default SkeletonLinkedin;
