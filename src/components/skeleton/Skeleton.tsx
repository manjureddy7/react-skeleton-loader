import { SkeletonProps } from './propTypes';
import './skeleton.css';
import classNames from 'classnames';

function Skeleton (props: SkeletonProps) {
  const { type, style={} } = props;
  return <>
    <div className={classNames('skeleton', type)} style={{...style}}></div>
  </>
}

export default Skeleton;