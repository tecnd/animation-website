export declare interface ImageToolProps {
  src: metadata[];
  className?: string;
}

export default function ImageTool(props: ImageToolProps) {
  const [fallback, ...sources] = props.src;
  return (
    <picture className={props.className}>
      {sources.map((metadata) => (
        <source
          key={metadata.src}
          type={`image/${metadata.format}`}
          srcSet={metadata.src}
        />
      ))}
      <img src={fallback.src} />
    </picture>
  );
}
