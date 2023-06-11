import { TopPage } from './_components/pages';

export default function Home() {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <TopPage />
    </div>
  );
}
