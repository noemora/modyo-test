import { useQuery } from '@tanstack/react-query';
import { getCards } from '../api/cards';
import Card from './Card';

export default function CardList() {
  const {
    isPending,
    error,
    data: cards,
  } = useQuery({
    queryKey: ['cards'],
    queryFn: () => getCards(),
    refetchOnWindowFocus: false,
  });

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!cards) return null;

  const shuffle = array => {
    return array.sort(() => Math.random() - 0.5);
  };
  const shuffledCards = shuffle([...cards, ...cards]);

  return (
    <div className="flex max-w-4xl flex-wrap justify-center gap-3">
      {shuffledCards.map(({ fields }, index) => (
        <Card
          key={index}
          imgSrc={fields.image.url}
          altText={fields.image.title}
        />
      ))}
    </div>
  );
}
