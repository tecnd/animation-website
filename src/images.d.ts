type metadata = {
  src: string;
  width: number;
  height: number;
  format: string;
};
declare module "*&imagetools&meta" {
  const metadata: metadata[];
  export default metadata;
}
