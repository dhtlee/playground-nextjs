// 'use client';
// import { useSearchParams } from 'next/navigation';

// const Page = () => {
//   const searchParams = useSearchParams();
//   const team = searchParams.get('team') || 'myTeam';
//   return (
//     <div>
//       <h1>Welcome to {team}'s Dashboard Page!</h1>
//     </div>);
// }

// export default Page;

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) => {
  const team = (await searchParams).team || 'myTeam';
  return (
    <div>
      <h1>Welcome to {team}'s Dashboard Page!</h1>
    </div>);
}

export default Page;