import { Article } from '@/app/_components/pages';

interface Props {
  params: { id: string };
}

function Page(props: Props): JSX.Element {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <Article id={props.params.id} />
    </div>
  );
}

export default Page;
