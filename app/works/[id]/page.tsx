import Page from '@/app/_components/pages/WorksDetail/Page';

interface Props {
  params: { id: string };
}
const page = async (props: Props) => {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <Page id={props.params.id} />
    </div>
  );
};

export default page;
