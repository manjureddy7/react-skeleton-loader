import Skeleton from "../../components/skeleton/Skeleton"
import { SkeletonProductProps } from "./propTypes";
import './Products.css';

function SkeletonProduct(props: SkeletonProductProps) {
    const {iterations} = props;
    const count = new Array(iterations).fill(0);
  return <div className="skeleton-container">
    {count.map((item, index) => <div key={index} className="skeleton-item">
        <Skeleton type="thumbnail" />
        <Skeleton type="text-lg" />
        <Skeleton type="text-lg" />
        <Skeleton type="text-sm" />
   </div>)}
  </div>
}

export default SkeletonProduct;