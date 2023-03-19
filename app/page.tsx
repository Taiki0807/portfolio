import { Page } from './components/pages';

export default function Home() {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <Page />
    </div>
  );
}
