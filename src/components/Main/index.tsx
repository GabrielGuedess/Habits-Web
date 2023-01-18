export type MainProps = {
  title: string;
  description: string;
};

export const Main = ({ title, description }: MainProps) => (
  <>
    <h1 className="m-2 text-4xl font-bold text-red-600">{title}</h1>
    <span className="m-2 text-4xl font-bold text-red-600">{description}</span>
  </>
);
