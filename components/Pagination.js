import Link from 'next/link';

export const Pagination = ({ totalCount, perRage }) => {

  const range = (start, end) =>
        [...Array(end - start + 1)].map((_, i) => start + i)

  return (
    <ul>
      {range(1, Math.ceil(totalCount / perRage)).map((number, index) => (
        <li key={index}>
          <Link href={`/page/${number}`}>{number}</Link>
        </li>
      ))}
    </ul>
  );
};