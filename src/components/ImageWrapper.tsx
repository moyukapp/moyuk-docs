type Props = {
  src: string;
  alt?: string;
}

export const ImageWrapper = (props: {
  src: string;
  alt?: string;
}) => {
  return <div style={{ padding: '16px', border: '1px solid #fff' }}>
    <img {...props} />
  </div>
};