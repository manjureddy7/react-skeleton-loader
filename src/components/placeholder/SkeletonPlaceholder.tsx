function SkeletonPlaceholder(props: PlaceholderProps) {
    const { ready, children, customPlaceholder } = props;
    return (ready ? children : customPlaceholder) as React.ReactElement;
}

export default SkeletonPlaceholder;
