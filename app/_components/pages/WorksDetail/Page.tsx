import WorkDetail from './WorkDetail';
import { getWork } from './getWok';

interface Props {
  id: string;
}
const Page = async ({ id }: Props) => {
  const { workData } = await getWork(id);
  return (
    <div>
      <WorkDetail data={workData} />
    </div>
  );
};

export default Page;
