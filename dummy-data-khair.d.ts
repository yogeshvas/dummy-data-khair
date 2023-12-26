declare module "dummy-data-khair" {
  const generateDummyData: (
    count: number,
    fields: { name: string; type: string }[]
  ) => any[];
  export default generateDummyData;
}
