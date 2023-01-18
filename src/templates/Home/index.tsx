import { Header } from 'components/molecules/Header';
import { SummaryTable } from 'components/organisms/SummaryTable';

export const Home = () => (
  <div className="flex h-screen w-screen items-center justify-center">
    <div className="flex w-full max-w-5xl flex-col gap-16 px-6">
      <Header />
      <SummaryTable />
    </div>
  </div>
);
